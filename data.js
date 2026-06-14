// === БАЗА ДАННЫХ ДЛЯ SKYGEN (100 ГОРОДОВ, ДОСТОПРИМЕЧАТЕЛЬНОСТИ, ОТЕЛИ И МЕНЮ) ===

const CITIES = [
  { city: "Москва", country: "Россия", code: "SVO", hotelCount: 7, timezone: "UTC+3", weather: "☀️ +23°C", sights: ["Кремль и Красная площадь", "Парк Горького", "Москва-Сити"] }, 
  { city: "Владивосток", country: "Россия", code: "VVO", hotelCount: 3, timezone: "UTC+10", weather: "⛅ +17°C", sights: ["Золотой мост", "Остров Русский", "Приморский океанариум"] },
  { city: "Шанхай", country: "Китай", code: "PVG", hotelCount: 7, timezone: "UTC+8", weather: "🌧️ +26°C", sights: ["Набережная Вайтань", "Телебашня Восточная жемчужина", "Сад Юйюань"] }, 
  { city: "Сочи", country: "Россия", code: "AER", hotelCount: 4, timezone: "UTC+3", weather: "☀️ +27°C", sights: ["Олимпийский парк", "Роза Хутор", "Сочи Парк"] },
  { city: "Санкт-Петербург", country: "Россия", code: "LED", hotelCount: 6, timezone: "UTC+3", weather: "☁️ +19°C", sights: ["Эрмитаж", "Петергоф", "Исаакиевский собор"] }, 
  { city: "Новосибирск", country: "Россия", code: "OVB", hotelCount: 3, timezone: "UTC+7", weather: "☀️ +22°C", sights: ["Новосибирский зоопарк", "Театр оперы и балета", "Академгородок"] },
  { city: "Екатеринбург", country: "Россия", code: "SVX", hotelCount: 3, timezone: "UTC+5", weather: "⛅ +20°C", sights: ["Храм на Крови", "Плотинка", "Ельцин Центр"] }, 
  { city: "Казань", country: "Россия", code: "KZN", hotelCount: 4, timezone: "UTC+3", weather: "☀️ +21°C" },
  { city: "Ташкент", country: "Узбекистан", code: "TAS", hotelCount: 3, timezone: "UTC+5", weather: "☀️ +33°C", sights: ["Медресе Кукельдаш", "Ташкентская телебашня", "Площадь Амира Тимура"] }, 
  { city: "Астана", country: "Казахстан", code: "NQZ", hotelCount: 3, timezone: "UTC+5", weather: "⛅ +24°C", sights: ["Байтерек", "Хан Шатыр", "Мечеть Хазрет Султан"] },
  { city: "Дубай", country: "ОАЭ", code: "DXB", hotelCount: 8, timezone: "UTC+4", weather: "☀️ +39°C", sights: ["Бурдж-Халифа", "Дубай Молл", "Пальма Джумейра"] }, 
  { city: "Нью-Йорк", country: "США", code: "JFK", hotelCount: 7, timezone: "UTC-4", weather: "⛅ +25°C", sights: ["Статуя Свободы", "Таймс-Сквер", "Центральный парк"] }, 
  { city: "Лондон", country: "Великобритания", code: "LHR", hotelCount: 7, timezone: "UTC+1", weather: "🌧️ +16°C", sights: ["Биг-Бен", "Тауэрский мост", "Лондонский глаз"] }, 
  { city: "Токио", country: "Япония", code: "HND", hotelCount: 8, timezone: "UTC+9", weather: "☀️ +28°C", sights: ["Перекресток Сибуя", "Токийская башня", "Район Акихабара"] }, 
  { city: "Париж", country: "Франция", code: "CDG", hotelCount: 6, timezone: "UTC+2", weather: "⛅ +22°C", sights: ["Эйфелева башня", "Лувр", "Собор Парижской Богоматери"] }, 
  { city: "Стамбул", country: "Турция", code: "IST", hotelCount: 7, timezone: "UTC+3", weather: "☀️ +26°C", sights: ["Айя-София", "Голубая мечеть", "Дворец Топкапы"] }, 
  { city: "Бангкок", country: "Таиланд", code: "BKK", hotelCount: 5, timezone: "UTC+7", weather: "🌧️ +32°C", sights: ["Большой дворец", "Храм Ват Арун", "Рынок Чатучак"] }, 
  { city: "Пхукет", country: "Таиланд", code: "HKT", hotelCount: 4, timezone: "UTC+7", weather: "⛅ +31°C", sights: ["Пляж Патонг", "Большой Будда", "Старый город Пхукет"] },
  { city: "Сеул", country: "Южная Корея", code: "ICN", hotelCount: 6, timezone: "UTC+9", weather: "☀️ +25°C", sights: ["Дворец Кёнбоккун", "Башня N Сеул", "Район Каннам (Gangnam)"] }, 
  { city: "Сингапур", country: "SIN", code: "SIN", hotelCount: 6, timezone: "UTC+8", weather: "🌧️ +30°C", sights: ["Сады у Залива", "Отель Marina Bay Sands", "Остров Сентоза"] }, 
  { city: "Лос-Анджелес", country: "США", code: "LAX", hotelCount: 6, timezone: "UTC-7", weather: "☀️ +26°C", sights: ["Голливудская аллея славы", "Обсерватория Гриффита", "Санта-Моника Пирс"] }, 
  { city: "Рим", country: "Италия", code: "FCO", hotelCount: 5, timezone: "UTC+2", weather: "☀️ +29°C", sights: ["Колизей", "Фонтан Треви", "Ватикан"] }, 
  { city: "Барселона", country: "Испания", code: "BCN", hotelCount: 5, timezone: "UTC+2", weather: "☀️ +27°C", sights: ["Саграда Фамилия", "Парк Гуэль", "Улица Рамбла"] }, 
  { city: "Берлин", country: "Германия", code: "BER", hotelCount: 5, timezone: "UTC+2", weather: "⛅ +21°C", sights: ["Бранденбургские ворота", "Рейхстаг", "Берлинская стена"] }, 
  { city: "Сидней", country: "Австралия", code: "SYD", hotelCount: 5, timezone: "UTC+10", weather: "☀️ +18°C", sights: ["Сиднейский оперный театр", "Мост Харбор-Бридж", "Пляж Бонди"] }, 
  { city: "Пекин", country: "Китай", code: "PEK", hotelCount: 7, timezone: "UTC+8", weather: "☀️ +29°C", sights: ["Запретный город", "Великая Китайская стена", "Площадь Тяньаньмэнь"] }, 
  { city: "Каир", country: "Египет", code: "CAI", hotelCount: 4, timezone: "UTC+3", weather: "☀️ +35°C", sights: ["Пирамиды Гизы", "Большой Сфинкс", "Каирский египетский музей"] }, 
  { city: "Рио-де-Жанейро", country: "Бразилия", code: "GIG", hotelCount: 4, timezone: "UTC-3", weather: "⛅ +24°C", sights: ["Статуя Христа-Искупителя", "Пляж Копакабана", "Гора Сахарная голова"] }, 
  { city: "Дели", country: "Индия", code: "DEL", hotelCount: 6, timezone: "UTC+5.30", weather: "☀️ +38°C", sights: ["Красный форт", "Ворота Индии", "Храм Лотоса"] }, 
  { city: "Мальдивы", country: "Мальдивы", code: "MLE", hotelCount: 3, timezone: "UTC+5", weather: "☀️ +30°C", sights: ["Атолл Мале", "Подводные рестораны", "Банановый риф"] }, 
  { city: "Амстердам", country: "Нидерланды", code: "AMS", hotelCount: 4, timezone: "UTC+2", weather: "🌧️ +17°C", sights: ["Каналы Амстердама", "Музей Ван Гога", "Рейксмюсеум"] }, 
  { city: "Мадрид", country: "Испания", code: "MAD", hotelCount: 4, timezone: "UTC+2", weather: "☀️ +31°C", sights: ["Королевский дворец", "Музей Прадо", "Парк Буэн-Ретиро"] }, 
  { city: "Торонто", country: "Канада", code: "YYZ", hotelCount: 4, timezone: "UTC-4", weather: "⛅ +22°C", sights: ["Башня Си-Эн Тауэр", "Каса Лома", "Аквариум Рипли"] }, 
  { city: "Майами", country: "США", code: "MIA", hotelCount: 4, timezone: "UTC-4", weather: "☀️ +30°C", sights: ["Саут-Бич", "Район Арт-Деко", "Вилла Визкайя"] }, 
  { city: "Доха", country: "Катар", code: "DOH", hotelCount: 5, timezone: "UTC+3", weather: "☀️ +37°C", sights: ["Музей исламского искусства", "Рынок Сук-Вакиф", "Искусственный остров Жемчужина Катара"] }, 
  { city: "Мюнхен", country: "Германия", code: "MUC", hotelCount: 4, timezone: "UTC+2", weather: "☁️ +19°C", sights: ["Мариенплац", "Дворец Нимфенбург", "Музей BMW"] }, 
  { city: "Вена", country: "Австрия", code: "VIE", hotelCount: 4, timezone: "UTC+2", weather: "☀️ +23°C", sights: ["Дворец Шёнбрунн", "Хофбург", "Венская государственная опера"] }, 
  { city: "Гонконг", country: "Гонконг", code: "HKG", hotelCount: 6, timezone: "UTC+8", weather: "🌧️ +27°C", sights: ["Пик Виктория", "Большой Будда Тяньтань", "Аллея звезд"] }, 
  { city: "Милан", country: "Италия", code: "MXP", hotelCount: 5, timezone: "UTC+2", weather: "⛅ +25°C", sights: ["Миланский собор (Дуомо)", "Галерея Виктора Эммануила II", "Замок Сфорца"] }, 
  { city: "Анталья", country: "Турция", code: "AYT", hotelCount: 4, timezone: "UTC+3", weather: "☀️ +32°C", sights: ["Старый город Калеичи", "Ворота Адриана", "Водопад Дюден"] },
  { city: "Куала-Лумпур", country: "Малайзия", code: "KUL", hotelCount: 6, timezone: "UTC+8", weather: "🌧️ +31°C", sights: ["Башни-близнецы Петронас", "Пещеры Бату", "Телебашня Менара КЛ"] },
  { city: "Гуанчжоу", country: "Китай", code: "CAN", hotelCount: 5, timezone: "UTC+8", weather: "🌧️ +29°C", sights: ["Телебашня Гуанчжоу", "Остров Шамянь", "Парк Юэсю"] },
  { city: "Шэньчжэнь", country: "Китай", code: "SZX", hotelCount: 5, timezone: "UTC+8", weather: "⛅ +30°C", sights: ["Небоскрёб Пинань", "Парк Окно в мир", "Тематический парк Великолепный Китай"] },
  { city: "Чэнду", country: "Китай", code: "CTU", hotelCount: 5, timezone: "UTC+8", weather: "☁️ +26°C", sights: ["Центр разведения панд", "Улица Джинли", "Гора Цинчэншань"] },
  { city: "Бали", country: "Индонезия", code: "DPS", hotelCount: 5, timezone: "UTC+8", weather: "☀️ +29°C" },
  { city: "Манила", country: "Филиппины", code: "MNL", hotelCount: 4, timezone: "UTC+8", weather: "🌧️ +32°C", sights: ["Интрамурос", "Рисаль-парк", "Манильский собор"] },
  { city: "Джакарта", country: "Индонезия", code: "CGK", hotelCount: 4, timezone: "UTC+7", weather: "🌧️ +30°C", sights: ["Национальный монумент Монас", "Старый город Кота Tua", "Парк Прекрасная Индонезия в миниатюре"] },
  { city: "Ханой", country: "Вьетнам", code: "HAN", hotelCount: 4, timezone: "UTC+7", weather: "⛅ +28°C", sights: ["Озеро Возвращенного Меча", "Старый квартал Ханоя", "Мавзолей Хо Ши Мина"] },
  { city: "Хошимин", country: "Вьетнам", code: "SGN", hotelCount: 4, timezone: "UTC+7", weather: "🌧️ +31°C", sights: ["Туннели Кути", "Дворец Воссоединения", "Собор Сайгонской Богоматери"] },
  { city: "Коломбо", country: "Шри-Ланка", code: "CMB", hotelCount: 3, timezone: "UTC+5.30", weather: "🌧️ +29°C", sights: ["Набережная Галле Фейс Грин", "Храм Гангарамая", "Площадь Независимости"] },
  { city: "Алматы", country: "Казахстан", code: "ALA", hotelCount: 4, timezone: "UTC+5", weather: "☀️ +26°C", sights: ["Медеу", "Шымбулак", "Кок-Тобе"] },
  { city: "Калининград", country: "Россия", code: "KGD", hotelCount: 3, timezone: "UTC+2", weather: "⛅ +18°C", sights: ["Кафедральный собор", "Музей янтаря", "Рыбная деревня"] },
  { city: "Иркутск", country: "Россия", code: "IKT", hotelCount: 3, timezone: "UTC+8", weather: "☀️ +21°C", sights: ["Озеро Байкал (Листвянка)", "130-й квартал", "Знаменский монастырь"] },
  { city: "Нижний Новгород", country: "Россия", code: "GOJ", hotelCount: 3, timezone: "UTC+3", weather: "⛅ +20°C", sights: ["Нижегородский кремль", "Чкаловская лестница", "Улица Большая Покровская"] },
  { city: "Абу-Даби", country: "ОАЭ", code: "AUH", hotelCount: 5, timezone: "UTC+4", weather: "☀️ +38°C", sights: ["Мечеть шейха Зайда", "Лувр Абу-Даби", "Мир Ferrari"] },
  { city: "Эр-Рияд", country: "Саудовская Аравия", code: "RUH", hotelCount: 4, timezone: "UTC+3", weather: "☀️ +41°C", sights: ["Крепость Масмак", "Небоскрёб Бурдж Аль-Мамляка", "Исторический центр короля Абдул-Азиза"] },
  { city: "Ницца", country: "Франция", code: "NCE", hotelCount: 4, timezone: "UTC+2", weather: "☀️ +26°C", sights: ["Английская набережная", "Замковая гора", "Музей Марка Шагала"] },
  { city: "Венеция", country: "Италия", code: "VCE", hotelCount: 4, timezone: "UTC+2", weather: "⛅ +24°C", sights: ["Площадь Сан-Марко", "Гранд-канал", "Дворец дожей"] },
  { city: "Валенсия", country: "Испания", code: "VLC", hotelCount: 3, timezone: "UTC+2", weather: "☀️ +28°C", sights: ["Город искусств и наук", "Центральный рынок", "Валенсийский собор"] },
  { city: "Афины", country: "Греция", code: "ATH", hotelCount: 5, timezone: "UTC+3", weather: "☀️ +32°C", sights: ["Акрополь", "Парфенон", "Район Плака"] },
  { city: "Шарм-эль-Шейх", country: "Египет", code: "SSH", hotelCount: 4, timezone: "UTC+3", weather: "☀️ +36°C", sights: ["Заповедник Рас-Мохаммед", "Наама Бей", "Сохо Сквер"] },
  { city: "Осака", country: "Япония", code: "KIX", hotelCount: 5, timezone: "UTC+9", weather: "🌧️ +26°C", sights: ["Замок в Осаке", "Район Дотонбори", "Парк Universal Studios Japan"] },
  { city: "Пусан", country: "Южная Корея", code: "PUS", hotelCount: 4, timezone: "UTC+9", weather: "⛅ +24°C", sights: ["Пляж Хэундэ", "Культурная деревня Камчхон", "Храм Хэдон Ёнгунса"] },
  { city: "Сан-Франциско", country: "США", code: "SFO", hotelCount: 5, timezone: "UTC-7", weather: "🌫️ +16°C", sights: ["Мост Золотые Ворота", "Остров Алькатрас", "Пирс 39"] },
  { city: "Чикаго", country: "США", code: "ORD", hotelCount: 4, timezone: "UTC-5", weather: "⛅ +23°C", sights: ["Миллениум-парк (Клауд-Гейт)", "Уиллис-тауэр", "Военно-морской пирс Navy Pier"] },
  { city: "Франкфурт", country: "Германия", code: "FRA", hotelCount: 5, timezone: "UTC+2", weather: "☁️ +19°C", sights: ["Площадь Рёмерберг", "Дом Гёте", "Майнтауэр"] },
  { city: "Мельбурн", country: "Австралия", code: "MEL", hotelCount: 5, timezone: "UTC+10", weather: "🌧️ +14°C", sights: ["Площадь Федерации", "Королевский ботанический сад", "Рынок королевы Виктории"] },
  { city: "Ханчжоу", country: "Китай", code: "HGH", hotelCount: 4, timezone: "UTC+8", weather: "🌧️ +25°C", sights: ["Озеро Сиху", "Храм Линьинь", "Чайные плантации Лунцзин"] },
  { city: "Чунцин", country: "Китай", code: "CKG", hotelCount: 5, timezone: "UTC+8", weather: "🌫️ +28°C", sights: ["Пешеходная улица Цзефанбэй", "Пещеры Хунъядун", "Наземное метро через жилой дом Liziba"] },
  { city: "Чиангмай", country: "Таиланд", code: "CNX", hotelCount: 3, timezone: "UTC+7", weather: "🌧️ +29°C", sights: ["Храм Ват Пратхат Дой Сутхеп", "Ночной базар", "Заповедник слонов Elephant Nature Park"] },
  { city: "Лангкави", country: "Малайзия", code: "LGK", hotelCount: 3, timezone: "UTC+7", weather: "⛅ +30°C", sights: ["Небесный мост Лангкави", "Площадь Орла", "Канатная дорога Langkawi Cable Car"] },
  { city: "Пенанг", country: "Малайзия", code: "PEN", hotelCount: 4, timezone: "UTC+8", weather: "🌧️ +31°C", sights: ["Джорджтаун стрит-арт", "Храм Кек Лок Си", "Пенанг Хилл"] },
  { city: "Маврикий", country: "Маврикий", code: "MRU", hotelCount: 3, timezone: "UTC+4", weather: "☀️ +26°C", sights: ["Семицветные пески Шамарель", "Гора Ле-Морн-Брабан", "Ботанический сад Памплемус"] },
  { city: "Сейшелы", country: "Сейшельские о-ва", code: "SEZ", hotelCount: 2, timezone: "UTC+4", weather: "☀️ +28°C", sights: ["Пляж Анс Лацио", "Природный резерват Валле-де-Мэ", "Остров Ла-Диг"] },
  { city: "Манчестер", country: "Великобритания", code: "MAN", hotelCount: 3, timezone: "UTC+1", weather: "🌧️ +15°C", sights: ["Стадион Олд Траффорд", "Манчестерский собор", "Музей науки и промышленности"] },

  // === ЕЩЕ 25 МЕГАПОЛИСОВ И ТУРИСТИЧЕСКИХ ЛОКАЦИЙ ДО 100 ===
  { city: "Бангкалор", country: "Индия", code: "BLR", hotelCount: 4, timezone: "UTC+5.30", weather: "⛅ +28°C", sights: ["Бангалорский дворец", "Парк Каббон", "Храм ИСККОН"] },
  { city: "Мумбаи", country: "Индия", code: "BOM", hotelCount: 5, timezone: "UTC+5.30", weather: "🌧️ +30°C", sights: ["Ворота в Индию", "Вокзал Чхатрапати-Шиваджи", "Набережная Марин-Драйв"] },
  { city: "Лиссабон", country: "Португалия", code: "LIS", hotelCount: 4, timezone: "UTC+1", weather: "☀️ +24°C", sights: ["Башня Белен", "Замок Святого Георгия", "Район Алфама"] },
  { city: "Порту", country: "Португалия", code: "OPO", hotelCount: 3, timezone: "UTC+1", weather: "⛅ +21°C", sights: ["Мост Луиша I", "Квартал Рибейра", "Книжный магазин Lello"] },
  { city: "Брюссель", country: "Бельгия", code: "BRU", hotelCount: 4, timezone: "UTC+2", weather: "☁️ +18°C", sights: ["Гран-Плас", "Атомиум", "Писающий мальчик"] },
  { city: "Прага", country: "Чехия", code: "PRG", hotelCount: 5, timezone: "UTC+2", weather: "☀️ +22°C", sights: ["Карлов мост", "Пражский Град", "Староместская площадь"] },
  { city: "Будапешт", country: "Венгрия", code: "BUD", hotelCount: 4, timezone: "UTC+2", weather: "☀️ +25°C", sights: ["Здание парламента", "Рыбацкий бастион", "Купальни Сеченьи"] },
  { city: "Варшава", country: "Польша", code: "WAW", hotelCount: 4, timezone: "UTC+2", weather: "⛅ +20°C", sights: ["Старый город", "Королевский замок", "Дворец культуры и науки"] },
  { city: "Копенгаген", country: "Дания", code: "CPH", hotelCount: 4, timezone: "UTC+2", weather: "☁️ +17°C", sights: ["Статуя Русалочки", "Набережная Нюхавн", "Парк Тиволи"] },
  { city: "Стокгольм", country: "Швеция", code: "ARN", hotelCount: 4, timezone: "UTC+2", weather: "⛅ +19°C", sights: ["Музей Ваза", "Старый город (Гамла Стан)", "Королевский дворец"] },
  { city: "Хельсинки", country: "Финляндия", code: "HEL", hotelCount: 3, timezone: "UTC+3", weather: "⛅ +18°C", sights: ["Кафедральный собор", "Крепость Суоменлинна", "Церковь в скале Темппелиаукио"] },
  { city: "Осло", country: "Норвегия", code: "OSL", hotelCount: 3, timezone: "UTC+2", weather: "🌧️ +16°C", sights: ["Музей кораблей викингов", "Парк скульптур Вигеланда", "Оперный театр Осло"] },
  { city: "Кейптаун", country: "ЮАР", code: "CPT", hotelCount: 4, timezone: "UTC+2", weather: "☀️ +19°C", sights: ["Столовая гора", "Мыс Доброй Надежды", "Набережная Виктории и Альфреда"] },
  { city: "Касабланка", country: "Марокко", code: "CMN", hotelCount: 3, timezone: "UTC+1", weather: "☀️ +26°C", sights: ["Мечеть Хасана II", "Квартал Хабус", "Набережная Корниш"] },
  { city: "Найроби", country: "Кения", code: "NBO", hotelCount: 3, timezone: "UTC+3", weather: "⛅ +22°C", sights: ["Национальный парк Найроби", "Центр жирафов", "Музей Карен Бликсен"] },
  { city: "Ванкувер", country: "Канада", code: "YVR", hotelCount: 4, timezone: "UTC-7", weather: "⛅ +20°C", sights: ["Стэнли-парк", "Капилано подвесной мост", "Гастаун"] },
  { city: "Мехико", country: "Мексика", code: "MEX", hotelCount: 5, timezone: "UTC-6", weather: "⛅ +24°C", sights: ["Площадь Сокало", "Ангел независимости", "Музей Фриды Кало"] },
  { city: "Канкун", country: "Мексика", code: "CUN", hotelCount: 4, timezone: "UTC-5", weather: "☀️ +31°C", sights: ["Зона Хотельера", "Остров Женщин", "Руины Эль-Рей"] },
  { city: "Богота", country: "Колумбия", code: "BOG", hotelCount: 3, timezone: "UTC-5", weather: "☁️ +15°C", sights: ["Музей золота", "Гора Монсеррат", "Квартал Ла Канделярия"] },
  { city: "Лима", country: "Перу", code: "LIM", hotelCount: 3, timezone: "UTC-5", weather: "🌫️ +18°C", sights: ["Район Мирафлорес", "Пласа Майор", "Музей Ларко"] },
  { city: "Сантьяго", country: "Чили", code: "SCL", hotelCount: 4, timezone: "UTC-4", weather: "☀️ +16°C", sights: ["Холм Сан-Кристобаль", "Пласа-де-Армас", "Небоскрёб Гран Торре Сантьяго"] },
  { city: "Буэнос-Айрес", country: "Аргентина", code: "EZE", hotelCount: 5, timezone: "UTC-3", weather: "⛅ +17°C", sights: ["Район Ла-Бока", "Театр Колон", "Кладбище Реколета"] },
  { city: "Окленд", country: "Новая Зеландия", code: "AKL", hotelCount: 4, timezone: "UTC+12", weather: "🌧️ +15°C", sights: ["Башня Скай-Тауэр", "Гавань Уайitemата", "Остров Рангитото"] },
  { city: "Хонолулу", country: "США (Гавайи)", code: "HNL", hotelCount: 3, timezone: "UTC-10", weather: "☀️ +29°C", sights: ["Пляж Вайкики", "Перл-Харбор", "Кратер Дайамонд-Хед"] },
  { city: "Манила-Кларк", country: "Филиппины", code: "CRK", hotelCount: 3, timezone: "UTC+8", weather: "🌧️ +33°C", sights: ["Аквапарк Aqua Planet", "Динозавры Айленд", "Вулкан Пинатубо"] }
];

