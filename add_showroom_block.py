import re

files_info = [
    {
        'path': '/Users/leonid/.gemini/antigravity/scratch/akfa-tajikistan/ru/index.html',
        'badge': 'Скоро открытие',
        'title': 'Флагманский шоурум AKFA Aluminium в Душанбе',
        'desc': 'Мы открываем официальное представительство и концептуальный шоурум в Таджикистане. Архитекторы, девелоперы и частные клиенты смогут вживую оценить премиальные оконно-дверные и фасадные серии, раздвижные панорамные системы, образцы покрытий RAL и инновационные строительные решения.',
        'f1_title': 'Экспозиция решений',
        'f1_text': 'Полноразмерные образцы систем Engelberg, Trio, Quattro и термофасадов BKT',
        'f2_title': 'Техническая экспертиза',
        'f2_text': 'Инженерный расчет ветровых нагрузок, теплотехники и спецификаций под проекты',
        'f3_title': 'Прямые поставки',
        'f3_text': 'Официальные гарантии завода-производителя и оперативная логистика по РТ',
        'f4_title': 'Партнерство и B2B',
        'f4_text': 'Специальные условия для строительных компаний, архитекторов и переработчиков',
        'btn_call': 'Связаться с представителем',
        'btn_addr': 'г. Душанбе, Таджикистан (LOFT Rep.)',
        'tel': '+992 11 112 47 42',
        'loc_label': 'Локация:',
        'tel_label': 'Тел:'
    },
    {
        'path': '/Users/leonid/.gemini/antigravity/scratch/akfa-tajikistan/tj/index.html',
        'badge': 'Ба зудӣ ифтитоҳ меёбад',
        'title': 'Шоуруми расмии AKFA Aluminium дар Душанбе',
        'desc': 'Мо намояндагии расмӣ ва шоуруми консептуалиро дар Тоҷикистон ифтитоҳ менамоем. Меъморон, ширкатҳои сохтмонӣ ва мизоҷон метавонанд бо системаҳои муосири дару тиреза, фасадҳои шишагӣ, намунаҳои рангҳои RAL ва қарорҳои инноватсионии сохтмонӣ аз наздик шинос шаванд.',
        'f1_title': 'Намоиши маҳсулот',
        'f1_text': 'Намунаҳои воқеии системаҳои Engelberg, Trio, Quattro ва фасадҳои гарми BKT',
        'f2_title': 'Машварати муҳандисӣ',
        'f2_text': 'Ҳисобкунии техникии лоиҳаҳо, тобоварии шамол ва самаранокии гармӣ',
        'f3_title': 'Таъминоти мустақим',
        'f3_text': 'Кафолати расмии корхона ва интиқоли фаврӣ ба тамоми минтақаҳои ҷумҳурӣ',
        'f4_title': 'Ҳамкорӣ ва B2B',
        'f4_text': 'Шароитҳои мусоид барои ширкатҳои сохтмонӣ, меъморон ва истеҳсолкунандагон',
        'btn_call': 'Тамос бо намоянда',
        'btn_addr': 'ш. Душанбе, Тоҷикистон (LOFT Rep.)',
        'tel': '+992 11 112 47 42',
        'loc_label': 'Макон:',
        'tel_label': 'Тел:'
    },
    {
        'path': '/Users/leonid/.gemini/antigravity/scratch/akfa-tajikistan/en/index.html',
        'badge': 'Opening Soon',
        'title': 'AKFA Aluminium Flagship Showroom in Dushanbe',
        'desc': 'We are establishing an official branch and concept showroom in Tajikistan. Architects, real estate developers, and private clients will be able to experience premium window, door, and facade systems, full-scale RAL finish samples, and cutting-edge structural engineering solutions.',
        'f1_title': 'Full-Scale Displays',
        'f1_text': 'Live samples of Engelberg, Trio, Quattro, and BKT high-performance facades',
        'f2_title': 'Technical Consulting',
        'f2_text': 'Engineering calculations for wind loads, energy efficiency, and specifications',
        'f3_title': 'Direct Manufacturer Supply',
        'f3_text': 'Direct factory warranty and prompt logistics across Tajikistan',
        'f4_title': 'B2B & Partner Programs',
        'f4_text': 'Exclusive partnership terms for developers, architectural bureaus, and fabricators',
        'btn_call': 'Contact Representation',
        'btn_addr': 'Dushanbe, Tajikistan (LOFT Rep.)',
        'tel': '+992 11 112 47 42',
        'loc_label': 'Location:',
        'tel_label': 'Tel:'
    }
]

