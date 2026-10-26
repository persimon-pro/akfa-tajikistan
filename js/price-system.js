/* ==========================================================================
   AKFA ALUMINIUM TAJIKISTAN — STEP-BY-STEP WIZARD & INTERACTIVE PRICE ENGINE
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY_CART = "akfa_price_cart_v2";
  const STORAGE_KEY_CLIENT = "akfa_price_client_v2";
  const STORAGE_KEY_PREFS = "akfa_price_prefs_v2";

  const ALL_COATINGS_META = {
    raw:       { key: "raw",       label: "Без покрытия (стандарт)", short: "Без покр.",    swatch: "#94a3b8" },
    white:     { key: "white",     label: "Белый (RAL 9016)",        short: "Белый",        swatch: "#ffffff" },
    brown:     { key: "brown",     label: "Коричневый",              short: "Коричневый",   swatch: "#5d4037" },
    color:     { key: "color",     label: "Цветной (каталог RAL)",   short: "Цветной",      swatch: "#2563eb" },
    anodized:  { key: "anodized",  label: "Анодированный",           short: "Анодиров.",    swatch: "#cbd5e1" },
    vacuum:    { key: "vacuum",    label: "Вакуум (под дерево)",     short: "Вакуум",       swatch: "#b45309" },
    laminate:  { key: "laminate",  label: "Ламинат",                 short: "Ламинат",      swatch: "#78350f" },
    white_60:  { key: "white_60",  label: "Белый (хлыст 6,0 м)",     short: "Белый 6,0м",   swatch: "#ffffff" },
    white_65:  { key: "white_65",  label: "Белый (хлыст 6,5 м)",     short: "Белый 6,5м",   swatch: "#e2e8f0" },
    color_60:  { key: "color_60",  label: "Цветной (хлыст 6,0 м)",   short: "Цветной 6,0м", swatch: "#2563eb" },
    color_65:  { key: "color_65",  label: "Цветной (хлыст 6,5 м)",   short: "Цветной 6,5м", swatch: "#1d4ed8" },
    vacuum_60: { key: "vacuum_60", label: "Вакуум (хлыст 6,0 м)",    short: "Вакуум 6,0м",  swatch: "#b45309" },
    vacuum_65: { key: "vacuum_65", label: "Вакуум (хлыст 6,5 м)",    short: "Вакуум 6,5м",  swatch: "#92400e" }
  };

  function isMobileDevice() {
    return (
      window.innerWidth <= 991 ||
      (window.matchMedia && window.matchMedia("(max-width: 991px)").matches) ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || "")
    );
  }

  const state = {
    viewMode: "wizard",         // "wizard" | "table" (resolved in parseUrlParams)
    wizardStep: 1,              // 1: Series, 2: Finish/Color, 3: Items, 4: Checkout & WhatsApp
    wizardCoatingKey: "white",  // Chosen coating in Step 2
    wizardCategoryTab: "profile", // "profile" | "accessory" in Step 3
    activeSystemId: "ALDOX-45", // or "ALL" in table mode
    categoryFilter: "all",      // "all" | "profile" | "accessory" | "in_cart"
    searchQuery: "",
    currency: "USD",            // "USD" | "TJS"
    exchangeRate: 10.95,
    theme: "light",
    cart: {},                   // key: `${itemId}__${coatingKey}` -> { systemId, itemId, coatingKey, qty }
    client: {
      name: "",
      phone: "",
      ralNote: "",
      managerPhone: "992111124742"
    }
  };

  const itemMap = new Map();
  const systemMap = new Map();

  function buildMaps() {
    itemMap.clear();
    systemMap.clear();
    const cfg = window.AKFA_PRICE_CONFIG;
    if (!cfg || !cfg.systems) return;
    cfg.systems.forEach((sys) => {
      systemMap.set(sys.id, sys);
      sys.items.forEach((item) => {
        itemMap.set(item.id, { item, system: sys });
      });
    });
  }

  function loadStorage() {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY_CART);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (parsed && typeof parsed === "object") state.cart = parsed;
      }
      const savedClient = localStorage.getItem(STORAGE_KEY_CLIENT);
      if (savedClient) {
        const parsed = JSON.parse(savedClient);
        if (parsed && typeof parsed === "object") {
          state.client = Object.assign({}, state.client, parsed);
        }
      }
      const savedPrefs = localStorage.getItem(STORAGE_KEY_PREFS);
      if (savedPrefs) {
        const parsed = JSON.parse(savedPrefs);
        if (parsed && typeof parsed === "object") {
          if (parsed.currency) state.currency = parsed.currency;
          if (parsed.exchangeRate && Number(parsed.exchangeRate) > 0) {
            state.exchangeRate = Number(parsed.exchangeRate);
          }
          if (parsed.theme) state.theme = parsed.theme;
        }
      }
    } catch (e) {}
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(state.cart));
    } catch (e) {}
  }

  function saveClient() {
    try {
      localStorage.setItem(STORAGE_KEY_CLIENT, JSON.stringify(state.client));
    } catch (e) {}
  }

  function savePrefs() {
    try {
      localStorage.setItem(
        STORAGE_KEY_PREFS,
        JSON.stringify({
          currency: state.currency,
          exchangeRate: state.exchangeRate,
          theme: state.theme
        })
      );
    } catch (e) {}
  }

  function parseUrlParams() {
    try {
      state.viewMode = isMobileDevice() ? "wizard" : "table";
      const params = new URLSearchParams(window.location.search);
      const modeParam = params.get("mode");
      if (modeParam === "wizard" || modeParam === "table") {
        state.viewMode = isMobileDevice() ? "wizard" : modeParam;
      }
      const sysParam = params.get("system");
      if (sysParam) {
        const normalized = sysParam.toUpperCase().trim();
        if (systemMap.has(normalized)) {
          state.activeSystemId = normalized;
          ensureValidWizardCoating(normalized);
          if (state.viewMode === "wizard") {
            state.wizardStep = 2;
          }
        } else if (normalized === "ALL") {
          state.activeSystemId = "ALL";
        }
      }
    } catch (e) {}
  }

  function ensureValidWizardCoating(sysId) {
    const sys = systemMap.get(sysId);
    if (!sys) return;
    // Find profile coatings available in this system
    const profileCoatings = getSystemProfileCoatings(sys);
    if (profileCoatings.length > 0) {
      const exists = profileCoatings.some((c) => c.key === state.wizardCoatingKey);
      if (!exists) {
        state.wizardCoatingKey = profileCoatings[0].key;
      }
    }
  }

  function getSystemProfileCoatings(sys) {
    if (!sys || !sys.coatings) return [];
    const profiles = sys.items.filter((i) => i.category === "profile");
    return sys.coatings.filter((c) =>
      profiles.some((p) => p.prices && p.prices[c.key] !== undefined)
    );
  }

  function formatMoney(usdAmount, forceCurrency) {
    if (usdAmount === null || usdAmount === undefined || isNaN(usdAmount)) return "—";
    const cur = forceCurrency || state.currency;
    if (cur === "TJS") {
      const tjs = usdAmount * state.exchangeRate;
      return tjs.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " сом.";
    }
    return "$" + usdAmount.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function getItemUnitLengthMeters(item, coatingKey) {
    if (item.category !== "profile") return 0;
    if (coatingKey && coatingKey.endsWith("_60")) return 6.0;
    if (coatingKey && coatingKey.endsWith("_65")) return 6.5;
    const u = String(item.unit || "");
    if (u.includes("6.5")) return 6.5;
    if (u.includes("6")) return 6.0;
    return 6.0;
  }

  function getCoatingMeta(systemId, coatingKey) {
    const sys = systemMap.get(systemId);
    if (sys && sys.coatings) {
      const found = sys.coatings.find((c) => c.key === coatingKey);
      if (found) return found;
    }
    return ALL_COATINGS_META[coatingKey] || { key: coatingKey, label: coatingKey, short: coatingKey, swatch: "#94a3b8" };
  }

  function getCartKey(itemId, coatingKey) {
    return `${itemId}__${coatingKey}`;
  }

  function getItemQty(itemId, coatingKey) {
    const entry = state.cart[getCartKey(itemId, coatingKey)];
    return entry ? entry.qty : 0;
  }

  function setItemQty(itemId, coatingKey, qty) {
    const found = itemMap.get(itemId);
    if (!found) return;
    const cleanQty = Math.max(0, Math.round(Number(qty) || 0));
    const key = getCartKey(itemId, coatingKey);
    if (cleanQty <= 0) {
      delete state.cart[key];
    } else {
      state.cart[key] = {
        systemId: found.system.id,
        itemId: itemId,
        coatingKey: coatingKey,
        qty: cleanQty
      };
    }
    saveCart();
    renderAll();
  }

  function adjustItemQty(itemId, coatingKey, delta) {
    const current = getItemQty(itemId, coatingKey);
    setItemQty(itemId, coatingKey, current + delta);
  }

  function clearCart() {
    if (Object.keys(state.cart).length === 0) return;
    state.cart = {};
    saveCart();
    renderAll();
    showToast("Заявка очищена");
  }

  function getCartStats() {
    let totalPositions = 0;
    let totalProfileBars = 0;
    let totalAccessories = 0;
    let totalLinearMeters = 0;
    let subtotalUsd = 0;
    const bySystemCount = {};

    Object.values(state.cart).forEach((entry) => {
      if (!entry || entry.qty <= 0) return;
      const found = itemMap.get(entry.itemId);
      if (!found) return;
      const { item, system } = found;
      const unitPrice = item.prices && item.prices[entry.coatingKey] !== undefined ? Number(item.prices[entry.coatingKey]) : null;

      totalPositions += 1;
      bySystemCount[system.id] = (bySystemCount[system.id] || 0) + entry.qty;

      if (item.category === "profile") {
        totalProfileBars += entry.qty;
        totalLinearMeters += entry.qty * getItemUnitLengthMeters(item, entry.coatingKey);
      } else {
        totalAccessories += entry.qty;
      }

      if (unitPrice !== null && !isNaN(unitPrice)) {
        subtotalUsd += unitPrice * entry.qty;
      }
    });

    return {
      totalPositions,
      totalProfileBars,
      totalAccessories,
      totalLinearMeters: Math.round(totalLinearMeters * 10) / 10,
      grandTotalUsd: subtotalUsd,
      bySystemCount
    };
  }

  // ==================== STEP-BY-STEP WIZARD RENDERER ====================
  function renderWizard() {
    const wizEl = document.getElementById("wizardWorkspace");
    if (!wizEl) return;

    const sysId = state.activeSystemId === "ALL" ? "ALDOX-45" : state.activeSystemId;
    const sys = systemMap.get(sysId) || window.AKFA_PRICE_CONFIG.systems[0];
    ensureValidWizardCoating(sys.id);

    const coatMeta = getCoatingMeta(sys.id, state.wizardCoatingKey);
    const stats = getCartStats();

    // 1. Render 4-step progress tabs
    const steps = [
      { num: 1, title: "1. Серия", val: sys.title },
      { num: 2, title: "2. Цвет", val: coatMeta.short || coatMeta.label },
      { num: 3, title: "3. Позиции", val: stats.totalPositions > 0 ? `Выбрано: ${stats.totalPositions}` : "Выбор" },
      { num: 4, title: "4. Заявка", val: stats.totalPositions > 0 ? formatMoney(stats.grandTotalUsd) : "WhatsApp" }
    ];

    const stepsBarHtml = `
      <div class="wizard-steps" role="tablist" aria-label="Этапы заполнения заявки">
        ${steps
          .map((s) => {
            const isActive = state.wizardStep === s.num;
            const isDone = state.wizardStep > s.num || (s.num === 4 && stats.totalPositions > 0 && state.wizardStep !== 4);
            return `
              <button type="button" class="wizard-step-tab ${isActive ? "active" : isDone ? "done" : ""}" onclick="AKFAPrice.goToStep(${s.num})">
                <span class="wizard-step-tab__num">${s.title}</span>
                <span class="wizard-step-tab__label">${s.val}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;

    let stepBodyHtml = "";

    // STEP 1: CHOOSE PROFILE SERIES
    if (state.wizardStep === 1) {
      const systems = window.AKFA_PRICE_CONFIG.systems || [];
      stepBodyHtml = `
        <div class="wizard-card">
          <div class="wizard-card__header">
            <div class="wizard-card__step-tag">Шаг 1 из 4</div>
            <h2 class="wizard-card__title">Выберите серию профиля</h2>
            <p class="wizard-card__sub">Нажмите на нужную систему, чтобы перейти к выбору цвета и комплектующих.</p>
          </div>
          <div class="wizard-series-grid">
            ${systems
              .map((s) => {
                const inCart = stats.bySystemCount[s.id] || 0;
                const isSelected = sys.id === s.id;
                return `
                  <button type="button" class="wiz-option-btn ${isSelected ? "selected" : ""}" onclick="AKFAPrice.wizardPickSystem('${s.id}')">
                    <div>
                      <div class="wiz-option-btn__title">${s.title}</div>
                      <div class="wiz-option-btn__desc">${s.subtitle} · ${s.depth}</div>
                      ${inCart > 0 ? `<div style="font-size:11.5px;font-weight:700;color:var(--akfa-wa);margin-top:4px;">Уже в заявке: ${inCart} шт.</div>` : ""}
                    </div>
                    <span class="wiz-option-btn__arrow">→</span>
                  </button>
                `;
              })
              .join("")}
          </div>
          ${
            stats.totalPositions > 0
              ? `
            <div class="wiz-nav-footer">
              <span style="font-size:13px;color:var(--akfa-text-sec);">В заявке уже ${stats.totalPositions} поз. (${formatMoney(stats.grandTotalUsd)})</span>
              <button type="button" class="akfa-btn akfa-btn--primary" onclick="AKFAPrice.goToStep(4)">Перейти к отправке →</button>
            </div>
          `
              : ""
          }
        </div>
      `;
    }

    // STEP 2: CHOOSE COLOR / COATING
    else if (state.wizardStep === 2) {
      const profileCoatings = getSystemProfileCoatings(sys);
      const profiles = sys.items.filter((i) => i.category === "profile");

      stepBodyHtml = `
        <div class="wizard-card">
          <div class="wizard-card__header">
            <div class="wizard-card__step-tag">Шаг 2 из 4 · Серия ${sys.title}</div>
            <h2 class="wizard-card__title">Выберите цвет покрытия</h2>
            <p class="wizard-card__sub">Мы покажем цены профилей ${sys.title} именно для выбранного покрытия.</p>
          </div>
          <div class="wizard-color-list">
            ${profileCoatings
              .map((c) => {
                const minPrice = profiles.reduce((min, p) => {
                  const val = p.prices && p.prices[c.key] !== undefined ? Number(p.prices[c.key]) : null;
                  return val !== null && (min === null || val < min) ? val : min;
                }, null);
                const isSelected = state.wizardCoatingKey === c.key;
                return `
                  <button type="button" class="wiz-option-btn ${isSelected ? "selected" : ""}" onclick="AKFAPrice.wizardPickCoating('${c.key}')">
                    <div style="display:flex;align-items:center;gap:12px;">
                      <span class="wiz-color-swatch-lg" style="background:${c.swatch || "#ccc"};"></span>
                      <div>
                        <div class="wiz-option-btn__title">${c.label}</div>
                        <div class="wiz-option-btn__desc">Профили ${sys.title} · от ${formatMoney(minPrice)} за хлыст</div>
                      </div>
                    </div>
                    <span class="wiz-option-btn__arrow">→</span>
                  </button>
                `;
              })
              .join("")}
          </div>
          <div class="wiz-nav-footer">
            <button type="button" class="akfa-btn" onclick="AKFAPrice.goToStep(1)">← Назад к сериям</button>
            <button type="button" class="akfa-btn akfa-btn--primary" onclick="AKFAPrice.goToStep(3)">Далее к списку →</button>
          </div>
        </div>
      `;
    }

    // STEP 3: PICK ITEMS (ONLY ONE PRICE SHOWN PER ITEM!)
    else if (state.wizardStep === 3) {
      const allProfiles = sys.items.filter((i) => i.category === "profile");
      const allAccessories = sys.items.filter((i) => i.category === "accessory");
      const sourceItems = state.wizardCategoryTab === "profile" ? allProfiles : allAccessories;

      const filtered = sourceItems.filter((item) => {
        if (!state.searchQuery) return true;
        const q = state.searchQuery.toLowerCase();
        return `${item.code || ""} ${item.name || ""}`.toLowerCase().includes(q);
      });

      const resolveItemTargetCoating = (item) => {
        if (item.prices && item.prices[state.wizardCoatingKey] !== undefined) {
          return state.wizardCoatingKey;
        }
        // For accessories that only have "raw" or a single price key, use the best match
        const keys = Object.keys(item.prices || {});
        return keys.length > 0 ? keys[0] : state.wizardCoatingKey;
      };

      const rowsHtml = filtered
        .map((item) => {
          const targetCoat = resolveItemTargetCoating(item);
          const coatObj = getCoatingMeta(sys.id, targetCoat);
          const priceVal = item.prices && item.prices[targetCoat] !== undefined ? Number(item.prices[targetCoat]) : null;
          const qty = getItemQty(item.id, targetCoat);
          const unitInfo = item.category === "profile" ? `${item.unit} м` : item.pack || "1 шт";

          return `
            <div class="wiz-item-row ${qty > 0 ? "active-row" : ""}">
              <div class="wiz-item-row__left">
                <div class="wiz-item-row__name">${item.name}</div>
                <div class="wiz-item-row__meta">
                  ${item.code ? `<span class="item-code">${item.code}</span>` : ""}
                  <span>${unitInfo}</span>
                  <span>·</span>
                  <span>${coatObj.short || coatObj.label}</span>
                  <span>·</span>
                  <span class="wiz-item-row__price">${priceVal !== null ? formatMoney(priceVal) : "По запросу"}</span>
                </div>
              </div>
              <div>
                ${
                  priceVal === null
                    ? `<span style="font-size:12px;color:var(--akfa-text-muted);">—</span>`
                    : qty > 0
                    ? `
                      <div class="wiz-qty-box">
                        <button type="button" onclick="AKFAPrice.adjustQty('${item.id}', '${targetCoat}', -1)" aria-label="Меньше">−</button>
                        <input type="number" min="0" value="${qty}" onchange="AKFAPrice.setQty('${item.id}', '${targetCoat}', this.value)" aria-label="Количество">
                        <button type="button" onclick="AKFAPrice.adjustQty('${item.id}', '${targetCoat}', 1)" aria-label="Больше">+</button>
                      </div>
                    `
                    : `
                      <button type="button" class="wiz-add-btn" onclick="AKFAPrice.adjustQty('${item.id}', '${targetCoat}', 1)">
                        + Выбрать
                      </button>
                    `
                }
              </div>
            </div>
          `;
        })
        .join("");

      stepBodyHtml = `
        <div class="wizard-card">
          <div class="wizard-card__header">
            <div class="wizard-card__step-tag">Шаг 3 из 4</div>
            <h2 class="wizard-card__title">Отметьте нужные позиции</h2>
          </div>

          <div class="wiz-context-bar">
            <div>
              Серия: <strong>${sys.title}</strong> · Цвет: <strong>${coatMeta.short || coatMeta.label}</strong>
            </div>
            <div style="display:flex;gap:10px;">
              <button type="button" class="text-action-btn" onclick="AKFAPrice.goToStep(2)">Изменить цвет</button>
              <button type="button" class="text-action-btn" onclick="AKFAPrice.goToStep(1)">Сменить серию</button>
            </div>
          </div>

          <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:12px;">
            <div class="segment-pills" style="width:100%;display:grid;grid-template-columns:1fr 1fr;">
              <button type="button" class="segment-pill ${state.wizardCategoryTab === "profile" ? "active" : ""}" onclick="AKFAPrice.setWizardCategoryTab('profile')">
                Профили (${allProfiles.length})
              </button>
              <button type="button" class="segment-pill ${state.wizardCategoryTab === "accessory" ? "active" : ""}" onclick="AKFAPrice.setWizardCategoryTab('accessory')">
                Комплектующие (${allAccessories.length})
              </button>
            </div>
            <div class="search-input-wrap" style="width:100%;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="search" id="wizSearchInput" value="${state.searchQuery}" placeholder="Быстрый фильтр по названию или коду..." oninput="AKFAPrice.setSearchQuery(this.value)">
              ${state.searchQuery ? `<button type="button" class="search-clear-btn" onclick="AKFAPrice.clearSearch()">×</button>` : ""}
            </div>
          </div>

          <div class="wiz-items-list">
            ${rowsHtml || `<div class="order-empty">Ничего не найдено по запросу «${state.searchQuery}»</div>`}
          </div>

          <div class="wiz-nav-footer">
            <button type="button" class="akfa-btn" onclick="AKFAPrice.goToStep(2)">← Назад</button>
            <button type="button" class="akfa-btn akfa-btn--primary" onclick="AKFAPrice.goToStep(4)">
              Далее: Проверить заявку (${stats.totalPositions}) →
            </button>
          </div>
        </div>
      `;
    }

    // STEP 4: FINAL REVIEW & WHATSAPP DISPATCH
    else if (state.wizardStep === 4) {
      const entries = Object.values(state.cart).filter((e) => e && e.qty > 0);
      const altCur = state.currency === "USD" ? "TJS" : "USD";

      const itemsListHtml =
        entries.length === 0
          ? `<div class="order-empty">Вы ещё не выбрали ни одной позиции.<br><button type="button" class="akfa-btn" style="margin-top:10px;" onclick="AKFAPrice.goToStep(3)">← Вернуться к выбору позиций</button></div>`
          : entries
              .map((entry) => {
                const found = itemMap.get(entry.itemId);
                if (!found) return "";
                const { item, system } = found;
                const meta = getCoatingMeta(system.id, entry.coatingKey);
                const unitPrice = item.prices && item.prices[entry.coatingKey] !== undefined ? Number(item.prices[entry.coatingKey]) : 0;
                return `
                  <div class="receipt-item">
                    <div>
                      <div class="receipt-item__name">${item.name}</div>
                      <div class="receipt-item__sub">${system.title} · ${meta.short || meta.label}${item.code ? ` · ${item.code}` : ""}</div>
                    </div>
                    <div class="receipt-item__right">
                      <div class="receipt-item__sum">${formatMoney(unitPrice * entry.qty)}</div>
                      <div class="receipt-item__controls">
                        <button type="button" onclick="AKFAPrice.adjustQty('${item.id}', '${entry.coatingKey}', -1)">−</button>
                        <span>${entry.qty}</span>
                        <button type="button" onclick="AKFAPrice.adjustQty('${item.id}', '${entry.coatingKey}', 1)">+</button>
                      </div>
                    </div>
                  </div>
                `;
              })
              .join("");

      stepBodyHtml = `
        <div class="wizard-card">
          <div class="wizard-card__header">
            <div class="wizard-card__step-tag">Шаг 4 из 4 · Готово к отправке</div>
            <h2 class="wizard-card__title">Проверьте и отправьте заявку</h2>
            <p class="wizard-card__sub">Укажите имя или название цеха и отправьте готовый расчёт напрямую менеджеру в WhatsApp.</p>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <button type="button" class="text-action-btn" onclick="AKFAPrice.goToStep(1)">+ Добавить ещё серию</button>
            ${entries.length > 0 ? `<button type="button" class="order-sidebar__clear" onclick="AKFAPrice.clearCart()">Очистить всё</button>` : ""}
          </div>

          <div style="border-top:1px solid var(--akfa-border);border-bottom:1px solid var(--akfa-border);padding:6px 0;margin-bottom:14px;">
            ${itemsListHtml}
          </div>

          <div style="background:var(--akfa-surface-subtle);padding:14px;border-radius:var(--akfa-radius-sm);margin-bottom:16px;">
            <div class="summary-row">
              <span>Профили (метраж)</span>
              <strong>${stats.totalProfileBars} шт (${stats.totalLinearMeters} п.м.)</strong>
            </div>
            <div class="summary-row">
              <span>Комплектующие</span>
              <strong>${stats.totalAccessories} ед.</strong>
            </div>
            <div class="summary-total">
              <span class="summary-total__label">Итого по прайсу</span>
              <div>
                <div class="summary-total__val">${formatMoney(stats.grandTotalUsd)}</div>
                <div class="summary-total__alt">≈ ${formatMoney(stats.grandTotalUsd, altCur)}</div>
              </div>
            </div>
          </div>

          <div class="mini-field">
            <label for="wizClientName">Ваше имя или название цеха</label>
            <input type="text" id="wizClientName" value="${state.client.name || ""}" placeholder="Например: Рустам / Цех Сомон Окна" oninput="AKFAPrice.updateClientField('name', this.value)">
          </div>
          <div class="mini-field">
            <label for="wizClientPhone">Ваш номер телефона</label>
            <input type="tel" id="wizClientPhone" value="${state.client.phone || ""}" placeholder="+992 90 000 00 00" oninput="AKFAPrice.updateClientField('phone', this.value)">
          </div>
          <div class="mini-field" style="margin-bottom:16px;">
            <label for="wizClientRal">Комментарий / Код цвета RAL</label>
            <input type="text" id="wizClientRal" value="${state.client.ralNote || ""}" placeholder="Например: RAL 7016 антрацит, доставка" oninput="AKFAPrice.updateClientField('ralNote', this.value)">
          </div>

          <button type="button" class="akfa-btn akfa-btn--whatsapp" onclick="AKFAPrice.sendOrderToWhatsApp()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span>Отправить заявку менеджеру в WhatsApp</span>
          </button>

          <div class="sidebar-secondary-actions">
            <button type="button" class="akfa-btn" onclick="AKFAPrice.printCommercialQuote()">Печать / PDF</button>
            <button type="button" class="akfa-btn" onclick="AKFAPrice.exportOrderCsv()">Excel (CSV)</button>
            <button type="button" class="akfa-btn" onclick="AKFAPrice.copyOrderText()">Скопировать</button>
          </div>
        </div>
      `;
    }

    wizEl.innerHTML = stepsBarHtml + stepBodyHtml;
  }

  // ==================== FULL TABLE MODE RENDERERS ====================

  function renderSystemTabs() {
    const navEl = document.getElementById("systemsNav");
    if (!navEl) return;
    const systems = window.AKFA_PRICE_CONFIG.systems || [];
    const stats = getCartStats();

    let html = "";
    systems.forEach((sys) => {
      const isActive = state.activeSystemId === sys.id;
      const inCartCount = stats.bySystemCount[sys.id] || 0;
      const badgeText = inCartCount > 0 ? `В заказе: ${inCartCount}` : `${sys.items.length}`;
      html += `
        <button type="button" class="system-pill ${isActive ? "active" : ""}" onclick="AKFAPrice.selectSystem('${sys.id}')">
          <span class="system-pill__name">${sys.title}</span>
          <span class="system-pill__count">${badgeText}</span>
        </button>
      `;
    });

    const isAll = state.activeSystemId === "ALL";
    const totalItemsCount = systems.reduce((acc, s) => acc + s.items.length, 0);
    html += `
      <button type="button" class="system-pill ${isAll ? "active" : ""}" onclick="AKFAPrice.selectSystem('ALL')">
        <span class="system-pill__name">Все серии</span>
        <span class="system-pill__count">${totalItemsCount}</span>
      </button>
    `;

    navEl.innerHTML = html;
  }

  function renderSystemSubbar() {
    const subbarEl = document.getElementById("systemSubbar");
    if (!subbarEl) return;

    if (state.activeSystemId === "ALL") {
      subbarEl.innerHTML = `
        <div>Показаны все 6 серий алюминиевых профилей и комплектующих (314 позиций).</div>
        <div class="system-subbar__links">
          <a href="${window.AKFA_PRICE_CONFIG.spreadsheetUrl}" target="_blank" rel="noopener" class="text-action-btn">Google Таблица прайса</a>
        </div>
      `;
      return;
    }

    const sys = systemMap.get(state.activeSystemId);
    if (!sys) return;

    subbarEl.innerHTML = `
      <div>
        <strong>${sys.title}</strong> — ${sys.subtitle} (${sys.depth})
      </div>
      <div class="system-subbar__links">
        <button type="button" class="text-action-btn" onclick="AKFAPrice.openSheetModal()">Посмотреть оригинал бланка</button>
        <a href="${sys.pageLink}" class="text-action-btn">О серии</a>
      </div>
    `;
  }

  function renderFilters() {
    const catContainer = document.getElementById("categoryFilterPills");
    if (!catContainer) return;
    const stats = getCartStats();
    const cats = [
      { key: "all", label: "Все" },
      { key: "profile", label: "Профили" },
      { key: "accessory", label: "Комплектующие" },
      { key: "in_cart", label: `Выбранные (${stats.totalPositions})` }
    ];
    catContainer.innerHTML = cats
      .map(
        (c) => `
        <button type="button" class="segment-pill ${state.categoryFilter === c.key ? "active" : ""}" onclick="AKFAPrice.setCategoryFilter('${c.key}')">
          ${c.label}
        </button>
      `
      )
      .join("");
  }

  function itemMatchesFilters(item, system) {
    const hasInCart = Object.keys(state.cart).some((k) => k.startsWith(item.id + "__") && state.cart[k].qty > 0);
    if (state.categoryFilter === "profile" && item.category !== "profile") return false;
    if (state.categoryFilter === "accessory" && item.category !== "accessory") return false;
    if (state.categoryFilter === "in_cart" && !hasInCart) return false;

    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const hay = `${item.code || ""} ${item.name || ""} ${system.title || ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }

    return true;
  }

  function renderTable() {
    const theadEl = document.getElementById("priceTableHead");
    const tbodyEl = document.getElementById("priceTableBody");
    if (!theadEl || !tbodyEl) return;

    const systemsToRender =
      state.activeSystemId === "ALL"
        ? window.AKFA_PRICE_CONFIG.systems
        : [systemMap.get(state.activeSystemId)].filter(Boolean);

    theadEl.innerHTML = `
      <tr>
        <th scope="col">Наименование и артикул</th>
        <th scope="col">Доступные покрытия и цена (нажмите для добавления)</th>
      </tr>
    `;

    let rowsHtml = "";

    systemsToRender.forEach((sys) => {
      const filteredItems = sys.items.filter((item) => itemMatchesFilters(item, sys));
      if (filteredItems.length === 0) return;

      const profiles = filteredItems.filter((i) => i.category === "profile");
      const accessories = filteredItems.filter((i) => i.category === "accessory");

      const appendGroup = (groupTitle, items) => {
        if (items.length === 0) return;
        rowsHtml += `
          <tr class="group-divider">
            <td colspan="2">${sys.title} · ${groupTitle} (${items.length})</td>
          </tr>
        `;

        items.forEach((item) => {
          const rowSelected = Object.keys(state.cart).some(
            (k) => k.startsWith(item.id + "__") && state.cart[k].qty > 0
          );

          const unitText =
            item.category === "profile"
              ? `Хлыст ${item.unit} м`
              : `Упак.: ${item.pack || "1 шт"}`;

          const priceEntries = Object.entries(item.prices || {});
          let chipsHtml = "";

          if (priceEntries.length === 0) {
            chipsHtml = `<span style="font-size:12.5px;color:var(--akfa-text-muted);">По запросу</span>`;
          } else {
            chipsHtml = priceEntries
              .map(([coatKey, priceVal]) => {
                const meta = getCoatingMeta(sys.id, coatKey);
                const qty = getItemQty(item.id, coatKey);
                const formattedUnit = formatMoney(Number(priceVal));

                if (qty > 0) {
                  const formattedLine = formatMoney(Number(priceVal) * qty);
                  return `
                    <div class="finish-stepper">
                      <div class="finish-stepper__info">
                        <span class="finish-stepper__label">${meta.short || meta.label}</span>
                        <span class="finish-stepper__price">${formattedLine}</span>
                      </div>
                      <button type="button" class="finish-stepper__btn" onclick="AKFAPrice.adjustQty('${item.id}', '${coatKey}', -1)" aria-label="Уменьшить">−</button>
                      <input type="number" min="0" class="finish-stepper__input" value="${qty}" onchange="AKFAPrice.setQty('${item.id}', '${coatKey}', this.value)" aria-label="Количество">
                      <button type="button" class="finish-stepper__btn" onclick="AKFAPrice.adjustQty('${item.id}', '${coatKey}', 1)" aria-label="Увеличить">+</button>
                    </div>
                  `;
                }

                return `
                  <button type="button" class="finish-chip" onclick="AKFAPrice.adjustQty('${item.id}', '${coatKey}', 1)">
                    <span class="finish-chip__swatch" style="background:${meta.swatch || "#ccc"};"></span>
                    <span class="finish-chip__label">${meta.short || meta.label}</span>
                    <span class="finish-chip__price">${formattedUnit}</span>
                    <span class="finish-chip__plus">+</span>
                  </button>
                `;
              })
              .join("");
          }

          rowsHtml += `
            <tr class="${rowSelected ? "row-selected" : ""}">
              <th scope="row">
                <div class="item-title">${item.name}</div>
                <div class="item-meta">
                  ${item.code ? `<span class="item-code">${item.code}</span>` : ""}
                  <span>${unitText}</span>
                </div>
              </th>
              <td data-label="Выберите вариант и цену">
                <div class="finish-options-list">${chipsHtml}</div>
              </td>
            </tr>
          `;
        });
      };

      appendGroup("Алюминиевые профили", profiles);
      appendGroup("Комплектующие и аксессуары", accessories);
    });

    if (!rowsHtml) {
      rowsHtml = `
        <tr>
          <td colspan="2" style="text-align:center;padding:42px 20px;color:var(--akfa-text-muted);">
            По вашему запросу ничего не найдено.
            <div style="margin-top:10px;">
              <button type="button" class="akfa-btn" onclick="AKFAPrice.resetFilters()">Показать все позиции</button>
            </div>
          </td>
        </tr>
      `;
    }

    tbodyEl.innerHTML = rowsHtml;
  }

  function renderOrderReceipt() {
    const stats = getCartStats();
    const entries = Object.values(state.cart).filter((e) => e && e.qty > 0);
    const altCur = state.currency === "USD" ? "TJS" : "USD";

    const itemsEl = document.getElementById("sidebarOrderItems");
    const summaryEl = document.getElementById("sidebarOrderSummary");
    const clearBtn = document.getElementById("sidebarClearBtn");

    if (clearBtn) {
      clearBtn.style.display = entries.length > 0 ? "inline" : "none";
    }

    if (itemsEl) {
      if (entries.length === 0) {
        itemsEl.innerHTML = `
          <div class="order-empty">
            Нажмите на цену нужного профиля или аксессуара в списке слева — позиция сразу появится здесь.
          </div>
        `;
      } else {
        itemsEl.innerHTML = entries
          .map((entry) => {
            const found = itemMap.get(entry.itemId);
            if (!found) return "";
            const { item, system } = found;
            const meta = getCoatingMeta(system.id, entry.coatingKey);
            const unitPrice = item.prices && item.prices[entry.coatingKey] !== undefined ? Number(item.prices[entry.coatingKey]) : 0;
            const lineTotal = unitPrice * entry.qty;
            return `
              <div class="receipt-item">
                <div>
                  <div class="receipt-item__name">${item.name}</div>
                  <div class="receipt-item__sub">${system.title} · ${meta.short || meta.label}${item.code ? ` · ${item.code}` : ""}</div>
                </div>
                <div class="receipt-item__right">
                  <div class="receipt-item__sum">${formatMoney(lineTotal)}</div>
                  <div class="receipt-item__controls">
                    <button type="button" onclick="AKFAPrice.adjustQty('${item.id}', '${entry.coatingKey}', -1)">−</button>
                    <span>${entry.qty}</span>
                    <button type="button" onclick="AKFAPrice.adjustQty('${item.id}', '${entry.coatingKey}', 1)">+</button>
                  </div>
                </div>
              </div>
            `;
          })
          .join("");
      }
    }

    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="summary-row">
          <span>Профили (метраж)</span>
          <strong>${stats.totalProfileBars} шт (${stats.totalLinearMeters} п.м.)</strong>
        </div>
        <div class="summary-row">
          <span>Комплектующие</span>
          <strong>${stats.totalAccessories} ед.</strong>
        </div>
        <div class="summary-total">
          <span class="summary-total__label">Итого</span>
          <div>
            <div class="summary-total__val">${formatMoney(stats.grandTotalUsd)}</div>
            <div class="summary-total__alt">≈ ${formatMoney(stats.grandTotalUsd, altCur)}</div>
          </div>
        </div>
      `;
    }

    // Bottom Sticky Bar visibility & content
    const mobBar = document.getElementById("mobileOrderBar");
    const mobCount = document.getElementById("mobileCartCount");
    const mobTotal = document.getElementById("mobileCartTotal");
    if (mobCount) mobCount.textContent = `${stats.totalPositions} поз. · ${stats.totalLinearMeters} п.м.`;
    if (mobTotal) mobTotal.textContent = formatMoney(stats.grandTotalUsd);
    if (mobBar) {
      if (state.viewMode === "wizard" && state.wizardStep === 4) {
        mobBar.style.display = "none";
      } else if (state.viewMode === "wizard") {
        mobBar.style.display = stats.totalPositions > 0 ? "flex" : "none";
      } else {
        mobBar.style.display = window.innerWidth <= 1100 ? "flex" : "none";
      }
    }

    const previewEl = document.getElementById("whatsappMessagePreview");
    if (previewEl) {
      previewEl.textContent = buildWhatsAppMessageText();
    }
  }

  function buildWhatsAppMessageText() {
    const stats = getCartStats();
    const entries = Object.values(state.cart).filter((e) => e && e.qty > 0);
    const now = new Date();
    const dateStr = now.toLocaleDateString("ru-RU");

    const lines = [];
    lines.push(`*ЗАЯВКА ПО ПРАЙС-ЛИСТУ AKFA ALUMINIUM*`);
    lines.push(`Дата: ${dateStr}`);
    if (state.client.name) lines.push(`Клиент / Цех: ${state.client.name}`);
    if (state.client.phone) lines.push(`Телефон: ${state.client.phone}`);
    if (state.client.ralNote) lines.push(`Комментарий / RAL: ${state.client.ralNote}`);
    lines.push(`────────────────────`);

    if (entries.length === 0) {
      lines.push(`(Спецификация пуста)`);
      return lines.join("\n");
    }

    const grouped = {};
    entries.forEach((entry) => {
      const found = itemMap.get(entry.itemId);
      if (!found) return;
      if (!grouped[found.system.id]) {
        grouped[found.system.id] = { system: found.system, rows: [] };
      }
      grouped[found.system.id].rows.push({ entry, item: found.item });
    });

    Object.values(grouped).forEach((grp) => {
      lines.push(`\n*${grp.system.title}*`);
      grp.rows.forEach(({ entry, item }, idx) => {
        const meta = getCoatingMeta(grp.system.id, entry.coatingKey);
        const unitPrice = item.prices && item.prices[entry.coatingKey] !== undefined ? Number(item.prices[entry.coatingKey]) : 0;
        const lineTotal = unitPrice * entry.qty;
        const codeStr = item.code ? `[${item.code}] ` : "";
        const lenM = getItemUnitLengthMeters(item, entry.coatingKey);
        const mStr = lenM > 0 ? ` (${(lenM * entry.qty).toFixed(1)} п.м.)` : "";
        lines.push(`${idx + 1}. ${codeStr}${item.name} (${meta.short || meta.label}) — ${entry.qty} шт${mStr} × ${formatMoney(unitPrice)} = *${formatMoney(lineTotal)}*`);
      });
    });

    const altCur = state.currency === "USD" ? "TJS" : "USD";
    lines.push(`\n────────────────────`);
    lines.push(`Профили: ${stats.totalProfileBars} шт (${stats.totalLinearMeters} п.м.) | Комплектующие: ${stats.totalAccessories} ед.`);
    lines.push(`*ИТОГО: ${formatMoney(stats.grandTotalUsd)}* (~${formatMoney(stats.grandTotalUsd, altCur)})`);

    return lines.join("\n");
  }

  function syncClientInputsFromDOM() {
    const nameEl = document.getElementById("clientNameInput");
    const phoneEl = document.getElementById("clientPhoneInput");
    const ralEl = document.getElementById("clientRalInput");
    if (nameEl) state.client.name = nameEl.value.trim();
    if (phoneEl) state.client.phone = phoneEl.value.trim();
    if (ralEl) state.client.ralNote = ralEl.value.trim();
    saveClient();
  }

  function populateClientInputsToDOM() {
    const nameEl = document.getElementById("clientNameInput");
    const phoneEl = document.getElementById("clientPhoneInput");
    const ralEl = document.getElementById("clientRalInput");
    if (nameEl && document.activeElement !== nameEl) nameEl.value = state.client.name || "";
    if (phoneEl && document.activeElement !== phoneEl) phoneEl.value = state.client.phone || "";
    if (ralEl && document.activeElement !== ralEl) ralEl.value = state.client.ralNote || "";
  }

  function sendOrderToWhatsApp() {
    const entries = Object.values(state.cart).filter((e) => e && e.qty > 0);
    if (entries.length === 0) {
      showToast("Сначала выберите хотя бы одну позицию");
      return;
    }
    const targetPhone = "992111124742";
    const text = buildWhatsAppMessageText();
    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    showToast("Открываем WhatsApp с вашей заявкой...");
  }

  function copyOrderText() {
    const entries = Object.values(state.cart).filter((e) => e && e.qty > 0);
    if (entries.length === 0) {
      showToast("Добавьте позиции в заявку");
      return;
    }
    const text = buildWhatsAppMessageText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast("Текст заявки скопирован");
      });
    }
  }

  function exportOrderCsv() {
    const entries = Object.values(state.cart).filter((e) => e && e.qty > 0);
    if (entries.length === 0) {
      showToast("Добавьте позиции для скачивания Excel (CSV)");
      return;
    }
    const rows = [
      ["Серия", "Код", "Наименование", "Покрытие", "Кол-во", "Цена ($)", "Сумма ($)", "Сумма (сомони)"]
    ];
    entries.forEach((entry) => {
      const found = itemMap.get(entry.itemId);
      if (!found) return;
      const { item, system } = found;
      const meta = getCoatingMeta(system.id, entry.coatingKey);
      const p = item.prices && item.prices[entry.coatingKey] !== undefined ? Number(item.prices[entry.coatingKey]) : 0;
      rows.push([
        system.title,
        item.code,
        item.name,
        meta.label,
        entry.qty,
        p,
        (p * entry.qty).toFixed(2),
        (p * entry.qty * state.exchangeRate).toFixed(2)
      ]);
    });
    const csvContent =
      "\uFEFF" +
      rows.map((r) => r.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(";")).join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `AKFA_Order_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  }

  function printCommercialQuote() {
    const entries = Object.values(state.cart).filter((e) => e && e.qty > 0);
    if (entries.length === 0) {
      showToast("Добавьте позиции в заявку для печати КП");
      return;
    }
    const stats = getCartStats();
    const printEl = document.getElementById("printQuoteContainer");
    if (!printEl) return;

    const rowsHtml = entries
      .map((entry, i) => {
        const found = itemMap.get(entry.itemId);
        if (!found) return "";
        const { item, system } = found;
        const meta = getCoatingMeta(system.id, entry.coatingKey);
        const p = item.prices && item.prices[entry.coatingKey] !== undefined ? Number(item.prices[entry.coatingKey]) : 0;
        return `
          <tr>
            <td style="border:1px solid #ccc;padding:6px;text-align:center;">${i + 1}</td>
            <td style="border:1px solid #ccc;padding:6px;">${system.title}</td>
            <td style="border:1px solid #ccc;padding:6px;font-family:monospace;">${item.code || "—"}</td>
            <td style="border:1px solid #ccc;padding:6px;">${item.name}</td>
            <td style="border:1px solid #ccc;padding:6px;">${meta.label}</td>
            <td style="border:1px solid #ccc;padding:6px;text-align:center;">${entry.qty}</td>
            <td style="border:1px solid #ccc;padding:6px;text-align:right;">${formatMoney(p)}</td>
            <td style="border:1px solid #ccc;padding:6px;text-align:right;font-weight:bold;">${formatMoney(p * entry.qty)}</td>
          </tr>
        `;
      })
      .join("");

    printEl.innerHTML = `
      <div style="border-bottom:2px solid #141619;padding-bottom:12px;margin-bottom:16px;display:flex;justify-content:space-between;">
        <div>
          <h1 style="margin:0;font-size:20px;">AKFA ALUMINIUM ТАДЖИКИСТАН</h1>
          <div style="font-size:12px;color:#444;">г. Душанбе · Тел./WhatsApp: +992 11 112 47 42</div>
        </div>
        <div style="text-align:right;font-size:12px;">
          <div>Дата: ${new Date().toLocaleDateString("ru-RU")}</div>
          <div>Курс: 1$ = ${state.exchangeRate} сом.</div>
        </div>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:14px;">
        <thead>
          <tr style="background:#f3f4f6;">
            <th style="border:1px solid #ccc;padding:6px;">№</th>
            <th style="border:1px solid #ccc;padding:6px;">Серия</th>
            <th style="border:1px solid #ccc;padding:6px;">Код</th>
            <th style="border:1px solid #ccc;padding:6px;">Наименование</th>
            <th style="border:1px solid #ccc;padding:6px;">Покрытие</th>
            <th style="border:1px solid #ccc;padding:6px;">Кол-во</th>
            <th style="border:1px solid #ccc;padding:6px;">Цена</th>
            <th style="border:1px solid #ccc;padding:6px;">Сумма</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      <div style="text-align:right;font-size:15px;font-weight:bold;">
        ИТОГО: ${formatMoney(stats.grandTotalUsd)} (≈ ${formatMoney(stats.grandTotalUsd, state.currency === "USD" ? "TJS" : "USD")})
      </div>
    `;
    window.print();
  }

  function openSheetModal() {
    const dialog = document.getElementById("sheetDialog");
    if (!dialog) return;
    const sysId = state.activeSystemId === "ALL" ? "ALDOX-45" : state.activeSystemId;
    const sys = systemMap.get(sysId);
    if (!sys) return;

    const titleEl = document.getElementById("sheetDialogTitle");
    const imgEl = document.getElementById("sheetDialogImg");
    const dlEl = document.getElementById("sheetDialogDownload");
    if (titleEl) titleEl.textContent = `Оригинальный прайс-лист: ${sys.title}`;
    if (imgEl) imgEl.src = sys.sheetImage;
    if (dlEl) dlEl.href = sys.sheetImage;
    dialog.showModal();
  }

  function openOrderModal() {
    if (state.viewMode === "wizard") {
      state.wizardStep = 4;
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const sec = document.getElementById("orderSidebarSection");
    if (sec && window.innerWidth <= 1100) {
      sec.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const dialog = document.getElementById("orderDialog");
    if (dialog) {
      const previewEl = document.getElementById("whatsappMessagePreview");
      if (previewEl) previewEl.textContent = buildWhatsAppMessageText();
      dialog.showModal();
    }
  }

  // Mandatory fallback for browsers without native `<dialog closedby="any">` support (Modern Web Guidance `light-dismiss-a-dialog`)
  function setupDialogLightDismissFallbacks() {
    const dialogs = document.querySelectorAll("dialog.akfa-dialog");
    dialogs.forEach((dialog) => {
      if (!("closedBy" in HTMLDialogElement.prototype)) {
        dialog.addEventListener("click", (event) => {
          if (event.target !== dialog) return;
          const rect = dialog.getBoundingClientRect();
          const isDialogContent =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
          if (isDialogContent) return;
          dialog.close();
        });
      }
    });
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById("akfaToast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.classList.remove("show");
    }, 2800);
  }

  function applyTheme() {
    const wrap = document.getElementById("priceSystemRoot");
    if (wrap) {
      wrap.setAttribute("data-price-theme", state.theme);
    }
    const themeBtn = document.getElementById("priceThemeBtn");
    if (themeBtn) {
      themeBtn.textContent = state.theme === "light" ? "Тёмная тема" : "Светлая тема";
    }
  }

  function renderTopModeAndCurrency() {
    const btnUsd = document.getElementById("curBtnUSD");
    const btnTjs = document.getElementById("curBtnTJS");
    const rateInp = document.getElementById("exchangeRateInput");
    if (btnUsd) btnUsd.classList.toggle("active", state.currency === "USD");
    if (btnTjs) btnTjs.classList.toggle("active", state.currency === "TJS");
    if (rateInp && document.activeElement !== rateInp) {
      rateInp.value = state.exchangeRate;
    }

    const modeWizBtn = document.getElementById("modeBtnWizard");
    const modeTblBtn = document.getElementById("modeBtnTable");
    if (modeWizBtn) modeWizBtn.classList.toggle("active", state.viewMode === "wizard");
    if (modeTblBtn) modeTblBtn.classList.toggle("active", state.viewMode === "table");

    const wizContainer = document.getElementById("wizardWorkspace");
    const tblContainer = document.getElementById("tableWorkspace");
    if (wizContainer) wizContainer.style.display = state.viewMode === "wizard" ? "block" : "none";
    if (tblContainer) tblContainer.style.display = state.viewMode === "table" ? "block" : "none";
  }

  function renderAll() {
    applyTheme();
    renderTopModeAndCurrency();
    if (state.viewMode === "wizard") {
      renderWizard();
    } else {
      renderSystemTabs();
      renderSystemSubbar();
      renderFilters();
      renderTable();
    }
    populateClientInputsToDOM();
    renderOrderReceipt();
  }

  window.AKFAPrice = {
    init() {
      buildMaps();
      loadStorage();
      parseUrlParams();
      setupDialogLightDismissFallbacks();

      const searchInput = document.getElementById("priceSearchInput");
      if (searchInput) {
        searchInput.value = state.searchQuery;
        searchInput.addEventListener("input", (e) => {
          state.searchQuery = e.target.value;
          renderTable();
        });
      }

      ["clientNameInput", "clientPhoneInput", "clientRalInput"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener("input", syncClientInputsFromDOM);
          el.addEventListener("change", syncClientInputsFromDOM);
        }
      });

      populateClientInputsToDOM();
      renderAll();
    },

    setViewMode(mode) {
      state.viewMode = mode;
      renderAll();
    },

    goToStep(stepNum) {
      state.wizardStep = stepNum;
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    wizardPickSystem(sysId) {
      state.activeSystemId = sysId;
      ensureValidWizardCoating(sysId);
      state.wizardStep = 2;
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    wizardPickCoating(coatKey) {
      state.wizardCoatingKey = coatKey;
      state.wizardCategoryTab = "profile";
      state.wizardStep = 3;
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    setWizardCategoryTab(tab) {
      state.wizardCategoryTab = tab;
      renderWizard();
    },

    setSearchQuery(val) {
      state.searchQuery = val || "";
      if (state.viewMode === "wizard") {
        renderWizard();
        const inp = document.getElementById("wizSearchInput");
        if (inp) {
          inp.focus();
          inp.setSelectionRange(inp.value.length, inp.value.length);
        }
      } else {
        renderTable();
      }
    },

    updateClientField(field, val) {
      state.client[field] = (val || "").trim();
      saveClient();
      populateClientInputsToDOM();
    },

    selectSystem(sysId) {
      state.activeSystemId = sysId;
      renderAll();
    },

    setCategoryFilter(cat) {
      state.categoryFilter = cat;
      renderAll();
    },

    clearSearch() {
      state.searchQuery = "";
      const searchInput = document.getElementById("priceSearchInput");
      if (searchInput) searchInput.value = "";
      renderAll();
    },

    resetFilters() {
      state.categoryFilter = "all";
      state.searchQuery = "";
      const searchInput = document.getElementById("priceSearchInput");
      if (searchInput) searchInput.value = "";
      renderAll();
    },

    setCurrency(cur) {
      state.currency = cur;
      savePrefs();
      renderAll();
    },

    setExchangeRate(val) {
      const n = parseFloat(String(val).replace(",", "."));
      if (!isNaN(n) && n > 0) {
        state.exchangeRate = Math.round(n * 100) / 100;
        savePrefs();
        renderAll();
      }
    },

    toggleTheme() {
      state.theme = state.theme === "light" ? "dark" : "light";
      savePrefs();
      applyTheme();
    },

    adjustQty(itemId, coatingKey, delta) {
      adjustItemQty(itemId, coatingKey, delta);
    },

    setQty(itemId, coatingKey, val) {
      setItemQty(itemId, coatingKey, val);
    },

    clearCart() {
      clearCart();
    },

    openSheetModal() {
      openSheetModal();
    },

    openOrderModal() {
      openOrderModal();
    },

    sendOrderToWhatsApp() {
      sendOrderToWhatsApp();
    },

    copyOrderText() {
      copyOrderText();
    },

    exportOrderCsv() {
      exportOrderCsv();
    },

    printCommercialQuote() {
      printCommercialQuote();
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    window.AKFAPrice.init();
  });
})();