const HOTEL_NAMES_POOL = [
  { name: "Grand Royal Luxury Hotel", stars: "⭐⭐⭐⭐⭐", price: 14500, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" },
  { name: "Radisson Blu Premium Resort", stars: "⭐⭐⭐⭐⭐", price: 11200, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80" },
  { name: "Plaza Central Suites", stars: "⭐⭐⭐⭐", price: 7800, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80" },
  { name: "Sea Breeze Comfort Inn", stars: "⭐⭐⭐⭐", price: 6200, img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80" },
  { name: "Metropolitan Boutique Hotel", stars: "⭐⭐⭐⭐⭐", price: 13400, img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80" },
  { name: "Hilton Garden Premium", stars: "⭐⭐⭐⭐", price: 8900, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80" },
  { name: "Skyline View Apartments", stars: "⭐⭐⭐⭐", price: 7100, img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80" },
  { name: "Continental Plaza Stay", stars: "⭐⭐⭐⭐⭐", price: 15600, img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80" },
  { name: "Urban Eco Green Hub", stars: "⭐⭐⭐", price: 4500, img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=600&q=80" },
  { name: "Astoria Historic Palace", stars: "⭐⭐⭐⭐⭐", price: 12800, img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80" }
];

const HOTEL_DISTRICTS_POOL = [
  "Исторический центр города", "Прибрежная курортная зона", "Деловой квартал (Сити)", 
  "Живописная набережная", "Тихий спальный район", "Культурно-туристический центр"
];

const FOOD_MENU_OPTIONS = {
  mains: [
    { id: "m1", name: "Куриное филе-гриль под соусом", type: "Мясо/Птица", img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=300&q=80" },
    { id: "m2", name: "Стейк из запечённого лосося", type: "Рыба", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=300&q=80" },
    { id: "m3", name: "Нежные митболы из говядины", type: "Мясо", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=300&q=80" },
    { id: "m4", name: "Средиземноморские овощи-гриль", type: "Вегетарианское", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80" }
  ],
  sides: [
    { id: "s1", name: "Пряный рассыпчатый рис", img: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80" },
    { id: "s2", name: "Золотистые картофельные дольки", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=300&q=80" }
  ],
  drinks: [
    { id: "d1", name: "Свежесваренный Капучино", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=300&q=80" },
    { id: "d2", name: "Освежающий апельсиновый сок", img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80" }
  ],
  desserts: [
    { id: "de1", name: "Французский круассан", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80" },
    { id: "de2", name: "Шоколадный мини-чизкейк", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&q=80" }
  ]
};

const AIRLINES = ["SkyGen Airlines", "Oceanic Air", "Global Jet", "AeroNomad"];
