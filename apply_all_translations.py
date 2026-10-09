import os
import re
import json

ROOT_DIR = '/Users/leonid/.gemini/antigravity/scratch/akfa-tajikistan'
RAW_DIR = os.path.join(ROOT_DIR, 'raw_html')
RU_DIR = os.path.join(ROOT_DIR, 'ru')
CACHE_FILE = os.path.join(ROOT_DIR, 'all_translations_cache.json')

with open(CACHE_FILE, 'r', encoding='utf-8') as f:
    cache = json.load(f)

ru_dict = cache.get('ru', {})

# Key brand & representative overrides
OVERRIDES_RU = {
    "A Flagship of Uzbekistan's Industrial Development": "Флагман индустриального производства — Представительство в Таджикистане",
    "AKFA Aluminium — A Flagship of Uzbekistan’s Industrial Development": "AKFA Aluminium — Промышленные решения для строительного сектора Таджикистана",
    "AKFA Aluminium is an integrated industrial group producing aluminium and PVC profile systems, glazed and facade structures, heating systems, and building materials. Through its interconnected manufacturing base, the company delivers solutions for modern architecture, construction, and urban infrastructure.": 
        "AKFA Aluminium — интегрированная промышленная группа, производящая алюминиевые и ПВХ профильные системы, светопрозрачные и фасадные конструкции, радиаторы отопления и строительные материалы. Компания поставляет современные решения для архитектуры, девелопмента и городской инфраструктуры.",
    "AKFA Aluminium JSC is an integrated industrial group with a large-scale manufacturing base, a diversified product portfolio and a growing international presence. The Company operates across key areas of the construction industry, producing profile systems, glazed and facade structures, heating systems and building materials. As a joint-stock company, AKFA Aluminium is developing a transparent corporate framework based on governance, reporting and disclosure practices.":
        "AKFA Aluminium — интегрированная промышленная группа с масштабной производственной базой, диверсифицированным портфелем продукции и растущим международным присутствием. Компания работает в ключевых направлениях строительной индустрии, выпуская профильные системы, фасадные конструкции, системы отопления и строительные материалы.",
    "ABOUT THE COMPANY": "О КОМПАНИИ",
    "About the company": "О компании",
    "About the Company": "О компании",
    "About us": "О компании",
    "About": "О нас",
    "Who We Are": "О нас",
    "Who We Are | AKFA ALUMINIUM JSC": "О нас | AKFA ALUMINIUM Таджикистан",
    "Home Page | AKFA ALUMINIUM JSC": "Главная | AKFA ALUMINIUM Таджикистан",
    "years": "лет",
    "Years": "Лет",
    "YEARS": "ЛЕТ",
    "Of Industrial Development": "промышленного развития",
    "OF INDUSTRIAL DEVELOPMENT": "ПРОМЫШЛЕННОГО РАЗВИТИЯ",
    "Corporate Governance & Structure": "Корпоративное управление и структура",
    "Corporate Governance &amp; Structure": "Корпоративное управление и структура",
    "Global Presence": "Глобальное присутствие",
    "Careers": "Карьера",
    "Activity Fields": "Направления деятельности",
    "Activity fields": "Направления деятельности",
    "Group Companies": "Компании группы",
    "Innovations": "Инновации",
    "Products & Services": "Продукция и решения",
    "Products &amp; Services": "Продукция и решения",
    "Procurement": "Закупки",
    "Sustainability": "Устойчивое развитие",
    "Sustainability Strategy": "Стратегия устойчивого развития",
    "ESG Initiatives": "ESG-инициативы",
    "ESG Reports": "ESG-отчеты",
    "Investor Relations": "Инвесторам",
    "Investor Overview": "Обзор для инвесторов",
    "Reports & Financial Statements": "Отчетность и финансовый аудит",
    "Reports &amp; Financial Statements": "Отчетность и финансовый аудит",
    "Material Facts": "Существенные факты",
    "Corporate Documents": "Корпоративные документы",
    "Press Service": "Пресс-центр",
    "News": "Новости",
    "Media Gallery": "Медиа-галерея",
    "Contacts": "Контакты",
    "Head Office": "Офис в Душанбе",
    "Head office": "Офис в Душанбе",
    "View More": "Подробнее",
    "View more": "Подробнее",
    "VIEW MORE": "ПОДРОБНЕЕ",
    "All news": "Все новости",
    "Send a message": "Отправить сообщение",
    "Profile Systems<br />and Components": "Профильные системы<br />и комплектующие",
    "Glazed Structures<br />and Facade Systems": "Светопрозрачные конструкции<br />и фасады",
    "Modern Wall Materials<br />and Ready Solutions": "Стеновые материалы<br />и готовые решения",
    "Building Materials<br />and Engineering Solutions": "Строительные материалы<br />и инженерные решения",
    "Responsible Industrial Growth": "Ответственный промышленный рост",
    "Our approach integrates resource efficiency, social responsibility and corporate governance into the company’s long-term development.":
        "Наш подход интегрирует ресурсоэффективность, социальную ответственность и передовые стандарты управления в долгосрочное развитие компании.",
    "Contact us": "Связаться с нами",
    "Name": "Ваше имя",
    "Your phone number": "Номер телефона",
    "E-mail": "Электронная почта",
    "Your comments": "Ваше сообщение или запрос на спецификацию",
    "Legal name": "Юридическое лицо",
    "Address": "Адрес офиса",
    "Phone number": "Телефон",
    "Working Hours": "Режим работы",
    "Terms of personal data processing": "Политика конфиденциальности",
    "All rights reserved": "Все права защищены",
    "Aluminium profile": "Алюминиевый профиль",
    "PVC PROFILE": "ПВХ ПРОФИЛЬ",
    "Heating Systems": "Системы отопления",
    "Façade systems": "Фасадные системы",
    "Facade systems": "Фасадные системы",
    "Sliding systems": "Раздвижные системы",
    "Translucent structures": "Светопрозрачные конструкции",
    "AKFA Aluminium Publishes Decision on Initial Share Placement": "AKFA Aluminium публикует решение о выпуске акций",
    "AKFA Aluminium Participates in UzBuild 2026 International Construction Exhibition": "AKFA Aluminium на строительной выставке UzBuild 2026",
    "AKFA Aluminium at the Uzbekistan–Iraq Business Forum": "AKFA Aluminium на международном бизнес-форуме"
}