def render_showroom_html(info):
    loc_label = info.get('loc_label', 'Локация:')
    tel_label = info.get('tel_label', 'Тел:')
    return f"""
            <!-- Showroom Opening Soon Section -->
            <section class="section showroom-section" style="background: #252525; padding: 75px 0; border-top: 1px solid #383838; border-bottom: 1px solid #383838; position: relative;">
                <div class="container">
                    <div class="section__in">
                        <div class="section__content" style="padding: 0;">
                            <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; margin-bottom: 45px; gap: 24px;">
                                <div style="flex: 1 1 650px;">
                                    <h2 class="sm-gl-title" style="margin: 0 0 15px;">
                                        <small style="position: relative; top: auto; left: auto; margin: 0; text-transform: none; display: inline-block;">{info['badge']}</small>
                                    </h2>
                                    <span class="gl-title" style="margin: 0 0 20px;">
                                        {info['title']}
                                    </span>
                                    <p style="color: #b5b5b5; font-size: 15px; line-height: 26px; margin: 0; font-weight: 400; max-width: 820px;">
                                        {info['desc']}
                                    </p>
                                </div>
                                <div style="flex: 0 0 auto; margin-bottom: 5px;">
                                    <a href="tel:+992111124742" class="btn-sm-size" style="display: inline-flex;">
                                        <span>{info['btn_call']}</span>
                                    </a>
                                </div>
                            </div>

                            <!-- 4 feature cards -->
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
                                <div style="background: #313131; border: 1px solid #3e3e3e; padding: 30px 24px; transition: border-color .3s ease;">
                                    <div style="width: 44px; height: 44px; background: #262626; border-left: 3px solid #e54b4b; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; color: #e54b4b; font-weight: 700; font-size: 16px; font-family: 'Montserrat', sans-serif;">01</div>
                                    <h4 style="color: #fff; font-size: 17px; font-weight: 600; margin: 0 0 10px; font-family: 'Montserrat', sans-serif;">{info['f1_title']}</h4>
                                    <p style="color: #a0a0a0; font-size: 13px; line-height: 20px; margin: 0;">{info['f1_text']}</p>
                                </div>

                                <div style="background: #313131; border: 1px solid #3e3e3e; padding: 30px 24px; transition: border-color .3s ease;">
                                    <div style="width: 44px; height: 44px; background: #262626; border-left: 3px solid #e54b4b; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; color: #e54b4b; font-weight: 700; font-size: 16px; font-family: 'Montserrat', sans-serif;">02</div>
                                    <h4 style="color: #fff; font-size: 17px; font-weight: 600; margin: 0 0 10px; font-family: 'Montserrat', sans-serif;">{info['f2_title']}</h4>
                                    <p style="color: #a0a0a0; font-size: 13px; line-height: 20px; margin: 0;">{info['f2_text']}</p>
                                </div>

                                <div style="background: #313131; border: 1px solid #3e3e3e; padding: 30px 24px; transition: border-color .3s ease;">
                                    <div style="width: 44px; height: 44px; background: #262626; border-left: 3px solid #e54b4b; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; color: #e54b4b; font-weight: 700; font-size: 16px; font-family: 'Montserrat', sans-serif;">03</div>
                                    <h4 style="color: #fff; font-size: 17px; font-weight: 600; margin: 0 0 10px; font-family: 'Montserrat', sans-serif;">{info['f3_title']}</h4>
                                    <p style="color: #a0a0a0; font-size: 13px; line-height: 20px; margin: 0;">{info['f3_text']}</p>
                                </div>

                                <div style="background: #313131; border: 1px solid #3e3e3e; padding: 30px 24px; transition: border-color .3s ease;">
                                    <div style="width: 44px; height: 44px; background: #262626; border-left: 3px solid #e54b4b; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; color: #e54b4b; font-weight: 700; font-size: 16px; font-family: 'Montserrat', sans-serif;">04</div>
                                    <h4 style="color: #fff; font-size: 17px; font-weight: 600; margin: 0 0 10px; font-family: 'Montserrat', sans-serif;">{info['f4_title']}</h4>
                                    <p style="color: #a0a0a0; font-size: 13px; line-height: 20px; margin: 0;">{info['f4_text']}</p>
                                </div>
                            </div>

                            <!-- Location strip -->
                            <div style="margin-top: 30px; padding: 18px 24px; background: #313131; border: 1px solid #3e3e3e; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 15px;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <img src="../img/bg/address-w.svg" alt="address" style="width: 18px; height: 18px; opacity: 0.8;" />
                                    <span style="color: #d1d1d1; font-size: 14px; font-family: 'Montserrat', sans-serif;"><strong>{loc_label}</strong> {info['btn_addr']}</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 15px; font-family: 'Montserrat', sans-serif;">
                                    <a href="tel:+992111124742" style="color: #e54b4b; font-size: 14px; font-weight: 600; text-decoration: none;">{tel_label} +992 11 112 47 42</a>
                                    <span style="color: #555;">|</span>
                                    <a href="https://t.me/maybeu" target="_blank" style="color: #4da6ff; font-size: 14px; text-decoration: none;">Telegram</a>
                                    <span style="color: #555;">|</span>
                                    <a href="https://www.instagram.com/loft.creative.house.tj/" target="_blank" style="color: #e54b4b; font-size: 14px; text-decoration: none;">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
"""
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <a href="tel:+992111124742" style="color: #e54b4b; font-size: 14px; font-weight: 600; text-decoration: none;">Тел: {info['tel']}</a>
                                <span style="color: #555;">|</span>
                                <a href="https://t.me/maybeu" target="_blank" style="color: #4da6ff; font-size: 14px; text-decoration: none;">Telegram</a>
                                <span style="color: #555;">|</span>
                                <a href="https://www.instagram.com/loft.creative.house.tj/" target="_blank" style="color: #e54b4b; font-size: 14px; text-decoration: none;">Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
"""

for item in files_info:
    path = item['path']
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Remove previous showroom block if any
    html = re.sub(r'<!-- Showroom Opening Soon Section -->[\s\S]*?</section>', '', html)

    # Insert right before <section id="products"
    showroom_block = render_showroom_html(item)
    if '<section id="products"' in html:
        html = html.replace('<section id="products"', showroom_block + '\n            <section id="products"')
    else:
        # Fallback before footer
        html = html.replace('<!-- footer Start -->', showroom_block + '\n<!-- footer Start -->')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Updated showroom block in: {path}")

print("Showroom block added successfully across all language versions!")
