import { Product } from './product.model';
import { Category } from './category.model';

export const categories: Category[] = [
  {
    id: 1,
    name: "Смартфоны",
  },
  {
    id: 2,
    name: "Ноутбуки",
  },
  {
    id: 3,
    name: "Планшеты",
  },
  {
    id: 4,
    name: "Наушники",
  },
];

export const products: Product[] = [
  {
    // Смартфоны
    id: 1,
    name: "Смартфон Apple iPhone 17 Pro 256Gb оранжевый",
    price: 833556,
    description: "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000",

    likes: 0,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Смартфон Apple iPhone 15 128Gb черный",
    price: 402083,
    description: "Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-large"],
    link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",

    likes: 0,
    categoryId: 1,
  },
  {
    id: 3,
    name: "Смартфон Apple iPhone 16 128Gb фиолетовый",
    price: 454119 ,
    description: "iPhone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h9d/h4f/87295472074782.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h90/hf1/87295472107550.png?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/apple-iphone-16-128gb-fioletovyi-123727182/?c=750000000",

    likes: 0,
    categoryId: 1,
  },
  {
    id: 4,
    name: "Смартфон Samsung Galaxy S25 5G 12 ГБ/256 ГБ синий",
    price: 479980,
    description: "Samsung Galaxy S25 5G — флагманский смартфон с передовыми технологиями, мощным процессором Snapdragon 8 Elite и потрясающей камерой 50 Мп.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p39/p03/20107708.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p95/p00/20107711.png?format=gallery-large"],
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133432433/?c=750000000",

    likes: 0,
    categoryId: 1,
  },
  {
    id: 5,
    name: "Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ серый",
    price: 557943,
    description: "Samsung Galaxy S25 Ultra 5G (12/256 ГБ, серый) — флагман 2025 года в титановом корпусе, оснащенный 6,9-дюймовым дисплеем Dynamic AMOLED 2X (120 Гц) и мощным процессором Snapdragon 8 Elite. Основная камера 200 Мп и ИИ-функции обеспечивают профессиональную съемку. Смартфон работает на Android 15, имеет батарею 5000 мАч и защиту IP68.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-large",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/pd8/pc8/20118459.png?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/p99/pcb/20118463.png?format=gallery-large"],
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/?c=750000000",

    likes: 0,
    categoryId: 1,
  },

  // Ноутбуки
  {
    id: 6,
    name: "Ноутбук Apple MacBook Air 13 2020 13.3\" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A",
    price: 439855,
    description: "Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. ",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000",

    likes: 0,
    categoryId: 2,
  },
  {
    id: 7,
    name: "Ноутбук Lenovo IdeaPad 3 15.6\" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK",
    price: 166990,
    description: "Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы распределения потоков воздуха и интеллектуальной вентиляции, предотвращающей смешивание потоков холодного и теплого воздуха. Для управления охлаждением служит система Q Control, которая предлагает три режима вращения вентиляторов в зависимости от требуемой производительности.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/64231934689310.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000",

    likes: 0,
    categoryId: 2,
  },
  {
    id: 8,
    name: "Ноутбук ThundeRobot 911S Core D 15.6\" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F",
    price: 496990,
    description: "Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц. Матовое покрытие экрана уменьшает количество бликов, обеспечивая комфортные условия для глаз.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-large", "https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000",

    likes: 0,
    categoryId: 2,
  },
  {
    id: 9,
    name: "Ноутбук Oyan Lite X14 14.1\" / 8 Гб / SSD 512 Гб / Win 11 Home / R1526",
    price: 134500,
    description: "Внимание: ноутбук не для игр или работы с ресурсоемкими приложениями. Встроенная видеокарта Intel UHD Graphics 600 справляется только с базовыми задачами, такими как просмотр видео и работа в офисных программах.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pe1/p49/48619239.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p75/p47/48619240.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=750000000",

    likes: 0,
    categoryId: 2,
  },
  {
    id: 10,
    name: "Ноутбук ASUS Vivobook 16X 16\" / 16 Гб / SSD 512 Гб / Win 11 / 90NB1071-M00AT0",
    price: 397996,
    description: "Представляем ASUS Vivobook 16X — мощный и стильный ноутбук, который идеально подходит для работы и развлечений. С 16 Гб оперативной памяти и  SSD на 512 Гб вы получите быструю загрузку приложений и плавную работу даже с ресурсоёмкими задачами.✨",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p67/p0a/7998804.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/p67/p0a/7998804.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pa0/p0a/7998806.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pf4/p0a/7998809.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/asus-vivobook-16x-16-16-gb-ssd-512-gb-win-11-90nb1071-m00at0-129951243/?c=750000000",

    likes: 0,
    categoryId: 2,
  },

  // Планшеты
  {
    id: 11,
    name: "Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб синий",
    price: 199883,
    description: "Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот планшет с 11-дюймовым экраном и мощным процессором Apple A16 обеспечит вам высокую производительность и яркие впечатления от использования.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pb7/p12/37019481.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p7e/p12/37019483.png?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000",

    likes: 0,
    categoryId: 3,
  },
  {
    id: 12,
    name: "Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб серый",
    price: 129990,
    description: "Xiaomi Redmi Pad 2 4G — универсальный планшет с ярким 11-дюймовым экраном и поддержкой мобильной связи, идеально подходящий для работы, учебы и развлечений.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pbd/p9b/46318883.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pa0/p9b/46318884.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000",

    likes: 0,
    categoryId: 3,
  },
  {
    id: 13,
    name: "Планшет OSCAL Pad 70 10.1 дюйм 4 Гб/128 Гб серый",
    price: 59990,
    description: "OSCAL Pad 70 — это мощный и стильный планшет с диагональю 10.1 дюйма, который идеально подходит для работы и развлечений. С 4 Гб оперативной памяти и 128 Гб встроенной памяти вы сможете хранить все необходимые приложения и файлы.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h25/hc4/86587164426270.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h25/hc4/86587164426270.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/ha2/h53/86587164491806.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h90/hfc/86587164819486.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/oscal-pad-70-10-1-djuim-4-gb-128-gb-seryi-113731780/?c=750000000",

    likes: 0,
    categoryId: 3,
  },
  {
    id: 14,
    name: "Планшет Huawei MatePad SE AGS6-W09 11 дюйм 8 Гб/128 Гб серый",
    price: 95890,
    description: "Представляем Huawei MatePad SE — ваш идеальный спутник для работы и развлечений! Этот планшет с диагональю 11 дюймов сочетает в себе высокую производительность и стильный дизайн, что делает его отличным выбором для повседневного использования.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hab/hd7/86806714908702.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/hab/hd7/86806714908702.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h6d/hd2/86806715170846.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/hb7/h51/86806714974238.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-8-gb-128-gb-seryi-122142480/?c=750000000",

    likes: 0,
    categoryId: 3,
  },
  {
    id: 15,
    name: "Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый",
    price: 179997,
    description: "Планшет Samsung Galaxy Tab A9+ 5G — мощное устройство для работы и развлечений, предлагающее высокую производительность и широкие возможности подключения.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h80/hc4/84434711642142.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/hbe/hef/84434712035358.png?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000",

    likes: 0,
    categoryId: 3,
  },

  // Наушники
  {
    id: 16,
    name: "Наушники Apple AirPods 4 белый",
    price: 60387,
    description: "﻿﻿﻿Наушники AirPods 4 мгновенно подключаются ко всем устройствам, подключенным к твоему Apple ID. Они легко поддерживают связь с двумя устройствами: если ты воспроизводишь музыку на Mac, то сможешь быстро ответить на звонок на iPhone, не переключаясь между устройствами.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000",

    likes: 0,
    categoryId: 4,
  },
  {
    id: 17,
    name: "Наушники HYDRA Home Minor черный",
    price: 4990,
    description: "Наушники HYDRA Minor — это ваш идеальный спутник для наслаждения музыкой и общения. С беспроводным подключением и долговечным зарядным кейсом они обеспечивают до 20 часов работы, что делает их идеальными для активного образа жизни.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pc3/p1f/46750549.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/pc3/p1f/46750549.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p2d/p23/46750539.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p03/p1d/46750553.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/naushniki-hydra-home-minor-chernyi-120724113/?c=750000000",

    likes: 0,
    categoryId: 4,
  },
  {
    id: 18,
    name: "Наушники Razer Blackshark V2 X черный",
    price: 15500,
    description: "Сразитесь со врагами в легкой киберспортивной гарнитуре, раскрывающую свои преимущества под давлением. Представляем Razer BlackShark V2 X - тройная угроза за счет восхитительного звучания, превосходной чистоты микрофона и звукоизоляции высокого качества, подтвержденными про-игроками.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h0c/heb/64136384020510.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h8b/h67/64136274280478.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-chernyi-100934284/?c=750000000",

    likes: 0,
    categoryId: 4,
  },
  {
    id: 19,
    name: "Наушники Marshall Major IV черный",
    price: 18499,
    description: "Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров. В основе данной модели используются динамические излучатели с диаметром мембраны 40 мм, что в совокупности с широким диапазоном частот и высокой чувствительностью может обеспечить качественное и насыщенное звучание.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pb3/pc4/17680140.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000",

    likes: 0,
    categoryId: 4,
  },
  {
    id: 20,
    name: "Наушники Apple USB-C MYQY3ZM/A белый",
    price: 10460,
    description: "Наушники Apple USB-C MYQY3ZM/A — это удобное и практичное решение для тех, кто предпочитает классический дизайн и надёжное качество звука.",
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pf5/pc8/41468729.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p7d/pcb/41468731.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/naushniki-apple-usb-c-myqy3zm-a-belyi-139440255/?c=750000000",

    likes: 0,
    categoryId: 4,
  },
]
