/* ==========================================================================
   AKFA ALUMINIUM TAJIKISTAN — INTERACTIVE PRICE LIST & ORDER SYSTEM DATA
   Source: https://docs.google.com/spreadsheets/d/1qseIQYzX8Ob4A_gr_baw9gFjZmUVIeP0sY7m-vSg6pA/edit?usp=sharing
   Total Systems: 6 | Total Positions: 314
   ========================================================================== */

window.AKFA_PRICE_CONFIG = {
  spreadsheetId: "1qseIQYzX8Ob4A_gr_baw9gFjZmUVIeP0sY7m-vSg6pA",
  spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1qseIQYzX8Ob4A_gr_baw9gFjZmUVIeP0sY7m-vSg6pA/edit?usp=sharing",
  defaultCurrency: "USD",
  defaultExchangeRate: 10.95,
  managers: [
    {
      id: "main",
      name: "Отдел продаж AKFA Душанбе (Официальное представительство)",
      role: "Оптовые и розничные заказы · Профиль и комплектующие",
      phone: "992111124742",
      displayPhone: "+992 11 112 47 42"
    },
    {
      id: "b2b",
      name: "Менеджер B2B и объектных поставок",
      role: "Фасадные системы BKF-48, Thermo-65/78, комплектация объектов",
      phone: "992111124742",
      displayPhone: "+992 11 112 47 42"
    }
  ],
  systems: [
  {
    "id": "ALDOX-45",
    "title": "ALDOX - 45",
    "subtitle": "Холодная оконно-дверная и перегородочная серия 45 мм",
    "depth": "45 мм",
    "type": "Холодная серия",
    "date": "01.10.2026",
    "sheetImage": "../img/price-sheets/aldox-45.jpeg",
    "productImage": "../img/src/subcategories/aldox.jpg",
    "pageLink": "aldox.html",
    "coatings": [
      {
        "key": "raw",
        "label": "Без покр.",
        "short": "Без покр.",
        "swatch": "#94a3b8"
      },
      {
        "key": "white",
        "label": "Белый (RAL 9016)",
        "short": "Белый",
        "swatch": "#f8fafc"
      },
      {
        "key": "brown",
        "label": "Коричневый",
        "short": "Корич.",
        "swatch": "#6d4c41"
      },
      {
        "key": "color",
        "label": "Цветной (RAL)",
        "short": "Цветной",
        "swatch": "#3b82f6"
      },
      {
        "key": "vacuum",
        "label": "Вакуум (под дерево)",
        "short": "Вакуум",
        "swatch": "#b45309"
      }
    ],
    "items": [
      {
        "id": "aldox45-1",
        "no": 1,
        "code": "WDC.45.F0002",
        "name": "L - Рама",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 20.9,
          "brown": 21.95,
          "color": 25.8,
          "vacuum": 28.0
        }
      },
      {
        "id": "aldox45-2",
        "no": 2,
        "code": "WDC.45.M0002",
        "name": "Т - Импост",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 24.0,
          "brown": 25.1,
          "color": 29.8,
          "vacuum": 32.5
        }
      },
      {
        "id": "aldox45-3",
        "no": 3,
        "code": "WDC.45.V0002",
        "name": "Z - Створка",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 24.0,
          "brown": 25.1,
          "color": 29.8,
          "vacuum": 32.5
        }
      },
      {
        "id": "aldox45-4",
        "no": 4,
        "code": "WDC.45.M0003",
        "name": "Т дверной",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 50.15,
          "brown": 52.1,
          "color": 52.2,
          "vacuum": 62.3
        }
      },
      {
        "id": "aldox45-5",
        "no": 5,
        "code": "WDC.45.V0003",
        "name": "Z дверной",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 50.15,
          "brown": 52.1,
          "color": 52.2,
          "vacuum": 62.3
        }
      },
      {
        "id": "aldox45-6",
        "no": 6,
        "code": "WDC.45.M0004",
        "name": "Усиленный Т (стойка)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 54.15,
          "brown": 56.9,
          "color": 61.85,
          "vacuum": 68.0
        }
      },
      {
        "id": "aldox45-7",
        "no": 7,
        "code": "WDC.45.M0004",
        "name": "Усиленный Т (стойка)",
        "category": "profile",
        "unit": "4",
        "pack": "1шт",
        "prices": {
          "white": 36.75,
          "brown": 38.65,
          "color": 42.0,
          "vacuum": 46.05
        }
      },
      {
        "id": "aldox45-8",
        "no": 8,
        "code": "WDC.45.G0001",
        "name": "Штапик одинар. 4мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 8.5,
          "brown": 9.0,
          "color": 10.55,
          "vacuum": 11.5
        }
      },
      {
        "id": "aldox45-9",
        "no": 9,
        "code": "WDC.45.G0002",
        "name": "Штапик пакет 20мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 8.5,
          "brown": 9.0,
          "color": 10.55,
          "vacuum": 11.5
        }
      },
      {
        "id": "aldox45-10",
        "no": 10,
        "code": "WDC.45.A0002",
        "name": "Угловой 90 градус",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 33.8,
          "brown": 35.4,
          "color": 37.25,
          "vacuum": 40.7
        }
      },
      {
        "id": "aldox45-11",
        "no": 11,
        "code": "WDC.45.A0001",
        "name": "Угловой 135 градус",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 38.7,
          "brown": 40.75,
          "color": 43.1,
          "vacuum": 46.95
        }
      },
      {
        "id": "aldox45-12",
        "no": 12,
        "code": "WDC.45.L0003",
        "name": "Ламбри 10мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 24.65,
          "brown": 25.95,
          "color": 26.75,
          "vacuum": 30.1
        }
      },
      {
        "id": "aldox45-13",
        "no": 13,
        "code": "WDC.45.L0002",
        "name": "Ламбри 20мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 34.1,
          "brown": 37.65,
          "color": 38.15,
          "vacuum": 38.5
        }
      },
      {
        "id": "aldox45-14",
        "no": 14,
        "code": "",
        "name": "Мос/сетка (Внутренный)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 7.95,
          "brown": 9.3,
          "color": 9.3
        }
      },
      {
        "id": "aldox45-15",
        "no": 15,
        "code": "",
        "name": "Мос/сетка (Оконный)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 7.7,
          "brown": 8.0,
          "color": 8.0
        }
      },
      {
        "id": "aldox45-16",
        "no": 16,
        "code": "",
        "name": "Мос/сетка (Дверной)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 7.75,
          "brown": 8.2,
          "color": 8.2
        }
      },
      {
        "id": "aldox45-17",
        "no": 17,
        "code": "CLX.11.W0340",
        "name": "Ёлка оконная",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 40.6
        }
      },
      {
        "id": "aldox45-18",
        "no": 18,
        "code": "CLX.11.W0655",
        "name": "Ёлка дверная",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 66.5
        }
      },
      {
        "id": "aldox45-19",
        "no": 19,
        "code": "WDC.45.A0003/WDC.45.A0004",
        "name": "Мувиль комплект",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 11.3,
          "brown": 12.1,
          "color": 13.8,
          "vacuum": 15.4
        }
      },
      {
        "id": "aldox45-20",
        "no": 20,
        "code": "",
        "name": "Соединитель (елка оконная)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.4
        }
      },
      {
        "id": "aldox45-21",
        "no": 21,
        "code": "",
        "name": "Соединитель (елка дверная)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.7
        }
      },
      {
        "id": "aldox45-22",
        "no": 22,
        "code": "",
        "name": "Ручка ок. Дельфин",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 1.55,
          "brown": 2.5,
          "color": 2.5
        }
      },
      {
        "id": "aldox45-23",
        "no": 23,
        "code": "",
        "name": "Петля оконная",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 0.9,
          "brown": 0.93,
          "color": 0.93
        }
      },
      {
        "id": "aldox45-24",
        "no": 24,
        "code": "",
        "name": "Петля дверная",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "brown": 0.93,
          "color": 0.93
        }
      },
      {
        "id": "aldox45-25",
        "no": 25,
        "code": "",
        "name": "Петля оконная ALDOX-45",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 0.5,
          "brown": 0.55,
          "color": 0.55
        }
      },
      {
        "id": "aldox45-26",
        "no": 26,
        "code": "",
        "name": "Петля дверная ALDOX-45",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 0.5,
          "brown": 0.55,
          "color": 0.55
        }
      },
      {
        "id": "aldox45-27",
        "no": 27,
        "code": "",
        "name": "Ручка дв. Форнекс 28 slim",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 2.93,
          "brown": 3.08,
          "color": 3.08
        }
      },
      {
        "id": "aldox45-28",
        "no": 28,
        "code": "",
        "name": "Ручка дв. Форнекс фикс 28 slim",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 3.53,
          "brown": 3.68,
          "color": 3.68
        }
      },
      {
        "id": "aldox45-29",
        "no": 29,
        "code": "",
        "name": "Ручка дв. Комфорт",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 4.44,
          "brown": 4.5,
          "color": 4.5
        }
      },
      {
        "id": "aldox45-30",
        "no": 30,
        "code": "",
        "name": "Ручка Белла (труба держатель)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 9.59,
          "brown": 9.59,
          "color": 9.59
        }
      },
      {
        "id": "aldox45-31",
        "no": 31,
        "code": "",
        "name": "Замок 269/20U WC ванн",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.45
        }
      },
      {
        "id": "aldox45-32",
        "no": 32,
        "code": "",
        "name": "Замок ДВГ Турецкий 153-20U обычный",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 6.0
        }
      },
      {
        "id": "aldox45-33",
        "no": 33,
        "code": "",
        "name": "Замок GRAF 153-35 без сердечкой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "aldox45-34",
        "no": 34,
        "code": "",
        "name": "Замок GRAF 153-20U с сердечкой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.8
        }
      },
      {
        "id": "aldox45-35",
        "no": 35,
        "code": "",
        "name": "Замок FLEX 155-35 шариковый",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "aldox45-36",
        "no": 36,
        "code": "",
        "name": "Ответка 153",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 0.65,
          "color": 0.7
        }
      },
      {
        "id": "aldox45-37",
        "no": 37,
        "code": "",
        "name": "Ответка 155",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 0.65,
          "color": 0.7
        }
      },
      {
        "id": "aldox45-38",
        "no": 38,
        "code": "",
        "name": "Ответный пласмасс",
        "category": "accessory",
        "unit": "уп.",
        "pack": "1шт",
        "prices": {
          "white": 2.66,
          "color": 2.73
        }
      },
      {
        "id": "aldox45-39",
        "no": 39,
        "code": "",
        "name": "Ограничитель 13см",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 0.7,
          "color": 0.75
        }
      },
      {
        "id": "aldox45-40",
        "no": 40,
        "code": "",
        "name": "Шпингалет 45",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 0.89,
          "color": 0.91
        }
      },
      {
        "id": "aldox45-41",
        "no": 41,
        "code": "",
        "name": "Соед. Импост 45 (сухар)",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(100шт)",
        "prices": {
          "raw": 10.6
        }
      },
      {
        "id": "aldox45-42",
        "no": 42,
        "code": "",
        "name": "Резина 45 штапик Ю",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(100м)",
        "prices": {
          "raw": 16.4
        }
      },
      {
        "id": "aldox45-43",
        "no": 43,
        "code": "",
        "name": "Резина 45 глухой Р",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(100м)",
        "prices": {
          "raw": 7.5
        }
      },
      {
        "id": "aldox45-44",
        "no": 44,
        "code": "",
        "name": "Резина 45 створка Х",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(100м)",
        "prices": {
          "raw": 7.5
        }
      },
      {
        "id": "aldox45-45",
        "no": 45,
        "code": "",
        "name": "Саморез 19мм, 25мм, 35мм, 40мм, 60мм",
        "category": "accessory",
        "unit": "уп.",
        "pack": "1шт",
        "prices": {
          "raw": 1.8
        }
      },
      {
        "id": "aldox45-46",
        "no": 46,
        "code": "",
        "name": "Сэнвич панель 3х2",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 65.0
        }
      }
    ],
    "gid": "0"
  },
  {
    "id": "CHAMPION-47",
    "title": "CHAMPION - 47",
    "subtitle": "Универсальная оконно-дверная алюминиевая серия 47 мм",
    "depth": "47 мм",
    "type": "Оконно-дверная серия",
    "date": "01.10.2026",
    "sheetImage": "../img/price-sheets/champion-47.jpeg",
    "productImage": "../img/src/subcategories/akf47.jpg",
    "pageLink": "akf47.html",
    "coatings": [
      {
        "key": "raw",
        "label": "Без покр.",
        "short": "Без покр.",
        "swatch": "#94a3b8"
      },
      {
        "key": "white",
        "label": "Белый (RAL 9016)",
        "short": "Белый",
        "swatch": "#f8fafc"
      },
      {
        "key": "color",
        "label": "Цветной (RAL)",
        "short": "Цветной",
        "swatch": "#3b82f6"
      },
      {
        "key": "vacuum",
        "label": "Вакуум (под дерево)",
        "short": "Вакуум",
        "swatch": "#b45309"
      }
    ],
    "items": [
      {
        "id": "champ47-1",
        "no": 1,
        "code": "WDC.47.F0002",
        "name": "L - Рама",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 32.4,
          "color": 36.95,
          "vacuum": 47.85
        }
      },
      {
        "id": "champ47-2",
        "no": 2,
        "code": "WDC.47.M0002",
        "name": "Т - Импост",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 36.7,
          "color": 41.75,
          "vacuum": 50.3
        }
      },
      {
        "id": "champ47-3",
        "no": 3,
        "code": "WDC.47.V0002",
        "name": "Z - Створка",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 36.7,
          "color": 41.75,
          "vacuum": 50.3
        }
      },
      {
        "id": "champ47-4",
        "no": 4,
        "code": "WDC.47.V0003",
        "name": "Т дверная",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 54.65,
          "color": 61.2,
          "vacuum": 64.15
        }
      },
      {
        "id": "champ47-5",
        "no": 5,
        "code": "WDC.47.V0004",
        "name": "Z дверная",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 54.65,
          "color": 61.2,
          "vacuum": 64.15
        }
      },
      {
        "id": "champ47-6",
        "no": 6,
        "code": "WDC.47.G0005",
        "name": "Штапик одинар. 6мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 12.75,
          "color": 13.25,
          "vacuum": 14.8
        }
      },
      {
        "id": "champ47-7",
        "no": 7,
        "code": "WDC.47.G0002",
        "name": "Штапик пакет 20мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 10.45,
          "color": 10.7,
          "vacuum": 13.8
        }
      },
      {
        "id": "champ47-8",
        "no": 8,
        "code": "WDC.47.A0004",
        "name": "Штульп",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 43.5,
          "color": 42.65,
          "vacuum": 48.4
        }
      },
      {
        "id": "champ47-9",
        "no": 9,
        "code": "WDC.47.A0011",
        "name": "Труба",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 18.65,
          "color": 24.5
        }
      },
      {
        "id": "champ47-10",
        "no": 10,
        "code": "WDC.47.A0010",
        "name": "Адаптор труба",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 17.6,
          "color": 20.75
        }
      },
      {
        "id": "champ47-11",
        "no": 11,
        "code": "WDC.47.A0001",
        "name": "Угловой 90 градус",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 36.55,
          "color": 37.24
        }
      },
      {
        "id": "champ47-12",
        "no": 12,
        "code": "WDC.47.A0002",
        "name": "Угловой 135 градус",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {}
      },
      {
        "id": "champ47-13",
        "no": 13,
        "code": "CLX.11.W0340",
        "name": "Елка оконный",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 39.1
        }
      },
      {
        "id": "champ47-14",
        "no": 14,
        "code": "CLX.11.W0572",
        "name": "Елка дверной",
        "category": "profile",
        "unit": "3",
        "pack": "1шт",
        "prices": {
          "raw": 63.95
        }
      },
      {
        "id": "champ47-15",
        "no": 15,
        "code": "WDC.47.A0009",
        "name": "Мувиль",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 7.1,
          "color": 7.9,
          "vacuum": 10.45
        }
      },
      {
        "id": "champ47-16",
        "no": 16,
        "code": "",
        "name": "Мувиль термо (тиж пластмас)",
        "category": "profile",
        "unit": "1",
        "pack": "1шт",
        "prices": {
          "raw": 0.95
        }
      },
      {
        "id": "champ47-17",
        "no": 17,
        "code": "",
        "name": "Соединитель (елка рама 47)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.4
        }
      },
      {
        "id": "champ47-18",
        "no": 18,
        "code": "",
        "name": "Соединитель (елка створка 47)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.4
        }
      },
      {
        "id": "champ47-19",
        "no": 19,
        "code": "",
        "name": "Соединитель (елка дверная 47)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.7
        }
      },
      {
        "id": "champ47-20",
        "no": 20,
        "code": "",
        "name": "Соединитель (елка рама 47) пресс",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.75
        }
      },
      {
        "id": "champ47-21",
        "no": 21,
        "code": "",
        "name": "Соединитель (елка створка 47) пресс",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.65
        }
      },
      {
        "id": "champ47-22",
        "no": 22,
        "code": "",
        "name": "Соединитель (елка дверная 47) пресс",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.3
        }
      },
      {
        "id": "champ47-23",
        "no": 23,
        "code": "",
        "name": "Ручка окон ТЕРМО МХ Salon 9005",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 5.0,
          "color": 5.0
        }
      },
      {
        "id": "champ47-24",
        "no": 24,
        "code": "",
        "name": "Ручка термо Рото Х NEW",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 4.0
        }
      },
      {
        "id": "champ47-25",
        "no": 25,
        "code": "",
        "name": "Ручка оконная MILANO",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 5.7,
          "color": 6.3
        }
      },
      {
        "id": "champ47-26",
        "no": 26,
        "code": "",
        "name": "Петля оконная Champion",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 2.0,
          "color": 2.0
        }
      },
      {
        "id": "champ47-27",
        "no": 27,
        "code": "",
        "name": "Петля оконная 9211 2SK",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 2.0
        }
      },
      {
        "id": "champ47-28",
        "no": 28,
        "code": "",
        "name": "Петля оконная МХ 100мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 1.4
        }
      },
      {
        "id": "champ47-29",
        "no": 29,
        "code": "",
        "name": "Ручка дв. Форнекс 28 slim",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 2.93,
          "color": 3.08
        }
      },
      {
        "id": "champ47-30",
        "no": 30,
        "code": "",
        "name": "Ручка дв. Комфорт",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 4.44,
          "color": 4.5
        }
      },
      {
        "id": "champ47-31",
        "no": 31,
        "code": "",
        "name": "Петля дверная Champion",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 3.8,
          "color": 3.8
        }
      },
      {
        "id": "champ47-32",
        "no": 32,
        "code": "",
        "name": "Петля дверная МАСТЕР 2SK",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 4.95
        }
      },
      {
        "id": "champ47-33",
        "no": 33,
        "code": "",
        "name": "Петля дверная МХ узкий",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 1.7
        }
      },
      {
        "id": "champ47-34",
        "no": 34,
        "code": "",
        "name": "Петля дверная МХ большой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 2.5
        }
      },
      {
        "id": "champ47-35",
        "no": 35,
        "code": "",
        "name": "Замок ДВГ Турецкий 153-20U обычный",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 6.0
        }
      },
      {
        "id": "champ47-36",
        "no": 36,
        "code": "",
        "name": "Замок GRAF 153-35 без сердечкой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "champ47-37",
        "no": 37,
        "code": "",
        "name": "Замок GRAF 153-20U с сердечкой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.8
        }
      },
      {
        "id": "champ47-38",
        "no": 38,
        "code": "",
        "name": "Замок FLEX 155-35 шариковый",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "champ47-39",
        "no": 39,
        "code": "",
        "name": "Замок комплект GRAF теплый",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 30.0
        }
      },
      {
        "id": "champ47-40",
        "no": 40,
        "code": "",
        "name": "Замок ригельный МХ Salon",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 7.2
        }
      },
      {
        "id": "champ47-41",
        "no": 41,
        "code": "",
        "name": "Замок дверной Стублина + ответка",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 21.5
        }
      },
      {
        "id": "champ47-42",
        "no": 42,
        "code": "",
        "name": "Сердцевина 70мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 3.2
        }
      },
      {
        "id": "champ47-43",
        "no": 43,
        "code": "Двойной Механизм Мастер",
        "name": "ширина от 450мм до 650мм",
        "category": "accessory",
        "unit": "комп.",
        "pack": "1шт",
        "prices": {
          "color": 51.81
        }
      },
      {
        "id": "champ47-44",
        "no": 44,
        "code": "Двойной Механизм Мастер",
        "name": "ширина от 650мм до 1700мм",
        "category": "accessory",
        "unit": "комп.",
        "pack": "1шт",
        "prices": {
          "color": 54.0
        }
      },
      {
        "id": "champ47-45",
        "no": 45,
        "code": "EPDM 5504",
        "name": "Уплотнитель Штапик 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(80м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "champ47-46",
        "no": 46,
        "code": "EPDM 01.18.31",
        "name": "Уплотнитель Глухой 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(180м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "champ47-47",
        "no": 47,
        "code": "EPDM 01.18.30",
        "name": "Уплотнитель Створка 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(150м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "champ47-48",
        "no": 48,
        "code": "",
        "name": "Ответный упор (запор) шестигранный",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.7
        }
      },
      {
        "id": "champ47-49",
        "no": 49,
        "code": "",
        "name": "Ответный упор (запор) простой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.45
        }
      },
      {
        "id": "champ47-50",
        "no": 50,
        "code": "",
        "name": "Соед. импоста (сухар)",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(100шт)",
        "prices": {
          "raw": 16.0
        }
      }
    ],
    "gid": "912170183"
  },
  {
    "id": "BKF-48",
    "title": "BKF - 48",
    "subtitle": "Стоечно-ригельная фасадная система 48 мм",
    "depth": "48 мм",
    "type": "Фасадная система",
    "date": "01.10.2026",
    "sheetImage": "../img/price-sheets/bkf-48.jpeg",
    "productImage": "../img/src/subcategories/bkf-48.jpg",
    "pageLink": "econom-bkf-48.html",
    "coatings": [
      {
        "key": "raw",
        "label": "Без покр.",
        "short": "Без покр.",
        "swatch": "#94a3b8"
      },
      {
        "key": "white",
        "label": "Белый (RAL 9016)",
        "short": "Белый",
        "swatch": "#f8fafc"
      },
      {
        "key": "color",
        "label": "Цветной (RAL)",
        "short": "Цветной",
        "swatch": "#3b82f6"
      },
      {
        "key": "vacuum",
        "label": "Вакуум (под дерево)",
        "short": "Вакуум",
        "swatch": "#b45309"
      }
    ],
    "items": [
      {
        "id": "bkf48-1",
        "no": 1,
        "code": "FST.48.S0004",
        "name": "Ригель 78 мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 64.7,
          "color": 70.35,
          "vacuum": 89.6
        }
      },
      {
        "id": "bkf48-2",
        "no": 2,
        "code": "FST.48.S0011",
        "name": "Стойка 95 мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 60.6,
          "color": 66.45,
          "vacuum": 84.2
        }
      },
      {
        "id": "bkf48-3",
        "no": 3,
        "code": "FST.48.S0005",
        "name": "Стойка 104 мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 85.1,
          "color": 91.55,
          "vacuum": 114.45
        }
      },
      {
        "id": "bkf48-4",
        "no": 4,
        "code": "FST.48.S0007",
        "name": "Стойка 128 мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 95.45,
          "color": 102.8,
          "vacuum": 128.5
        }
      },
      {
        "id": "bkf48-5",
        "no": 5,
        "code": "FST.48.S0010",
        "name": "Стойка 153 мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 125.1,
          "color": 129.6,
          "vacuum": 158.65
        }
      },
      {
        "id": "bkf48-6",
        "no": 6,
        "code": "FST.48.J0004",
        "name": "Соед. стойка для 78 (70.4мм)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 88.55
        }
      },
      {
        "id": "bkf48-7",
        "no": 7,
        "code": "FST.48.J0005",
        "name": "Соед. стойка для 104 (95,4мм)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 92.35
        }
      },
      {
        "id": "bkf48-8",
        "no": 8,
        "code": "FST.48.J0007",
        "name": "Соед. стойка для 128 (119,4мм)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 110.75
        }
      },
      {
        "id": "bkf48-9",
        "no": 9,
        "code": "FST.48.J0010",
        "name": "Соед. стойка для 153 (143,4мм)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 129.2
        }
      },
      {
        "id": "bkf48-10",
        "no": 10,
        "code": "FST.48.PP001",
        "name": "Прижимной",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 16.7
        }
      },
      {
        "id": "bkf48-11",
        "no": 11,
        "code": "FST.48.JR002",
        "name": "Соединитель ригель (сухарик)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 49.85
        }
      },
      {
        "id": "bkf48-12",
        "no": 12,
        "code": "FST.48.JR003",
        "name": "Соединитель ригель (сухарик градус)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 78.6
        }
      },
      {
        "id": "bkf48-13",
        "no": 13,
        "code": "FST.48.CP001",
        "name": "Крышка 12,5 мм (низкая)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 10.5,
          "color": 11.7,
          "vacuum": 14.82
        }
      },
      {
        "id": "bkf48-14",
        "no": 14,
        "code": "FST.48.PP003",
        "name": "Крышка 48 мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 15.3,
          "color": 16.0,
          "vacuum": 19.05
        }
      },
      {
        "id": "bkf48-15",
        "no": 15,
        "code": "FST.48.G0001",
        "name": "Подставка стекло пакет",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 16.2
        }
      },
      {
        "id": "bkf48-16",
        "no": 16,
        "code": "",
        "name": "Рама холодная",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 46.95,
          "color": 49.45,
          "vacuum": 58.7
        }
      },
      {
        "id": "bkf48-17",
        "no": 17,
        "code": "",
        "name": "Створка холодная",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 44.05,
          "color": 46.2,
          "vacuum": 56.95
        }
      },
      {
        "id": "bkf48-18",
        "no": 18,
        "code": "",
        "name": "Соединитель Отк. Фасад (холодный)",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 184.5
        }
      },
      {
        "id": "bkf48-19",
        "no": 19,
        "code": "",
        "name": "Стеклодержатель холодный",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 12.8,
          "color": 13.15,
          "vacuum": 15.95
        }
      },
      {
        "id": "bkf48-20",
        "no": 20,
        "code": "WDC.47.A0009",
        "name": "Мувиль",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 7.1,
          "color": 7.9,
          "vacuum": 10.45
        }
      },
      {
        "id": "bkf48-21",
        "no": 21,
        "code": "",
        "name": "Соединитель Отк. Фасад (холодный) Рама 47мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.9
        }
      },
      {
        "id": "bkf48-22",
        "no": 22,
        "code": "",
        "name": "Соединитель Отк. Фасад (холодный) Створка 37мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.65
        }
      },
      {
        "id": "bkf48-23",
        "no": 23,
        "code": "EPDM 049",
        "name": "Уплотнитель Прижим 3,5мм (15кг)",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(250м)",
        "prices": {
          "raw": 75.6
        }
      },
      {
        "id": "bkf48-24",
        "no": 24,
        "code": "EPDM 051",
        "name": "Уплотнитель Стойка 5,0мм (15кг)",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(220м)",
        "prices": {
          "raw": 75.6
        }
      },
      {
        "id": "bkf48-25",
        "no": 25,
        "code": "EPDM U02038",
        "name": "Уплотнитель Стойка 3мм (15кг)",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(280м)",
        "prices": {
          "raw": 75.6
        }
      },
      {
        "id": "bkf48-26",
        "no": 26,
        "code": "EPDM U02039",
        "name": "Уплотнитель Стойка 8,5мм (15кг)",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(140м)",
        "prices": {
          "raw": 75.6
        }
      },
      {
        "id": "bkf48-27",
        "no": 27,
        "code": "EPDM U04005",
        "name": "Уплотнитель ЭПДМ для крышка 48мм (10кг)",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(160м)",
        "prices": {
          "raw": 50.4
        }
      },
      {
        "id": "bkf48-28",
        "no": 28,
        "code": "EPDM 040 4903",
        "name": "Уплотнитель центральный Фасадное открывание (15кг)",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп.",
        "prices": {
          "raw": 75.6
        }
      },
      {
        "id": "bkf48-29",
        "no": 29,
        "code": "EPDM A01-003",
        "name": "Уплотнитель Створка Фасадное открывание (5кг)",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(120м)",
        "prices": {
          "raw": 24.0
        }
      },
      {
        "id": "bkf48-30",
        "no": 30,
        "code": "",
        "name": "Бутиловая лента 25м",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(25м)",
        "prices": {
          "raw": 8.4
        }
      },
      {
        "id": "bkf48-31",
        "no": 31,
        "code": "",
        "name": "Прокладка 80мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.21
        }
      },
      {
        "id": "bkf48-32",
        "no": 32,
        "code": "",
        "name": "Прокладка 100мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.25
        }
      },
      {
        "id": "bkf48-33",
        "no": 33,
        "code": "",
        "name": "Прокладка 150мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.65
        }
      },
      {
        "id": "bkf48-34",
        "no": 34,
        "code": "PVI.CP.AF010",
        "name": "Термомост 10мм Турция",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.35
        }
      },
      {
        "id": "bkf48-35",
        "no": 35,
        "code": "PVI.CP.AF015",
        "name": "Термомост 15 мм Турция",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.85
        }
      },
      {
        "id": "bkf48-36",
        "no": 36,
        "code": "",
        "name": "Ручка оконная Тером(CEPHE KOL SOL 3011)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 9.2,
          "color": 10.1
        }
      },
      {
        "id": "bkf48-37",
        "no": 37,
        "code": "",
        "name": "Фасадные Ножницы 16 Турция",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 18.0
        }
      },
      {
        "id": "bkf48-38",
        "no": 38,
        "code": "",
        "name": "Фасадные Ножницы 18 Турция",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 20.0
        }
      },
      {
        "id": "bkf48-39",
        "no": 39,
        "code": "",
        "name": "Фасадные Ножницы 22 Турк Турция",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 22.0
        }
      },
      {
        "id": "bkf48-40",
        "no": 40,
        "code": "",
        "name": "Фасадный ножнитца 28 (кинг-лонг)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 28.18
        }
      },
      {
        "id": "bkf48-41",
        "no": 41,
        "code": "",
        "name": "Кронштейн L (5мм) 10см",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.2
        }
      },
      {
        "id": "bkf48-42",
        "no": 42,
        "code": "",
        "name": "Кронштейн L (5мм) 15см",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.6
        }
      },
      {
        "id": "bkf48-43",
        "no": 43,
        "code": "",
        "name": "Кронштейн U (5мм) 10см",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.5
        }
      },
      {
        "id": "bkf48-44",
        "no": 44,
        "code": "",
        "name": "Кронштейн U (5мм) 15см",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 5.9
        }
      },
      {
        "id": "bkf48-45",
        "no": 45,
        "code": "",
        "name": "Фасадный Ограничитель (кинг-лонг)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 9.23
        }
      }
    ],
    "gid": "1533191797"
  },
  {
    "id": "THERMO-57",
    "title": "THERMO - 57",
    "subtitle": "Тёплая алюминиевая серия с термомостом 57 мм (6,0 м и 6,5 м)",
    "depth": "57 мм",
    "type": "Тёплая серия (Термо)",
    "date": "01.10.2026",
    "sheetImage": "../img/price-sheets/thermo-57.jpeg",
    "productImage": "../img/src/subcategories/bkt67.jpg",
    "pageLink": "bkt67.html",
    "coatings": [
      {
        "key": "raw",
        "label": "Без покр.",
        "short": "Без покр.",
        "swatch": "#94a3b8"
      },
      {
        "key": "white_60",
        "label": "Белый (6,0 м / шт)",
        "short": "Белый 6.0м",
        "swatch": "#f8fafc"
      },
      {
        "key": "white_65",
        "label": "Белый (6,5 м)",
        "short": "Белый 6.5м",
        "swatch": "#e2e8f0"
      },
      {
        "key": "color_60",
        "label": "Цветной (6,0 м / шт)",
        "short": "Цветной 6.0м",
        "swatch": "#3b82f6"
      },
      {
        "key": "color_65",
        "label": "Цветной (6,5 м)",
        "short": "Цветной 6.5м",
        "swatch": "#2563eb"
      },
      {
        "key": "vacuum_60",
        "label": "Вакуум (6,0 м)",
        "short": "Вакуум 6.0м",
        "swatch": "#b45309"
      },
      {
        "key": "vacuum_65",
        "label": "Вакуум (6,5 м)",
        "short": "Вакуум 6.5м",
        "swatch": "#92400e"
      }
    ],
    "items": [
      {
        "id": "thermo57-1",
        "no": 1,
        "code": "WDT.64.F0010",
        "name": "L - Рама",
        "category": "profile",
        "unit": "6.0 / 6.5",
        "pack": "1шт",
        "prices": {
          "white_60": 57.6,
          "white_65": 62.4,
          "color_60": 64.5,
          "color_65": 69.88,
          "vacuum_60": 80.9,
          "vacuum_65": 87.64
        }
      },
      {
        "id": "thermo57-2",
        "no": 2,
        "code": "WDT.64.M0011",
        "name": "Т - Импост",
        "category": "profile",
        "unit": "6.0 / 6.5",
        "pack": "1шт",
        "prices": {
          "white_60": 60.35,
          "white_65": 65.38,
          "color_60": 67.25,
          "color_65": 72.85,
          "vacuum_60": 84.55,
          "vacuum_65": 91.6
        }
      },
      {
        "id": "thermo57-3",
        "no": 3,
        "code": "WDT.64.V0028",
        "name": "Z - Створка",
        "category": "profile",
        "unit": "6.0 / 6.5",
        "pack": "1шт",
        "prices": {
          "white_60": 61.85,
          "white_65": 67.0,
          "color_60": 68.8,
          "color_65": 74.53,
          "vacuum_60": 86.2,
          "vacuum_65": 93.38
        }
      },
      {
        "id": "thermo57-4",
        "no": 4,
        "code": "WDT.64.V0030",
        "name": "Т дверная",
        "category": "profile",
        "unit": "6.0 / 6.5",
        "pack": "1шт",
        "prices": {
          "white_60": 85.6,
          "white_65": 92.73,
          "color_60": 96.0,
          "color_65": 104.0,
          "vacuum_60": 121.25,
          "vacuum_65": 131.35
        }
      },
      {
        "id": "thermo57-5",
        "no": 5,
        "code": "WDT.64.V0029",
        "name": "Z дверная",
        "category": "profile",
        "unit": "6.0 / 6.5",
        "pack": "1шт",
        "prices": {
          "white_60": 79.85,
          "white_65": 86.5,
          "color_60": 89.55,
          "color_65": 97.01,
          "vacuum_60": 113.0,
          "vacuum_65": 122.42
        }
      },
      {
        "id": "thermo57-6",
        "no": 6,
        "code": "WDT.67.G0007",
        "name": "Штапик 20мм прямой",
        "category": "profile",
        "unit": "6.0 / 6.5",
        "pack": "1шт",
        "prices": {
          "white_60": 15.05,
          "color_60": 15.7,
          "color_65": 17.01,
          "vacuum_60": 17.25
        }
      },
      {
        "id": "thermo57-7",
        "no": 7,
        "code": "WDT.67.G0009",
        "name": "Штапик 32мм прямой",
        "category": "profile",
        "unit": "6.0",
        "pack": "1шт",
        "prices": {
          "white_60": 9.25,
          "color_60": 10.35,
          "vacuum_60": 12.6
        }
      },
      {
        "id": "thermo57-8",
        "no": 8,
        "code": "WDT.64.A0020",
        "name": "Штульп",
        "category": "profile",
        "unit": "6.0 / 6.5",
        "pack": "1шт",
        "prices": {
          "white_60": 47.15,
          "white_65": 51.08,
          "color_60": 52.8,
          "color_65": 57.2,
          "vacuum_60": 65.75,
          "vacuum_65": 71.23
        }
      },
      {
        "id": "thermo57-9",
        "no": 9,
        "code": "WDT.64.A0005 + WDT.98.A0011",
        "name": "Труба +поворотный адаптер (комп.)",
        "category": "profile",
        "unit": "6.0 / 6.5",
        "pack": "1шт",
        "prices": {
          "white_60": 89.0,
          "white_65": 96.42,
          "color_60": 103.3,
          "color_65": 111.91,
          "vacuum_60": 113.65,
          "vacuum_65": 123.12
        }
      },
      {
        "id": "thermo57-10",
        "no": 10,
        "code": "WDC.47.A0009",
        "name": "Мувиль",
        "category": "profile",
        "unit": "6.0",
        "pack": "1шт",
        "prices": {
          "white_60": 7.1,
          "color_60": 7.9,
          "vacuum_60": 10.45
        }
      },
      {
        "id": "thermo57-11",
        "no": 11,
        "code": "W0240.L13",
        "name": "Соединитель коробка 1 (64.F0010)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.65
        }
      },
      {
        "id": "thermo57-12",
        "no": 12,
        "code": "W0240.L20.5",
        "name": "Соединитель коробка 2 (64.F0010)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.1
        }
      },
      {
        "id": "thermo57-13",
        "no": 13,
        "code": "W0280.L5",
        "name": "Соединитель створка 1 (64.V0028)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.5
        }
      },
      {
        "id": "thermo57-14",
        "no": 14,
        "code": "W0280.L22",
        "name": "Соединитель створка 2 (64.V0028)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.2
        }
      },
      {
        "id": "thermo57-15",
        "no": 15,
        "code": "W0440.L5",
        "name": "Соединитель дверной 1 (64.V0030) TD",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.55
        }
      },
      {
        "id": "thermo57-16",
        "no": 16,
        "code": "W0440.L19",
        "name": "Соединитель дверной 2 (64.V0030) TD",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.2
        }
      },
      {
        "id": "thermo57-17",
        "no": 17,
        "code": "W0440.L5",
        "name": "Соединитель дверной 1 (64.V0029) ZD",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.55
        }
      },
      {
        "id": "thermo57-18",
        "no": 18,
        "code": "W0440.L22",
        "name": "Соединитель дверной 2 (64.V0029) ZD",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.2
        }
      },
      {
        "id": "thermo57-19",
        "no": 19,
        "code": "",
        "name": "Ручка окон ТЕРМО МХ Salon 9005",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 5.0,
          "color_60": 5.0
        }
      },
      {
        "id": "thermo57-20",
        "no": 20,
        "code": "",
        "name": "Ручка оконная MASTER (Италия)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color_60": 8.8
        }
      },
      {
        "id": "thermo57-21",
        "no": 21,
        "code": "",
        "name": "Ручка термо Рото Х NEW",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color_60": 4.0
        }
      },
      {
        "id": "thermo57-22",
        "no": 22,
        "code": "",
        "name": "Ручка оконная MILANO",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 5.7,
          "color_60": 6.3
        }
      },
      {
        "id": "thermo57-23",
        "no": 23,
        "code": "",
        "name": "Петля оконная Champion",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 2.0,
          "color_60": 2.0
        }
      },
      {
        "id": "thermo57-24",
        "no": 24,
        "code": "",
        "name": "Петля оконная МХ 100мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color_60": 1.4
        }
      },
      {
        "id": "thermo57-25",
        "no": 25,
        "code": "",
        "name": "Петля оконная 9211 2SK",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 2.0,
          "color_60": 2.0
        }
      },
      {
        "id": "thermo57-26",
        "no": 26,
        "code": "",
        "name": "Ручка дверной BUDVA 85 E",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 8.1,
          "color_60": 8.92
        }
      },
      {
        "id": "thermo57-27",
        "no": 27,
        "code": "",
        "name": "Ручка дверной BUDVA 92 E",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 9.4,
          "color_60": 10.3
        }
      },
      {
        "id": "thermo57-28",
        "no": 28,
        "code": "",
        "name": "Петля дверная Champion",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 3.8,
          "color_60": 3.8
        }
      },
      {
        "id": "thermo57-29",
        "no": 29,
        "code": "",
        "name": "Петля дверная MASTER 2SK",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 4.95,
          "color_60": 4.95
        }
      },
      {
        "id": "thermo57-30",
        "no": 30,
        "code": "",
        "name": "Петля дверная МХ узкий",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color_60": 1.7
        }
      },
      {
        "id": "thermo57-31",
        "no": 31,
        "code": "",
        "name": "Петля дверная МХ большой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color_60": 2.5
        }
      },
      {
        "id": "thermo57-32",
        "no": 32,
        "code": "",
        "name": "Ручка дверная Стублина",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 12.0,
          "color_60": 12.0
        }
      },
      {
        "id": "thermo57-33",
        "no": 33,
        "code": "",
        "name": "Замок дверной Стублина + Ответка",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 21.5
        }
      },
      {
        "id": "thermo57-34",
        "no": 34,
        "code": "",
        "name": "Замок комплект GRAF теплый",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 30.0
        }
      },
      {
        "id": "thermo57-35",
        "no": 35,
        "code": "",
        "name": "Замок 153/35",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "thermo57-36",
        "no": 36,
        "code": "",
        "name": "Замок 155/35",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "thermo57-37",
        "no": 37,
        "code": "",
        "name": "Сердцевина термо 91мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.0
        }
      },
      {
        "id": "thermo57-38",
        "no": 38,
        "code": "",
        "name": "Сердцевина термо 105мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 6.2
        }
      },
      {
        "id": "thermo57-39",
        "no": 39,
        "code": "",
        "name": "Ответная планка термо Х",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.1
        }
      },
      {
        "id": "thermo57-40",
        "no": 40,
        "code": "",
        "name": "Ответная планка 47, 65, 78",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.2
        }
      },
      {
        "id": "thermo57-41",
        "no": 41,
        "code": "",
        "name": "Шпингалет MASTER комплект",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 6.5,
          "color_60": 6.5
        }
      },
      {
        "id": "thermo57-42",
        "no": 42,
        "code": "",
        "name": "Шпингалет",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 2.8,
          "color_60": 2.8
        }
      },
      {
        "id": "thermo57-43",
        "no": 43,
        "code": "",
        "name": "Ответный упор MASTER комплект",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп.",
        "prices": {
          "white_60": 3.41,
          "color_60": 3.41
        }
      },
      {
        "id": "thermo57-44",
        "no": 44,
        "code": "",
        "name": "Ответный упор (запор) шестигранный",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.7
        }
      },
      {
        "id": "thermo57-45",
        "no": 45,
        "code": "",
        "name": "Ответный упор (запор) простой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.45
        }
      },
      {
        "id": "thermo57-46",
        "no": 46,
        "code": "",
        "name": "Крепление импост",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.1
        }
      },
      {
        "id": "thermo57-47",
        "no": 47,
        "code": "",
        "name": "Клей термо (Soudal Purocol Ekspress 310v)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 7.3
        }
      },
      {
        "id": "thermo57-48",
        "no": 48,
        "code": "",
        "name": "Элемент мувил",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп.",
        "prices": {
          "raw": 17.0
        }
      },
      {
        "id": "thermo57-49",
        "no": 49,
        "code": "Двойной Механизм Мастер",
        "name": "ширина от 450мм до 650мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 51.81,
          "color_60": 51.81
        }
      },
      {
        "id": "thermo57-50",
        "no": 50,
        "code": "Двойной Механизм Мастер",
        "name": "ширина от 650мм до 1700мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white_60": 54.0,
          "color_60": 54.0
        }
      },
      {
        "id": "thermo57-51",
        "no": 51,
        "code": "",
        "name": "РЕЗИНА Уголок 57 EPDC 0064",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.4
        }
      },
      {
        "id": "thermo57-52",
        "no": 52,
        "code": "EPDM0024",
        "name": "Уплотнитель замка Штапика 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(470м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo57-53",
        "no": 53,
        "code": "EPDM0004",
        "name": "Уплотнитель Штапик 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(70м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo57-54",
        "no": 54,
        "code": "EPDM0001",
        "name": "Уплотнитель Глухой 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(120м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo57-55",
        "no": 55,
        "code": "EPDM 0043",
        "name": "Уплотнитель Створка 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(175м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo57-56",
        "no": 56,
        "code": "EPDM0064",
        "name": "Уплотнитель Центр 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(52м)",
        "prices": {
          "raw": 25.2
        }
      }
    ],
    "gid": "1622192679"
  },
  {
    "id": "THERMO-65",
    "title": "THERMO - 65",
    "subtitle": "Энергоэффективная тёплая серия Standart 65 мм (хлысты 6,0 / 6,5 м)",
    "depth": "65 мм",
    "type": "Тёплая серия Standart",
    "date": "01.10.2026",
    "sheetImage": "../img/price-sheets/thermo-65.jpeg",
    "productImage": "../img/src/subcategories/thermo65.jpg",
    "pageLink": "thermo-65.html",
    "coatings": [
      {
        "key": "raw",
        "label": "Без покр.",
        "short": "Без покр.",
        "swatch": "#94a3b8"
      },
      {
        "key": "white",
        "label": "Белый (аксесс.)",
        "short": "Белый",
        "swatch": "#f8fafc"
      },
      {
        "key": "color",
        "label": "Цветной (RAL)",
        "short": "Цветной",
        "swatch": "#3b82f6"
      },
      {
        "key": "vacuum",
        "label": "Вакуум (под дерево)",
        "short": "Вакуум",
        "swatch": "#b45309"
      },
      {
        "key": "laminate",
        "label": "Ламинат",
        "short": "Ламинат",
        "swatch": "#78350f"
      }
    ],
    "items": [
      {
        "id": "thermo65-1",
        "no": 1,
        "code": "WDT.65.F0002",
        "name": "Рама",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "color": 84.8,
          "vacuum": 96.7,
          "laminate": 107.3
        }
      },
      {
        "id": "thermo65-2",
        "no": 2,
        "code": "WDT.65.M0002",
        "name": "Импост",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "color": 96.65,
          "vacuum": 112.0,
          "laminate": 122.1
        }
      },
      {
        "id": "thermo65-3",
        "no": 3,
        "code": "WDT.65.V0002",
        "name": "Створка",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "color": 94.85,
          "vacuum": 108.8,
          "laminate": 121.0
        }
      },
      {
        "id": "thermo65-4",
        "no": 4,
        "code": "WDT.65.V0004",
        "name": "Т дверная",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "color": 126.1,
          "vacuum": 141.85,
          "laminate": 159.3
        }
      },
      {
        "id": "thermo65-5",
        "no": 5,
        "code": "WDT.65.V0003",
        "name": "Z дверная",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "color": 126.1,
          "vacuum": 141.85,
          "laminate": 159.3
        }
      },
      {
        "id": "thermo65-7",
        "no": 7,
        "code": "WDT.65.G0031",
        "name": "Штапик 20мм прямой",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "color": 15.25,
          "vacuum": 19.2,
          "laminate": 25.15
        }
      },
      {
        "id": "thermo65-9",
        "no": 9,
        "code": "WDT.65.G0019",
        "name": "Штапик 32мм прямой",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "color": 13.45,
          "vacuum": 14.1
        }
      },
      {
        "id": "thermo65-10",
        "no": 10,
        "code": "WDT.65.A0007",
        "name": "Нашельник",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "color": 22.9,
          "vacuum": 23.3
        }
      },
      {
        "id": "thermo65-11",
        "no": 11,
        "code": "WDT.65.A0001",
        "name": "Штульп",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "color": 82.05,
          "vacuum": 94.15,
          "laminate": 106.5
        }
      },
      {
        "id": "thermo65-12",
        "no": 12,
        "code": "WDT.65.A0004",
        "name": "Угловой 90 градус",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "color": 127.05,
          "vacuum": 127.55
        }
      },
      {
        "id": "thermo65-13",
        "no": 13,
        "code": "WDT.65.A0005 + WDT.65.A06 + WDT.65.A07",
        "name": "Труба + адаптер (комп.)",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "color": 115.55,
          "vacuum": 124.7
        }
      },
      {
        "id": "thermo65-14",
        "no": 14,
        "code": "WO236",
        "name": "Соединитель рама",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 135.0
        }
      },
      {
        "id": "thermo65-15",
        "no": 15,
        "code": "WO436",
        "name": "Соединитель дверной",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "raw": 159.85
        }
      },
      {
        "id": "thermo65-16",
        "no": 16,
        "code": "WDC.47.A0009",
        "name": "Мувиль",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "color": 7.9,
          "vacuum": 10.45
        }
      },
      {
        "id": "thermo65-17",
        "no": 17,
        "code": "",
        "name": "Деко соединитель дверной",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.18
        }
      },
      {
        "id": "thermo65-18",
        "no": 18,
        "code": "A10-001",
        "name": "Деко соединитель рама",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.13
        }
      },
      {
        "id": "thermo65-19",
        "no": 19,
        "code": "A10-003",
        "name": "Деко соединитель створка",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.1
        }
      },
      {
        "id": "thermo65-20",
        "no": 20,
        "code": "WO236 5,1",
        "name": "Соединитель коробка 1 (5,1мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.57
        }
      },
      {
        "id": "thermo65-21",
        "no": 21,
        "code": "WO236 26,3",
        "name": "Соединитель коробка 2 (26,3мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.8
        }
      },
      {
        "id": "thermo65-22",
        "no": 22,
        "code": "WO236 5,1",
        "name": "Соединитель створка 1 (5,1мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.57
        }
      },
      {
        "id": "thermo65-23",
        "no": 23,
        "code": "WO236 18,4",
        "name": "Соединитель створка 2 (18,4мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.6
        }
      },
      {
        "id": "thermo65-24",
        "no": 24,
        "code": "WO436 5,1",
        "name": "Соединитель дверной 1 (5,1мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.73
        }
      },
      {
        "id": "thermo65-25",
        "no": 25,
        "code": "WO436 18,4",
        "name": "Соединитель дверной 1 (18,4мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.6
        }
      },
      {
        "id": "thermo65-26",
        "no": 26,
        "code": "",
        "name": "Ручка окон ТЕРМО МХ Salon 9005",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 5.0,
          "color": 5.0
        }
      },
      {
        "id": "thermo65-27",
        "no": 27,
        "code": "",
        "name": "Ручка оконная MASTER (Италия)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 8.8
        }
      },
      {
        "id": "thermo65-28",
        "no": 28,
        "code": "",
        "name": "Ручка термо Рото Х NEW",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 4.0
        }
      },
      {
        "id": "thermo65-29",
        "no": 29,
        "code": "",
        "name": "Ручка оконная MILANO",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 5.7,
          "color": 6.3
        }
      },
      {
        "id": "thermo65-30",
        "no": 30,
        "code": "",
        "name": "Петля оконная Champion",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 2.0,
          "color": 2.0
        }
      },
      {
        "id": "thermo65-31",
        "no": 31,
        "code": "",
        "name": "Петля оконная МХ 100мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 1.4
        }
      },
      {
        "id": "thermo65-32",
        "no": 32,
        "code": "",
        "name": "Петля оконная 9211 2SK",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 2.0,
          "color": 2.0
        }
      },
      {
        "id": "thermo65-33",
        "no": 33,
        "code": "",
        "name": "Ручка дверной BUDVA 85 E",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 8.1,
          "color": 8.92
        }
      },
      {
        "id": "thermo65-34",
        "no": 34,
        "code": "",
        "name": "Ручка дверной BUDVA 92 E",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 9.4,
          "color": 10.3
        }
      },
      {
        "id": "thermo65-35",
        "no": 35,
        "code": "",
        "name": "Петля дверная Champion",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 3.8,
          "color": 3.8
        }
      },
      {
        "id": "thermo65-36",
        "no": 36,
        "code": "",
        "name": "Петля дверная MASTER 2SK",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 4.95,
          "color": 4.95
        }
      },
      {
        "id": "thermo65-37",
        "no": 37,
        "code": "",
        "name": "Петля дверная МХ узкий",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 1.7
        }
      },
      {
        "id": "thermo65-38",
        "no": 38,
        "code": "",
        "name": "Петля дверная МХ большой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 2.5
        }
      },
      {
        "id": "thermo65-39",
        "no": 39,
        "code": "",
        "name": "Ручка дверная Стублина",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 12.0,
          "color": 12.0
        }
      },
      {
        "id": "thermo65-40",
        "no": 40,
        "code": "",
        "name": "Замок дверной Стублина + Ответка",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 21.5
        }
      },
      {
        "id": "thermo65-41",
        "no": 41,
        "code": "",
        "name": "Замок комплект GRAF теплый",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 30.0
        }
      },
      {
        "id": "thermo65-42",
        "no": 42,
        "code": "",
        "name": "Замок 153/35",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "thermo65-43",
        "no": 43,
        "code": "",
        "name": "Замок 155/35",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "thermo65-44",
        "no": 44,
        "code": "",
        "name": "Сердцевина термо 91мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.0
        }
      },
      {
        "id": "thermo65-45",
        "no": 45,
        "code": "",
        "name": "Сердцевина термо 105мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 6.2
        }
      },
      {
        "id": "thermo65-46",
        "no": 46,
        "code": "",
        "name": "Ответная планка термо Х",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.1
        }
      },
      {
        "id": "thermo65-47",
        "no": 47,
        "code": "",
        "name": "Ответная планка 47, 65, 78",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.2
        }
      },
      {
        "id": "thermo65-48",
        "no": 48,
        "code": "",
        "name": "Шпингалет MASTER комплект",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 6.5,
          "color": 6.5
        }
      },
      {
        "id": "thermo65-49",
        "no": 49,
        "code": "",
        "name": "Шпингалет",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 2.8,
          "color": 2.8
        }
      },
      {
        "id": "thermo65-50",
        "no": 50,
        "code": "",
        "name": "Ответный упор MASTER комплект",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп.",
        "prices": {
          "white": 3.41,
          "color": 3.41
        }
      },
      {
        "id": "thermo65-51",
        "no": 51,
        "code": "",
        "name": "Ответный упор (запор) шестигранный",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.7
        }
      },
      {
        "id": "thermo65-52",
        "no": 52,
        "code": "",
        "name": "Ответный упор (запор) простой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.45
        }
      },
      {
        "id": "thermo65-53",
        "no": 53,
        "code": "",
        "name": "Крепление импост",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.1
        }
      },
      {
        "id": "thermo65-54",
        "no": 54,
        "code": "",
        "name": "Клей термо (Soudal Purocol Ekspress 310v)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 7.3
        }
      },
      {
        "id": "thermo65-55",
        "no": 55,
        "code": "",
        "name": "Элемент мувил",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп.",
        "prices": {
          "raw": 17.0
        }
      },
      {
        "id": "thermo65-56",
        "no": 56,
        "code": "Двойной Механизм Мастер",
        "name": "ширина от 450мм до 650мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 51.81,
          "color": 51.81
        }
      },
      {
        "id": "thermo65-57",
        "no": 57,
        "code": "Двойной Механизм Мастер",
        "name": "ширина от 650мм до 1700мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 54.0,
          "color": 54.0
        }
      },
      {
        "id": "thermo65-58",
        "no": 58,
        "code": "EPDC1105",
        "name": "Резина улолгок (центральный)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.45
        }
      },
      {
        "id": "thermo65-59",
        "no": 59,
        "code": "EPDM A01-001",
        "name": "Уплотнитель Штапик 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(90м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo65-60",
        "no": 60,
        "code": "EPDM A01-002",
        "name": "Уплотнитель Глухой 10кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(135м)",
        "prices": {
          "raw": 50.4
        }
      },
      {
        "id": "thermo65-61",
        "no": 61,
        "code": "EPDM A01-003",
        "name": "Уплотнитель Створка 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(120м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo65-62",
        "no": 62,
        "code": "EPDM A01-005",
        "name": "Уплотнитель Центр 10кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(53м)",
        "prices": {
          "raw": 50.4
        }
      }
    ],
    "gid": "310914438"
  },
  {
    "id": "THERMO-78",
    "title": "THERMO - 78",
    "subtitle": "Премиальная тёплая серия YWD 78 Thermo с двойным термомостом (6,0 / 6,5 м)",
    "depth": "78 мм",
    "type": "Премиум тёплая серия",
    "date": "01.10.2026",
    "sheetImage": "../img/price-sheets/thermo-78.jpeg",
    "productImage": "../img/src/subcategories/ywd78.jpg",
    "pageLink": "ywd78thermo.html",
    "coatings": [
      {
        "key": "raw",
        "label": "Без покр.",
        "short": "Без покр.",
        "swatch": "#94a3b8"
      },
      {
        "key": "white",
        "label": "Белый (RAL 9016)",
        "short": "Белый",
        "swatch": "#f8fafc"
      },
      {
        "key": "color",
        "label": "Цветной (RAL)",
        "short": "Цветной",
        "swatch": "#3b82f6"
      },
      {
        "key": "anodized",
        "label": "Анодированный",
        "short": "Анодир.",
        "swatch": "#cbd5e1"
      },
      {
        "key": "vacuum",
        "label": "Вакуум (под дерево)",
        "short": "Вакуум",
        "swatch": "#b45309"
      },
      {
        "key": "laminate",
        "label": "Ламинат",
        "short": "Ламинат",
        "swatch": "#78350f"
      }
    ],
    "items": [
      {
        "id": "thermo78-1",
        "no": 1,
        "code": "WDT.78.F0001",
        "name": "Рама",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "white": 93.5,
          "color": 96.5,
          "anodized": 106.85,
          "vacuum": 111.7,
          "laminate": 120.1
        }
      },
      {
        "id": "thermo78-2",
        "no": 2,
        "code": "WDT.78.M0001",
        "name": "Импост",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "white": 99.15,
          "color": 101.15,
          "anodized": 110.85,
          "vacuum": 115.6,
          "laminate": 137.45
        }
      },
      {
        "id": "thermo78-3",
        "no": 3,
        "code": "WDT.78.M0005",
        "name": "Импост низкий",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "white": 92.35,
          "color": 97.7,
          "anodized": 107.65,
          "vacuum": 109.9,
          "laminate": 133.9
        }
      },
      {
        "id": "thermo78-4",
        "no": 4,
        "code": "WDT.78.V0001",
        "name": "Створка",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "white": 101.15,
          "color": 105.8,
          "anodized": 117.0,
          "vacuum": 122.0,
          "laminate": 143.05
        }
      },
      {
        "id": "thermo78-5",
        "no": 5,
        "code": "WDT.78.V0004",
        "name": "Т дверная",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "white": 129.2,
          "color": 137.65,
          "anodized": 152.15,
          "vacuum": 155.8,
          "laminate": 177.0
        }
      },
      {
        "id": "thermo78-6",
        "no": 6,
        "code": "WDT.78.V0007",
        "name": "Z дверная",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "white": 129.2,
          "color": 137.65,
          "anodized": 152.15,
          "vacuum": 155.8,
          "laminate": 177.0
        }
      },
      {
        "id": "thermo78-7",
        "no": 7,
        "code": "WDT.78.G0004",
        "name": "Штапик 20мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 15.75,
          "color": 16.1,
          "anodized": 18.7,
          "vacuum": 20.9,
          "laminate": 22.05
        }
      },
      {
        "id": "thermo78-8",
        "no": 8,
        "code": "WDT.78.G0002",
        "name": "Штапик 32мм",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 13.45,
          "color": 13.6,
          "laminate": 20.6
        }
      },
      {
        "id": "thermo78-9",
        "no": 9,
        "code": "WDT.78.A0008",
        "name": "Нашельник",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "color": 37.65
        }
      },
      {
        "id": "thermo78-10",
        "no": 10,
        "code": "WDT.78.A0001",
        "name": "Штульп",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "white": 90.8,
          "color": 93.15,
          "anodized": 96.65,
          "vacuum": 99.0,
          "laminate": 119.95
        }
      },
      {
        "id": "thermo78-11",
        "no": 11,
        "code": "WDT.78.A0004 + WDT.78.A0006 + WDT.78.A0007",
        "name": "Труба + адаптер (комп.)",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "white": 123.15,
          "color": 125.25
        }
      },
      {
        "id": "thermo78-12",
        "no": 12,
        "code": "",
        "name": "Угловой 90 градус",
        "category": "profile",
        "unit": "6.5",
        "pack": "1шт",
        "prices": {
          "white": 108.95,
          "color": 131.55
        }
      },
      {
        "id": "thermo78-13",
        "no": 13,
        "code": "WDC.47.A0009",
        "name": "Мувиль",
        "category": "profile",
        "unit": "6",
        "pack": "1шт",
        "prices": {
          "white": 7.1,
          "color": 7.9,
          "anodized": 8.95,
          "vacuum": 10.45
        }
      },
      {
        "id": "thermo78-14",
        "no": 14,
        "code": "W0227.L26.9",
        "name": "Соединитель Рама/Створка А (26.9мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.4
        }
      },
      {
        "id": "thermo78-15",
        "no": 15,
        "code": "W0227.L19.5",
        "name": "Соединитель Рама Б (19,5мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.8
        }
      },
      {
        "id": "thermo78-16",
        "no": 16,
        "code": "W0227.L26.9",
        "name": "Соединитель Рама/Створка А (26.9мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.4
        }
      },
      {
        "id": "thermo78-17",
        "no": 17,
        "code": "W0055.L13.6",
        "name": "Соединитель Створка Б (13,6мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.48
        }
      },
      {
        "id": "thermo78-18",
        "no": 18,
        "code": "W0535.L22.0",
        "name": "Соединитель Дверной А (22,0мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.75
        }
      },
      {
        "id": "thermo78-19",
        "no": 19,
        "code": "W0427.L15.8",
        "name": "Соединитель Дверной Б (15,8мм)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.32
        }
      },
      {
        "id": "thermo78-20",
        "no": 20,
        "code": "",
        "name": "Ручка окон ТЕРМО МХ Salon 9005",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 5.0,
          "color": 5.0
        }
      },
      {
        "id": "thermo78-21",
        "no": 21,
        "code": "",
        "name": "Ручка оконная MASTER (Италия)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 8.8
        }
      },
      {
        "id": "thermo78-22",
        "no": 22,
        "code": "",
        "name": "Ручка термо Рото Х NEW",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 4.0
        }
      },
      {
        "id": "thermo78-23",
        "no": 23,
        "code": "",
        "name": "Ручка оконная MILANO",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 5.7,
          "color": 6.3
        }
      },
      {
        "id": "thermo78-24",
        "no": 24,
        "code": "",
        "name": "Петля оконная Champion",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 2.0,
          "color": 2.0
        }
      },
      {
        "id": "thermo78-25",
        "no": 25,
        "code": "",
        "name": "Петля оконная МХ 100мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 1.4
        }
      },
      {
        "id": "thermo78-26",
        "no": 26,
        "code": "",
        "name": "Петля оконная 9211 2SK",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 2.0,
          "color": 2.0
        }
      },
      {
        "id": "thermo78-27",
        "no": 27,
        "code": "",
        "name": "Ручка дверной BUDVA 85 E",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 8.1,
          "color": 8.92
        }
      },
      {
        "id": "thermo78-28",
        "no": 28,
        "code": "",
        "name": "Ручка дверной BUDVA 92 E",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 9.4,
          "color": 10.3
        }
      },
      {
        "id": "thermo78-29",
        "no": 29,
        "code": "",
        "name": "Петля дверная Champion",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 3.8,
          "color": 3.8
        }
      },
      {
        "id": "thermo78-30",
        "no": 30,
        "code": "",
        "name": "Петля дверная MASTER 2SK",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 4.95,
          "color": 4.95
        }
      },
      {
        "id": "thermo78-31",
        "no": 31,
        "code": "",
        "name": "Петля дверная МХ узкий",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 1.7
        }
      },
      {
        "id": "thermo78-32",
        "no": 32,
        "code": "",
        "name": "Петля дверная МХ большой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "color": 2.5
        }
      },
      {
        "id": "thermo78-33",
        "no": 33,
        "code": "",
        "name": "Ручка дверная Стублина",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 12.0,
          "color": 12.0
        }
      },
      {
        "id": "thermo78-34",
        "no": 34,
        "code": "",
        "name": "Замок дверной Стублина + Ответка",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 21.5
        }
      },
      {
        "id": "thermo78-35",
        "no": 35,
        "code": "",
        "name": "Замок комплект GRAF теплый",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 30.0
        }
      },
      {
        "id": "thermo78-36",
        "no": 36,
        "code": "",
        "name": "Замок 153/35",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "thermo78-37",
        "no": 37,
        "code": "",
        "name": "Замок 155/35",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.08
        }
      },
      {
        "id": "thermo78-38",
        "no": 38,
        "code": "",
        "name": "Сердцевина термо 91мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 4.0
        }
      },
      {
        "id": "thermo78-39",
        "no": 39,
        "code": "",
        "name": "Сердцевина термо 105мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 6.2
        }
      },
      {
        "id": "thermo78-40",
        "no": 40,
        "code": "",
        "name": "Ответная планка термо Х",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.1
        }
      },
      {
        "id": "thermo78-41",
        "no": 41,
        "code": "",
        "name": "Ответная планка 47, 65, 78",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 2.2
        }
      },
      {
        "id": "thermo78-42",
        "no": 42,
        "code": "",
        "name": "Шпингалет MASTER комплект",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 6.5,
          "color": 6.5
        }
      },
      {
        "id": "thermo78-43",
        "no": 43,
        "code": "",
        "name": "Шпингалет",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 2.8,
          "color": 2.8
        }
      },
      {
        "id": "thermo78-44",
        "no": 44,
        "code": "",
        "name": "Ответный упор MASTER комплект",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп.",
        "prices": {
          "white": 3.41,
          "color": 3.41
        }
      },
      {
        "id": "thermo78-45",
        "no": 45,
        "code": "",
        "name": "Ответный упор (запор) шестигранный",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.7
        }
      },
      {
        "id": "thermo78-46",
        "no": 46,
        "code": "",
        "name": "Ответный упор (запор) простой",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.45
        }
      },
      {
        "id": "thermo78-47",
        "no": 47,
        "code": "",
        "name": "Крепление импост",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 0.1
        }
      },
      {
        "id": "thermo78-48",
        "no": 48,
        "code": "",
        "name": "Клей термо (Soudal Purocol Ekspress 310v)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 7.3
        }
      },
      {
        "id": "thermo78-49",
        "no": 49,
        "code": "",
        "name": "Элемент мувил",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп.",
        "prices": {
          "raw": 17.0
        }
      },
      {
        "id": "thermo78-50",
        "no": 50,
        "code": "Двойной Механизм Мастер",
        "name": "ширина от 450мм до 650мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 51.81,
          "color": 51.81
        }
      },
      {
        "id": "thermo78-51",
        "no": 51,
        "code": "Двойной Механизм Мастер",
        "name": "ширина от 650мм до 1700мм",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "white": 54.0,
          "color": 54.0
        }
      },
      {
        "id": "thermo78-52",
        "no": 52,
        "code": "EPDC2101",
        "name": "Резина улолгок (центральный)",
        "category": "accessory",
        "unit": "шт",
        "pack": "1шт",
        "prices": {
          "raw": 1.55
        }
      },
      {
        "id": "thermo78-53",
        "no": 53,
        "code": "200.0402301",
        "name": "Уплотнитель Штапик 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(130м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo78-54",
        "no": 54,
        "code": "EPDM 001",
        "name": "Уплотнитель Глухой 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(120м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo78-55",
        "no": 55,
        "code": "EPDM 220 11 001 01",
        "name": "Уплотнитель Створка 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(120м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo78-56",
        "no": 56,
        "code": "EPDM 220 11 002 01",
        "name": "Уплотнитель Створка 5кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(170м)",
        "prices": {
          "raw": 25.2
        }
      },
      {
        "id": "thermo78-57",
        "no": 57,
        "code": "EPDM 21011-00001",
        "name": "Уплотнитель Центр 10кг",
        "category": "accessory",
        "unit": "уп.",
        "pack": "уп(37м)",
        "prices": {
          "raw": 50.4
        }
      }
    ],
    "gid": "1104012242"
  }
]
};