ru_dict.update(OVERRIDES_RU)

# Sort dictionary by length descending so longer sentences are replaced first
sorted_trans = sorted(ru_dict.items(), key=lambda x: len(x[0]), reverse=True)

PHONE_NUM = '+992 11 112 47 42'
PHONE_LINK = 'tel:+992111124742'
EMAIL_ADDR = 'contact@loft.tj'
TG_LINK = 'https://t.me/maybeu'
INSTA_LINK = 'https://www.instagram.com/loft.creative.house.tj/'
ADDRESS_TXT_RU = 'г. Душанбе, Таджикистан (LOFT Representation)'

raw_files = [f for f in os.listdir(RAW_DIR) if f.endswith('.html')]
print(f"Applying full Russian translation to all {len(raw_files)} pages...")

for fname in raw_files:
    with open(os.path.join(RAW_DIR, fname), 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()

    # 1. html lang="ru"
    html = re.sub(r'<html[^>]*>', '<html lang="ru">', html, count=1)

    # 2. Header language switcher
    lang_dropdown = """<div class="language-selection">
                        <span class="language-selection__text">Ru</span>
                        <div class="language-selection__dropdown">
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span class="language-selection__dropdown__icon">
                                            <img src="../img/src/flags/ru.svg" alt="Ru" />
                                        </span>
                                        <span class="language-selection__dropdown__text">Ru</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../tj/""" + fname + """">
                                        <span class="language-selection__dropdown__icon">
                                            <img src="../img/src/flags/tj.svg" alt="Tj" />
                                        </span>
                                        <span class="language-selection__dropdown__text">Tj</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../en/""" + fname + """">
                                        <span class="language-selection__dropdown__icon">
                                            <img src="../img/src/flags/en.svg" alt="Eng" />
                                        </span>
                                        <span class="language-selection__dropdown__text">Eng</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>"""
    html = re.sub(r'<div class="language-selection">[\s\S]*?</div>\s*</div>', lang_dropdown, html, count=1)

    # Mobile lang
    mob_lang = """<dl class="language">
                                <dt>Язык:</dt>
                                <dd>
                                    <ul>
                                        <li class="active"><a href="javascript:void(0)">Ru</a></li>
                                        <li><a href="../tj/""" + fname + """">Tj</a></li>
                                        <li><a href="../en/""" + fname + """">Eng</a></li>
                                    </ul>
                                </dd>
                            </dl>"""
    html = re.sub(r'<dl class="language">[\s\S]*?</dl>', mob_lang, html, count=1)

    # 3. Contacts
    html = html.replace('https://www.facebook.com/Akfahome/', TG_LINK)
    html = html.replace('https://www.instagram.com/akfa_home/?hl=ru', INSTA_LINK)
    html = html.replace('+998 71 203 00 00', PHONE_NUM)
    html = html.replace('tel:+998 71 203 00 00', PHONE_LINK)
    html = html.replace('tel:+998712030000', PHONE_LINK)
    html = html.replace('info@akfagroup.com', EMAIL_ADDR)
    html = html.replace('info@akfaaluminium.com', EMAIL_ADDR)
    html = html.replace('mailto:info@akfagroup.com', f'mailto:{EMAIL_ADDR}')
    html = html.replace('mailto:info@akfaaluminium.com', f'mailto:{EMAIL_ADDR}')
    html = html.replace('2, Makhtumkuli Street, 100047, Tashkent, Uzbekistan', ADDRESS_TXT_RU)
    html = html.replace('AKFA Aluminium JSC © 2026 All rights reserved', 'AKFA Aluminium Таджикистан © 2026 Все права защищены')

    # 4. Video attributes
    html = html.replace('<video id="VideoChange" autoplay muted playsinline webkit-playsinline poster="" preload="none" src="../mov/0531.mp4"></video>',
                        '<video id="VideoChange" autoplay loop muted playsinline webkit-playsinline poster="../img/src/promo.jpg" preload="auto" src="../mov/0531.mp4"></video>')

    # 5. Apply translations to tag contents
    for src, dst in sorted_trans:
        if not src or src == dst: continue
        # in >src<
        html = re.sub(rf'>\s*{re.escape(src)}\s*<', f'>{dst}<', html)
        html = html.replace(f'placeholder="{src}"', f'placeholder="{dst}"')
        html = html.replace(f'title="{src}"', f'title="{dst}"')
        if f'<title>{src}</title>' in html:
            html = html.replace(f'<title>{src}</title>', f'<title>{dst}</title>')

    with open(os.path.join(RU_DIR, fname), 'w', encoding='utf-8') as f:
        f.write(html)

print("Successfully updated all pages in /ru/ directory!")
