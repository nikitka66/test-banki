import { useState, useEffect, useRef } from "react";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  ru: {
    flag: "🇷🇺", langName: "RU",
    slogan1: "Хороший банк — расскажи всем.",
    slogan2: "Плохой банк — расскажи",
    sloganEm: "особенно.",
    heroSub: "Реальные отзывы клиентов · Банки отвечают публично · Рейтинг обновляется в реальном времени",
    leaveReview: "+ Оставить отзыв",
    ratingBtn: "Народный рейтинг ↓",
    ratingTitle: "Народный рейтинг банков",
    ratingSubtitle: "по оценке клиентов",
    colNum: "№", colBank: "Банк", colRating: "Рейтинг", colReviews: "Отзывов", colResolved: "Решено",
    showAll: (n) => `Показать все ${n} банков ∨`,
    showLess: "Скрыть ∧",
    latestReviews: "Последние отзывы",
    latestSub: "обновляется в реальном времени",
    navHome: "Главная", navReviews: "Отзывы",
    disclaimer: "Отзывы — личное мнение клиентов",
    footerText: "Все отзывы являются личным мнением клиентов и не являются финансовым советом.",
    footerSub: "BankReviews.ph не несёт ответственности за содержание отзывов · © 2025",
    backAll: "← Все отзывы",
    tabAbout: "О банке", tabReviews: "Отзывы",
    peopleRating: "Народный рейтинг",
    place: "место", outOf: "из", banks: "банков",
    avgScore: "средняя оценка", resolved: "решено проблем", reviewsWord: "отзывов", answers: "ответа",
    services: "Услуги", reviewsFilter: "Отзывы", scoreFilter: "Оценка",
    allServices: "Все", allReviews: "Все отзывы", verified: "Проверенные",
    anyScore: "Любая оценка", negative: "Негативный", positive: "Положительный",
    noReviews: "Нет отзывов по выбранным фильтрам",
    readMore: "читать полностью",
    reviewChecked: "Зачтено", reviewNotChecked: "Не проверено",
    reviewVerified: "Отзыв проверен", bankReplied: "Ответ банка",
    similarProblem: "Похожая проблема?",
    similarSub: "Оставьте отзыв, и представитель банка поможет её решить",
    writeReview: "Написать отзыв",
    otherReviews: "Другие отзывы",
    commentsTitle: "Комментарии",
    commentsNotice: "Комментарии могут оставлять только зарегистрированные пользователи.",
    login: "Войдите", or: "или", register: "зарегистрируйтесь",
    showMore: (n) => `Показать ещё ${n} ${n===1?"комментарий":"комментария"}`,
    hideComments: "Скрыть ∧", showAllComments: "Показать все ∨",
    addComment: "Добавить комментарий…", send: "Отправить",
    official: "Представитель банка",
    ratingPlace: (n, total) => `#${n} из ${total} банков`,
    googleMaps: "Открыть на Google Maps",
    recentReviews: "Последние отзывы",
    allReviewsBtn: "Все отзывы о банке →",
    addReview: "Добавление отзыва",
    stepReview: "Отзыв", stepScore: "Оценка", stepContacts: "Контакты",
    bankLabel: "Банк", bankPlaceholder: "— выберите банк —",
    clientType: "Тип клиента", individual: "Физическое лицо", business: "Бизнес",
    province: "Province / Region", provincePlaceholder: "— выберите province —",
    channel: "Канал взаимодействия с банком", channelPlaceholder: "Выбрать",
    service: "Услуга",
    titleLabel: "Заголовок", titlePlaceholder: "Кратко опишите ситуацию",
    bodyLabel: "Текст отзыва", bodyPlaceholder: "Опишите ситуацию подробно: что произошло, когда, что ответил банк, что предпринимали. Укажите номер обращения если есть. Минимум 300 символов.",
    bodyMin: (n) => `Минимум ${n} симв.`,
    docsLabel: "Документы", docsNote: "(до 3 файлов, каждый до 5 МБ)",
    docsFormats: "Принимаются: изображения, PDF, текстовые документы",
    attachFile: "+ Прикрепить файл",
    yourScore: "Ваша оценка", scoreLabel: "Оценка", noScore: "Без оценки",
    transparent: "Прозрачные условия", polite: "Вежливые сотрудники",
    support: "Доступность и поддержка", app: "Удобство приложения, сайта",
    contactsTitle: "Контактные данные",
    contactsNote: "Данные нужны только для верификации отзыва. Они не будут опубликованы публично.",
    emailLabel: "Email", phoneLabel: "Телефон", optional: "(необязательно)",
    summaryTitle: "Ваш отзыв",
    publishNote: "Нажимая «Опубликовать», вы подтверждаете, что отзыв основан на личном опыте и соответствует правилам сайта.",
    publish: "Опубликовать отзыв", continue: "Продолжить",
    doneTitle: "Отзыв отправлен",
    doneText: (name) => `Ваш отзыв о ${name} принят и будет опубликован после проверки. Банк получит уведомление и должен ответить публично.`,
    backHome: "На главную",
    breadHome: "Главная", breadAdd: "Добавление отзыва",
    digitalBank: "Цифровой банк", universalBank: "Универсальный банк", govBank: "Государственный банк",
    since: "на рынке с", year: "года", license: "лицензия",
    position: "Позиция в Народном рейтинге", address: "Адрес", branches: "Отделения",
    phones: "Телефоны", website: "Официальный сайт", social: "Социальные сети", appsLabel: "Приложения",
    forRegions: "— для звонков из регионов",
    phoneCard: "Телефон", qaCard: "Вопрос-Ответ", reviewsCard: "Отзывов:",
    noScoreLabel: "—",
    channels: ["Сайт","Онлайн-чат","Контактный центр","Интернет-банк","Мобильный банк","Офис обслуживания / отделение","Банкомат","Представитель","Другое"],
    services_list: ["Кредитная карта","Дебетовая карта","Кошелек","Кредит","Другое"],
    services_filter: ["Все","Кредитная карта","Дебетовая карта","Кошелек","Кредит","Другое"],
  },
  en: {
    flag: "🇺🇸", langName: "EN",
    slogan1: "Good bank — tell everyone.",
    slogan2: "Bad bank — tell",
    sloganEm: "everyone especially.",
    heroSub: "Real customer reviews · Banks respond publicly · Rating updated in real time",
    leaveReview: "+ Leave a Review",
    ratingBtn: "People's Rating ↓",
    ratingTitle: "People's Bank Rating",
    ratingSubtitle: "based on customer reviews",
    colNum: "#", colBank: "Bank", colRating: "Rating", colReviews: "Reviews", colResolved: "Resolved",
    showAll: (n) => `Show all ${n} banks ∨`,
    showLess: "Hide ∧",
    latestReviews: "Latest Reviews",
    latestSub: "updated in real time",
    navHome: "Home", navReviews: "Reviews",
    disclaimer: "Reviews are personal opinions of customers",
    footerText: "All reviews are personal opinions of customers and do not constitute financial advice.",
    footerSub: "BankReviews.ph is not responsible for review content · © 2025",
    backAll: "← All Reviews",
    tabAbout: "About Bank", tabReviews: "Reviews",
    peopleRating: "People's Rating",
    place: "place", outOf: "of", banks: "banks",
    avgScore: "average score", resolved: "problems resolved", reviewsWord: "reviews", answers: "responses",
    services: "Services", reviewsFilter: "Reviews", scoreFilter: "Score",
    allServices: "All", allReviews: "All Reviews", verified: "Verified",
    anyScore: "Any Score", negative: "Negative", positive: "Positive",
    noReviews: "No reviews matching selected filters",
    readMore: "read more",
    reviewChecked: "Verified", reviewNotChecked: "Unverified",
    reviewVerified: "Review Verified", bankReplied: "Bank Replied",
    similarProblem: "Similar Problem?",
    similarSub: "Leave a review and a bank representative will help resolve it",
    writeReview: "Write a Review",
    otherReviews: "Other Reviews",
    commentsTitle: "Comments",
    commentsNotice: "Only registered users can leave comments.",
    login: "Sign in", or: "or", register: "register",
    showMore: (n) => `Show ${n} more comment${n>1?"s":""}`,
    hideComments: "Hide ∧", showAllComments: "Show all ∨",
    addComment: "Add a comment…", send: "Send",
    official: "Bank Representative",
    ratingPlace: (n, total) => `#${n} of ${total} banks`,
    googleMaps: "Open on Google Maps",
    recentReviews: "Recent Reviews",
    allReviewsBtn: "All bank reviews →",
    addReview: "Write a Review",
    stepReview: "Review", stepScore: "Score", stepContacts: "Contacts",
    bankLabel: "Bank", bankPlaceholder: "— select a bank —",
    clientType: "Client Type", individual: "Individual", business: "Business",
    province: "Province / Region", provincePlaceholder: "— select province —",
    channel: "Interaction Channel", channelPlaceholder: "Select",
    service: "Service",
    titleLabel: "Title", titlePlaceholder: "Briefly describe the situation",
    bodyLabel: "Review Text", bodyPlaceholder: "Describe the situation in detail: what happened, when, what the bank said, what you tried. Include reference numbers if available. Minimum 300 characters.",
    bodyMin: (n) => `${n} more chars needed`,
    docsLabel: "Documents", docsNote: "(up to 3 files, each up to 5 MB)",
    docsFormats: "Accepted: images, PDF, text documents",
    attachFile: "+ Attach File",
    yourScore: "Your Score", scoreLabel: "Score", noScore: "No Score",
    transparent: "Transparent Terms", polite: "Polite Staff",
    support: "Accessibility & Support", app: "App & Website Convenience",
    contactsTitle: "Contact Details",
    contactsNote: "Details are used only for review verification and will not be published publicly.",
    emailLabel: "Email", phoneLabel: "Phone", optional: "(optional)",
    summaryTitle: "Your Review",
    publishNote: "By clicking Publish, you confirm the review is based on personal experience and complies with site rules.",
    publish: "Publish Review", continue: "Continue",
    doneTitle: "Review Submitted",
    doneText: (name) => `Your review of ${name} has been received and will be published after verification. The bank will be notified and is expected to respond publicly.`,
    backHome: "Back to Home",
    breadHome: "Home", breadAdd: "Write a Review",
    digitalBank: "Digital Bank", universalBank: "Universal Bank", govBank: "Government Bank",
    since: "on market since", year: "", license: "license",
    position: "Position in People's Rating", address: "Address", branches: "Branches",
    phones: "Phone Numbers", website: "Official Website", social: "Social Media", appsLabel: "Apps",
    forRegions: "— for regional calls",
    phoneCard: "Phone", qaCard: "Q&A", reviewsCard: "Reviews:",
    noScoreLabel: "—",
    channels: ["Website","Online Chat","Contact Center","Internet Banking","Mobile Banking","Branch Office","ATM","Representative","Other"],
    services_list: ["Credit Card","Debit Card","E-Wallet","Loan","Other"],
    services_filter: ["All","Credit Card","Debit Card","E-Wallet","Loan","Other"],
  },
  tl: {
    flag: "🇵🇭", langName: "TL",
    slogan1: "Magandang bangko — sabihin sa lahat.",
    slogan2: "Masamang bangko — sabihin",
    sloganEm: "lalo na.",
    heroSub: "Tunay na mga review ng mga customer · Ang mga bangko ay tumutugon nang publiko · Na-update ang rating sa real time",
    leaveReview: "+ Mag-iwan ng Review",
    ratingBtn: "Rating ng Bayan ↓",
    ratingTitle: "Rating ng Bayan ng mga Bangko",
    ratingSubtitle: "batay sa mga review ng customer",
    colNum: "Blg.", colBank: "Bangko", colRating: "Rating", colReviews: "Mga Review", colResolved: "Nalutas",
    showAll: (n) => `Ipakita lahat ng ${n} bangko ∨`,
    showLess: "Itago ∧",
    latestReviews: "Pinakabagong mga Review",
    latestSub: "ina-update sa real time",
    navHome: "Home", navReviews: "Mga Review",
    disclaimer: "Ang mga review ay personal na opinyon ng mga customer",
    footerText: "Ang lahat ng review ay personal na opinyon ng mga customer at hindi financial advice.",
    footerSub: "Hindi responsable ang BankReviews.ph sa nilalaman ng mga review · © 2025",
    backAll: "← Lahat ng Review",
    tabAbout: "Tungkol sa Bangko", tabReviews: "Mga Review",
    peopleRating: "Rating ng Bayan",
    place: "lugar", outOf: "sa", banks: "bangko",
    avgScore: "average na marka", resolved: "nalutas na problema", reviewsWord: "mga review", answers: "mga tugon",
    services: "Serbisyo", reviewsFilter: "Mga Review", scoreFilter: "Marka",
    allServices: "Lahat", allReviews: "Lahat ng Review", verified: "Na-verify",
    anyScore: "Anumang Marka", negative: "Negatibo", positive: "Positibo",
    noReviews: "Walang review na tumutugma sa mga napiling filter",
    readMore: "basahin pa",
    reviewChecked: "Na-verify", reviewNotChecked: "Hindi na-verify",
    reviewVerified: "Na-verify ang Review", bankReplied: "Tumugon ang Bangko",
    similarProblem: "Katulad na Problema?",
    similarSub: "Mag-iwan ng review at ang kinatawan ng bangko ay tutulong na resolbahin ito",
    writeReview: "Sumulat ng Review",
    otherReviews: "Iba pang mga Review",
    commentsTitle: "Mga Komento",
    commentsNotice: "Ang mga rehistradong gumagamit lamang ang maaaring mag-iwan ng komento.",
    login: "Mag-sign in", or: "o", register: "mag-rehistro",
    showMore: (n) => `Ipakita pa ang ${n} komento`,
    hideComments: "Itago ∧", showAllComments: "Ipakita lahat ∨",
    addComment: "Magdagdag ng komento…", send: "Ipadala",
    official: "Kinatawan ng Bangko",
    ratingPlace: (n, total) => `#${n} sa ${total} bangko`,
    googleMaps: "Buksan sa Google Maps",
    recentReviews: "Kamakailang mga Review",
    allReviewsBtn: "Lahat ng review ng bangko →",
    addReview: "Mag-iwan ng Review",
    stepReview: "Review", stepScore: "Marka", stepContacts: "Mga Kontak",
    bankLabel: "Bangko", bankPlaceholder: "— pumili ng bangko —",
    clientType: "Uri ng Kliyente", individual: "Indibidwal", business: "Negosyo",
    province: "Probinsya / Rehiyon", provincePlaceholder: "— pumili ng probinsya —",
    channel: "Channel ng Pakikipag-ugnayan", channelPlaceholder: "Pumili",
    service: "Serbisyo",
    titleLabel: "Pamagat", titlePlaceholder: "Maikling ilarawan ang sitwasyon",
    bodyLabel: "Teksto ng Review", bodyPlaceholder: "Ilarawan ang sitwasyon nang detalyado: ano ang nangyari, kailan, ano ang sinabi ng bangko, ano ang ginawa mo. Isama ang mga reference number kung mayroon. Minimum 300 karakter.",
    bodyMin: (n) => `Kailangan pa ng ${n} karakter`,
    docsLabel: "Mga Dokumento", docsNote: "(hanggang 3 file, bawat isa hanggang 5 MB)",
    docsFormats: "Tinatanggap: mga larawan, PDF, mga text document",
    attachFile: "+ Mag-attach ng File",
    yourScore: "Ang Iyong Marka", scoreLabel: "Marka", noScore: "Walang Marka",
    transparent: "Malinaw na Kondisyon", polite: "Magalang na Kawani",
    support: "Accessibility at Suporta", app: "Kaginhawahan ng App at Website",
    contactsTitle: "Mga Detalye ng Kontak",
    contactsNote: "Ang mga detalye ay ginagamit lamang para sa pag-verify ng review at hindi ilalathala nang publiko.",
    emailLabel: "Email", phoneLabel: "Telepono", optional: "(opsyonal)",
    summaryTitle: "Ang Iyong Review",
    publishNote: "Sa pag-click ng I-publish, kinukumpirma mo na ang review ay batay sa personal na karanasan at sumusunod sa mga panuntunan ng site.",
    publish: "I-publish ang Review", continue: "Magpatuloy",
    doneTitle: "Naisumite ang Review",
    doneText: (name) => `Natanggap ang iyong review tungkol sa ${name} at ilalathala pagkatapos ng pag-verify. Maabisuhan ang bangko at inaasahang tutugon nang publiko.`,
    backHome: "Bumalik sa Home",
    breadHome: "Home", breadAdd: "Mag-iwan ng Review",
    digitalBank: "Digital na Bangko", universalBank: "Universal na Bangko", govBank: "Bangko ng Pamahalaan",
    since: "sa merkado mula", year: "", license: "lisensya",
    position: "Posisyon sa Rating ng Bayan", address: "Address", branches: "Mga Sangay",
    phones: "Mga Telepono", website: "Opisyal na Website", social: "Social Media", appsLabel: "Mga App",
    forRegions: "— para sa mga tawag mula sa rehiyon",
    phoneCard: "Telepono", qaCard: "Tanong-Sagot", reviewsCard: "Mga Review:",
    noScoreLabel: "—",
    channels: ["Website","Online Chat","Contact Center","Internet Banking","Mobile Banking","Opisina / Sangay","ATM","Kinatawan","Iba pa"],
    services_list: ["Credit Card","Debit Card","E-Wallet","Loan","Iba pa"],
    services_filter: ["Lahat","Credit Card","Debit Card","E-Wallet","Loan","Iba pa"],
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PH_PROVINCES = ["Metro Manila","Cebu","Davao del Sur","Bulacan","Cavite","Laguna","Rizal","Pampanga","Batangas","Iloilo","Negros Occidental","Pangasinan","Quezon","Leyte","Zamboanga del Sur","Camarines Sur","Misamis Oriental","Benguet","Isabela","Bohol","Albay","Aklan","Antique","Aurora","Bataan","Batanes","Biliran","Cagayan","Capiz","Catanduanes","Cotabato","Davao del Norte","Davao Occidental","Eastern Samar","Guimaras","Ifugao","Ilocos Norte","Ilocos Sur","Kalinga","La Union","Lanao del Norte","Maguindanao","Marinduque","Masbate","Mountain Province","Negros Oriental","Northern Samar","Nueva Ecija","Nueva Vizcaya","Occidental Mindoro","Oriental Mindoro","Palawan","Romblon","Samar","Sarangani","Siquijor","Sorsogon","South Cotabato","Southern Leyte","Sultan Kudarat","Sulu","Surigao del Norte","Surigao del Sur","Tawi-Tawi","Zambales","Zamboanga del Norte","Zamboanga Sibugay"];

const TOP3_BANKS = [
  { id:3,  name:"Maya Bank",                      type:"Digital",   rating:4.8, reviews:654,  resolved:92, color:"#047857", responseRate:97, avgDays:0.8, since:2021, license:"BSP-DB-001", address:"6/F Uptown Place Tower 1, 1 East 11th Drive, BGC, Taguig", phone:"(02) 7795-6292", phone2:null, website:"www.maya.ph", facebook:"facebook.com/MayaPhilippines", googleMaps:"https://maps.google.com/?q=Maya+Bank+BGC" },
  { id:2,  name:"Bank of the Philippine Islands",  type:"Universal", rating:4.4, reviews:987,  resolved:65, color:"#B91C1C", responseRate:74, avgDays:4.3, since:1851, license:"BSP-QB-002", address:"Ayala Ave cor Paseo de Roxas, Makati City",               phone:"(02) 8891-0000", phone2:"1-800-188-8-891", website:"www.bpi.com.ph", facebook:"facebook.com/BPIPhilippines", googleMaps:"https://maps.google.com/?q=BPI+Makati" },
  { id:1,  name:"BDO Unibank",                    type:"Universal", rating:4.1, reviews:1243, resolved:78, color:"#003087", responseRate:91, avgDays:2.1, since:1968, license:"BSP-QB-001", address:"BDO Corporate Center, 7899 Makati Ave, Makati City",       phone:"(02) 8631-8000", phone2:"1-800-10-631-8000", website:"www.bdo.com.ph", facebook:"facebook.com/BDOUnibank", googleMaps:"https://maps.google.com/?q=BDO+Unibank+Makati" },
];

// Placeholder banks for ranking (not clickable)
const PLACEHOLDER_BANKS = [
  { id:4,  name:"GoTyme Bank",                    rating:4.6, reviews:321,  resolved:88, color:"#C2410C" },
  { id:5,  name:"Metrobank",                      rating:3.5, reviews:876,  resolved:54, color:"#1E3A8A" },
  { id:6,  name:"UnionBank",                      rating:3.9, reviews:543,  resolved:59, color:"#9A3412" },
  { id:7,  name:"Security Bank",                  rating:4.0, reviews:412,  resolved:70, color:"#065F46" },
  { id:8,  name:"CIMB Bank Philippines",           rating:4.3, reviews:298,  resolved:85, color:"#9D174D" },
  { id:9,  name:"PNB",                            rating:3.7, reviews:567,  resolved:63, color:"#1D4ED8" },
  { id:10, name:"Tonik Digital Bank",             rating:4.2, reviews:234,  resolved:80, color:"#6D28D9" },
  { id:11, name:"Landbank of the Philippines",    rating:3.8, reviews:445,  resolved:60, color:"#166534" },
  { id:12, name:"DBP",                            rating:3.6, reviews:187,  resolved:55, color:"#0F766E" },
];

const ALL_BANKS_RANKED = [...TOP3_BANKS, ...PLACEHOLDER_BANKS];

const REVIEWS_DATA = {
  ru: [
    { id:1, bankId:3, user:"techie_sarah_cebu",   date:"15.03.2026 09:11", service:"Кошелек",         rating:5, verified:true,  bankReplied:false, title:"Maya — лучший выбор: 4.5% по вкладу и ноль комиссий", body:"Пользуюсь Maya уже 8 месяцев. Процентная ставка по сбережениям выше, чем в любом традиционном банке. Открытие счёта заняло 10 минут прямо с телефона. Поддержка отвечает меньше чем за час. Рекомендую всем, кто устал от очередей.", comments:[{id:201,user:"jane_davao",av:"J",date:"15.03.2026 11:30",text:"Полностью согласна! Maya изменила мой подход к финансам.",bank:false}] },
    { id:2, bankId:2, user:"ana_dela_cruz_qc",     date:"15.03.2026 08:45", service:"Кредитная карта", rating:2, verified:true,  bankReplied:true,  title:"Приложение вылетает при транзакциях — потерял ₱500", body:"Приложение BPI выбрасывает меня из сессии прямо во время транзакций уже 3 недели. Перевод на ₱500 прошёл, но показал ошибку — деньги ушли, получатель ничего не получил. Переустанавливал 4 раза.", comments:[{id:301,user:"mark_davao",av:"M",date:"15.03.2026 12:00",text:"У меня та же ошибка! Мой перевод прошёл, но показал ошибку.",bank:false},{id:302,user:"BPI Digital",av:"B",date:"16.03.2026 09:00",text:"Привет, Ana. Обновите приложение до версии 5.2.1 — это исправляет проблему. Напишите нам о ₱500.",bank:true}] },
    { id:3, bankId:1, user:"carlo_reyes_ph",       date:"14.03.2026 17:30", service:"Дебетовая карта", rating:1, verified:true,  bankReplied:true,  title:"Списание ₱3,200 которого я не делал — 3 недели без ответа", body:"Обнаружил списание с неизвестного магазина 1 марта. Подал спор в тот же день. Три недели спустя — никаких новостей. Звонил 6 раз, каждый оператор говорит «на рассмотрении». Уже отправил жалобу в BSP.", comments:[{id:101,user:"maria_ofw",av:"M",date:"16.03.2026 15:44",text:"То же самое было у меня! Подай жалобу в BSP — у меня разобрались за 2 недели.",bank:false},{id:102,user:"BDO Official",av:"B",date:"18.03.2026 10:02",text:"Привет, Carlo. Возврат ₱3,200 обработан. Номер: BDO-2025-031801.",bank:true}] },
  ],
  en: [
    { id:1, bankId:3, user:"techie_sarah_cebu",   date:"Mar 15, 2026 09:11", service:"E-Wallet",   rating:5, verified:true,  bankReplied:false, title:"Maya is simply the best — 4.5% interest and zero fees", body:"Been using Maya for 8 months. The savings interest rate blows every traditional bank out of the water. Account opening was 10 minutes on my phone. Customer support replies in under an hour. Recommended to my entire family.", comments:[{id:201,user:"jane_davao",av:"J",date:"Mar 15 11:30",text:"Totally agree! Maya changed how I manage money.",bank:false}] },
    { id:2, bankId:2, user:"ana_dela_cruz_qc",     date:"Mar 15, 2026 08:45", service:"Credit Card", rating:2, verified:true,  bankReplied:true,  title:"App logs out mid-transaction — already lost ₱500", body:"The BPI app has been logging me out mid-transaction for 3 weeks. Lost ₱500 in a transfer that showed an error but went through. Reinstalled 4 times. Support just says reinstall.", comments:[{id:301,user:"mark_davao",av:"M",date:"Mar 15 12:00",text:"Same bug! My transfer went through but showed error.",bank:false},{id:302,user:"BPI Digital",av:"B",date:"Mar 16 09:00",text:"Hi Ana, update to v5.2.1 — this fixes the session issue. DM us about the ₱500.",bank:true}] },
    { id:3, bankId:1, user:"carlo_reyes_ph",       date:"Mar 14, 2026 17:30", service:"Debit Card",  rating:1, verified:true,  bankReplied:true,  title:"Charged ₱3,200 I never made — 3 weeks no resolution", body:"Found a charge from an unknown merchant on March 1. Filed a dispute the same day. Three weeks later — still no update. Called 6 times, each agent says it's 'being investigated'. Already filed with BSP.", comments:[{id:101,user:"maria_ofw",av:"M",date:"Mar 16 15:44",text:"Same happened to me! File with BSP — resolved in 2 weeks.",bank:false},{id:102,user:"BDO Official",av:"B",date:"Mar 18 10:02",text:"Hi Carlo, the ₱3,200 reversal has been processed. Reference: BDO-2025-031801.",bank:true}] },
  ],
  tl: [
    { id:1, bankId:3, user:"techie_sarah_cebu",   date:"Mar 15, 2026 09:11", service:"E-Wallet",   rating:5, verified:true,  bankReplied:false, title:"Maya ang pinakamahusay — 4.5% interest at walang bayad", body:"Gumagamit ako ng Maya nang 8 buwan. Ang interest rate sa ipon ay mas mataas kaysa sa anumang tradisyonal na bangko. Ang pagbubukas ng account ay 10 minuto lamang sa telepono. Ang suporta ay sumasagot sa loob ng isang oras.", comments:[{id:201,user:"jane_davao",av:"J",date:"Mar 15 11:30",text:"Sang-ayon ako! Binago ng Maya ang paraan ko ng pamamahala ng pera.",bank:false}] },
    { id:2, bankId:2, user:"ana_dela_cruz_qc",     date:"Mar 15, 2026 08:45", service:"Credit Card", rating:2, verified:true,  bankReplied:true,  title:"Nag-log out ang app habang nag-transaksyon — nawala ang ₱500", body:"Ang BPI app ay naglo-log out sa akin sa gitna ng transaksyon sa loob ng 3 linggo. Nawala ang ₱500 sa isang transfer na nagpakita ng error ngunit natuloy. Na-reinstall nang 4 beses.", comments:[{id:301,user:"mark_davao",av:"M",date:"Mar 15 12:00",text:"Ganoon din sa akin! Ang aking transfer ay natuloy ngunit nagpakita ng error.",bank:false},{id:302,user:"BPI Digital",av:"B",date:"Mar 16 09:00",text:"Hi Ana, i-update sa v5.2.1 — naayos nito ang isyu. I-DM kami tungkol sa ₱500.",bank:true}] },
    { id:3, bankId:1, user:"carlo_reyes_ph",       date:"Mar 14, 2026 17:30", service:"Debit Card",  rating:1, verified:true,  bankReplied:true,  title:"Na-charge ng ₱3,200 na hindi ko ginawa — 3 linggo walang resolusyon", body:"Nakakita ng bayad mula sa hindi kilalang tindahan noong March 1. Naghain ng dispute sa parehong araw. Tatlong linggo na ang lumipas — wala pa ring update. Tumawag ng 6 beses.", comments:[{id:101,user:"maria_ofw",av:"M",date:"Mar 16 15:44",text:"Ganoon din ang nangyari sa akin! Maghain sa BSP — nalutas sa 2 linggo.",bank:false},{id:102,user:"BDO Official",av:"B",date:"Mar 18 10:02",text:"Hi Carlo, naiproseso na ang pagbabalik ng ₱3,200. Reference: BDO-2025-031801.",bank:true}] },
  ],
};

// ─── DESIGN ───────────────────────────────────────────────────────────────────
const C = { blue:"#0066CC", blueDk:"#004C99", blueLt:"#E8F0FB", text:"#1A1A1A", muted:"#777", border:"#E0E0E0", bg:"#F2F3F5", white:"#FFFFFF", green:"#2E7D32", red:"#C62828", star:"#FF9500" };
const FF = "Arial, Helvetica, sans-serif";

const useW = () => {
  const [w,setW]=useState(typeof window!=="undefined"?window.innerWidth:1200);
  useEffect(()=>{const h=()=>setW(window.innerWidth);window.addEventListener("resize",h);return()=>window.removeEventListener("resize",h);},[]);
  return w;
};

// ─── SMALL UI ─────────────────────────────────────────────────────────────────
const Stars=({n,size=13})=><span style={{fontSize:size,letterSpacing:-1}}>{[1,2,3,4,5].map(i=><span key={i} style={{color:i<=n?C.star:"#DDD"}}>★</span>)}</span>;

const RatingBadge=({n})=>{
  const bg={1:"#E53935",2:"#FB8C00",3:"#FDD835",4:"#66BB6A",5:"#43A047"}[n]||"#999";
  return <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:24,height:24,borderRadius:"50%",background:bg,color:"#fff",fontWeight:"bold",fontSize:13}}>{n}</span>;
};

const Tag=({children,blue=false,green=false})=>{
  const bg=blue?C.blueLt:green?"#E8F5E9":"#F0F0F0";
  const cl=blue?C.blue:green?C.green:"#555";
  const br=blue?"#C5D8F5":green?"#C8E6C9":"#E0E0E0";
  return <span style={{display:"inline-block",padding:"2px 8px",borderRadius:3,fontSize:11,fontWeight:"bold",background:bg,color:cl,border:`1px solid ${br}`,whiteSpace:"nowrap"}}>{children}</span>;
};

const Verified=({yes,t})=><Tag green={yes}>{yes?t.reviewChecked:t.reviewNotChecked}</Tag>;

const SelDrop=({label,options,value,onChange})=>(
  <div style={{position:"relative",minWidth:130}}>
    <div style={{fontSize:11,color:C.muted,marginBottom:2}}>{label}</div>
    <select value={value} onChange={e=>onChange(e.target.value)} style={{width:"100%",padding:"6px 26px 6px 9px",border:`1px solid ${C.border}`,borderRadius:4,fontSize:13,color:C.text,background:"#fff",appearance:"none",fontFamily:FF,cursor:"pointer"}}>
      {options.map(o=><option key={o.value||o} value={o.value||o}>{o.label||o}</option>)}
    </select>
    <span style={{position:"absolute",right:7,bottom:9,pointerEvents:"none",color:C.muted,fontSize:10}}>▼</span>
  </div>
);

// ─── LANG SWITCHER ────────────────────────────────────────────────────────────
const LangSwitcher=({lang,setLang})=>(
  <div style={{display:"flex",gap:4,alignItems:"center"}}>
    {Object.entries(T).map(([code,tr])=>(
      <button key={code} onClick={()=>setLang(code)}
        style={{background:lang===code?"rgba(255,255,255,0.25)":"none",border:lang===code?"1px solid rgba(255,255,255,0.5)":"1px solid transparent",borderRadius:4,padding:"3px 7px",cursor:"pointer",fontSize:13,color:"#fff",fontFamily:FF,display:"flex",alignItems:"center",gap:4,fontWeight:lang===code?"bold":"normal"}}>
        <span>{tr.flag}</span><span style={{fontSize:11}}>{tr.langName}</span>
      </button>
    ))}
  </div>
);

// ─── SIMILAR PROBLEM ──────────────────────────────────────────────────────────
const SimilarBox=({t,onWrite})=>(
  <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:16,marginBottom:16}}>
    <div style={{fontWeight:"bold",fontSize:15,marginBottom:6}}>{t.similarProblem}</div>
    <div style={{fontSize:13,color:C.muted,marginBottom:12,lineHeight:1.5}}>{t.similarSub}</div>
    <button onClick={onWrite} style={{width:"100%",background:C.blue,color:"#fff",border:"none",borderRadius:4,padding:10,fontWeight:"bold",fontSize:14,cursor:"pointer",fontFamily:FF}}>{t.writeReview}</button>
  </div>
);

// ─── COMMENT THREAD ───────────────────────────────────────────────────────────
const CommentThread=({comments,t,reviewId,onAdd})=>{
  const [text,setText]=useState("");
  const [showAll,setShowAll]=useState(false);
  const vis=showAll?comments:comments.slice(0,2);
  const hidden=comments.length-2;
  return (
    <div style={{marginTop:16}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontWeight:"bold",fontSize:15}}>{t.commentsTitle}</span>
          <span style={{background:C.blue,color:"#fff",borderRadius:"50%",width:22,height:22,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:"bold"}}>{comments.length}</span>
        </div>
        {comments.length>2&&<span onClick={()=>setShowAll(!showAll)} style={{color:C.blue,fontSize:13,cursor:"pointer"}}>{showAll?t.hideComments:t.showAllComments}</span>}
      </div>
      <div style={{background:"#FFFDE7",border:"1px solid #FFE082",borderRadius:4,padding:"10px 14px",marginBottom:14,display:"flex",alignItems:"flex-start",gap:10}}>
        <span style={{color:"#F9A825",fontSize:16,flexShrink:0}}>⚠</span>
        <div style={{fontSize:13,color:"#5D4037"}}>{t.commentsNotice}{" "}<span style={{color:C.blue,cursor:"pointer"}}>{t.login}</span> {t.or} <span style={{color:C.blue,cursor:"pointer"}}>{t.register}</span></div>
      </div>
      {vis.map(c=>(
        <div key={c.id} style={{display:"flex",gap:12,marginBottom:20}}>
          <div style={{width:40,height:40,borderRadius:"50%",background:c.bank?C.blue:"#90A4AE",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:"bold",fontSize:15,flexShrink:0}}>{c.av}</div>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
              <span style={{fontWeight:"bold",fontSize:13}}>{c.user}</span>
              {c.bank&&<Tag blue>{t.official}</Tag>}
              <span style={{fontSize:12,color:C.muted,marginLeft:"auto"}}>{c.date}</span>
            </div>
            <div style={{fontSize:14,lineHeight:1.65}}>{c.text}</div>
          </div>
        </div>
      ))}
      {!showAll&&hidden>0&&<button onClick={()=>setShowAll(true)} style={{background:"none",border:`1px solid ${C.border}`,color:C.blue,borderRadius:4,padding:"7px 16px",fontSize:13,cursor:"pointer",fontFamily:FF,marginBottom:14}}>{t.showMore(hidden)}</button>}
      <div style={{display:"flex",gap:10,alignItems:"flex-start",marginTop:8}}>
        <div style={{width:36,height:36,borderRadius:"50%",background:"#90A4AE",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:"bold",fontSize:14,flexShrink:0}}>Я</div>
        <div style={{flex:1,display:"flex",gap:8}}>
          <input value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&text.trim()){onAdd(reviewId,text.trim());setText("");}}} placeholder={t.addComment} style={{flex:1,padding:"8px 12px",border:`1px solid ${C.border}`,borderRadius:4,fontSize:13,fontFamily:FF,outline:"none"}}/>
          <button onClick={()=>{if(text.trim()){onAdd(reviewId,text.trim());setText("");}}} style={{background:C.blue,color:"#fff",border:"none",borderRadius:4,padding:"8px 16px",fontSize:13,fontWeight:"bold",cursor:"pointer",fontFamily:FF,whiteSpace:"nowrap"}}>{t.send}</button>
        </div>
      </div>
    </div>
  );
};

// ─── REVIEW CARD ──────────────────────────────────────────────────────────────
const ReviewCard=({r,t,showBank=false,onOpen,isMobile})=>{
  const bank=TOP3_BANKS.find(b=>b.id===r.bankId);
  const LIMIT=200;
  const long=r.body.length>LIMIT;
  return (
    <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:16,marginBottom:10}}>
      {showBank&&bank&&(
        <div style={{fontSize:12,color:C.muted,marginBottom:8,display:"flex",alignItems:"center",gap:6}}>
          <div style={{width:16,height:16,borderRadius:3,background:bank.color,display:"inline-block",flexShrink:0}}/>
          <span style={{color:C.blue,fontWeight:"bold"}}>{bank.name}</span>
          <span>· {r.service}</span>
        </div>
      )}
      <div style={{fontWeight:"bold",fontSize:isMobile?14:15,lineHeight:1.35,marginBottom:6,cursor:"pointer",color:C.text}} onClick={()=>onOpen(r)}>{r.title}</div>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"}}>
        <span style={{fontSize:12,color:C.muted}}>{t.scoreLabel}:</span>
        {r.rating?<RatingBadge n={r.rating}/>:<span style={{fontSize:12,color:C.muted}}>{t.noScoreLabel}</span>}
        <Verified yes={r.verified} t={t}/>
      </div>
      <div style={{fontSize:14,lineHeight:1.6,marginBottom:10}}>
        {long?r.body.substring(0,LIMIT)+"…":r.body}
        {long&&<span onClick={()=>onOpen(r)} style={{color:C.blue,cursor:"pointer",marginLeft:4,fontSize:13}}>{t.readMore}</span>}
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
        <div style={{display:"flex",alignItems:"center",gap:10,fontSize:12,color:C.muted}}>
          <span>{r.date}</span>
          <span onClick={()=>onOpen(r)} style={{cursor:"pointer",color:C.blue}}>💬 {r.comments.length}</span>
        </div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {r.verified&&<Tag>{t.reviewVerified}</Tag>}
          {r.bankReplied&&<Tag blue>{t.bankReplied}</Tag>}
        </div>
      </div>
    </div>
  );
};

// ─── REVIEW DETAIL PAGE ───────────────────────────────────────────────────────
const ReviewDetailPage=({review,reviews,bank,t,navigate,onAddComment,onWrite,isMobile,lang})=>(
  <div style={{maxWidth:900,margin:"0 auto",padding:isMobile?"12px":"20px",display:"flex",gap:20,alignItems:"flex-start",flexWrap:isMobile?"wrap":"nowrap"}}>
    <div style={{flex:1,minWidth:0}}>
      <div style={{fontSize:12,color:C.muted,marginBottom:12}}>
        <span style={{color:C.blue,cursor:"pointer"}} onClick={()=>navigate("home")}>{t.breadHome}</span>
        {" › "}<span style={{color:C.blue,cursor:"pointer"}} onClick={()=>navigate("bank",bank)}>{t.backAll.replace("← ","")}</span>
        {" › "}<span>Review</span>
      </div>
      <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:20,marginBottom:16}}>
        <h1 style={{fontSize:isMobile?17:20,fontWeight:"bold",margin:"0 0 12px",lineHeight:1.3}}>{review.title}</h1>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12,flexWrap:"wrap"}}>
          <span style={{fontSize:12,color:C.muted}}>{t.scoreLabel}:</span>
          {review.rating?<RatingBadge n={review.rating}/>:<span style={{fontSize:13,color:C.muted}}>{t.noScoreLabel}</span>}
          <Verified yes={review.verified} t={t}/>
          {review.bankReplied&&<Tag blue>{t.bankReplied}</Tag>}
        </div>
        <div style={{fontSize:14,lineHeight:1.7,marginBottom:16}}>{review.body}</div>
        <div style={{display:"flex",alignItems:"center",gap:12,fontSize:12,color:C.muted,paddingTop:12,borderTop:`1px solid ${C.border}`,flexWrap:"wrap"}}>
          <span>{review.date}</span><span>· {review.user}</span><span>· {review.service}</span>
        </div>
      </div>
      <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:20}}>
        <CommentThread comments={review.comments} t={t} reviewId={review.id} onAdd={onAddComment}/>
      </div>
    </div>
    {!isMobile&&(
      <div style={{width:240,flexShrink:0}}>
        <SimilarBox t={t} onWrite={()=>onWrite(bank)}/>
        <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:14}}>
          <div style={{fontWeight:"bold",fontSize:13,marginBottom:10}}>{t.otherReviews}</div>
          {reviews.filter(r=>r.bankId===bank.id&&r.id!==review.id).slice(0,3).map(r=>(
            <div key={r.id} onClick={()=>navigate("review",null,r)} style={{borderBottom:`1px solid ${C.border}`,paddingBottom:8,marginBottom:8,cursor:"pointer"}}>
              <div style={{fontSize:12,color:C.blue,fontWeight:"bold",lineHeight:1.3,marginBottom:3}}>{r.title.substring(0,55)}{r.title.length>55?"…":""}</div>
              <div style={{display:"flex",gap:6,alignItems:"center"}}><Stars n={r.rating} size={11}/><span style={{fontSize:11,color:C.muted}}>{r.date.split(" ")[0]}</span></div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// ─── BANK PAGE ────────────────────────────────────────────────────────────────
const BankPage=({bank,reviews,t,navigate,onOpen,onWrite,isMobile})=>{
  const [tab,setTab]=useState("reviews");
  const [service,setService]=useState(t.services_filter[0]);
  const [revF,setRevF]=useState("all");
  const [ratingF,setRatingF]=useState("all");
  const filtered=reviews.filter(r=>{
    if(r.bankId!==bank.id)return false;
    if(service!==t.services_filter[0]&&r.service!==service)return false;
    if(revF==="verified"&&!r.verified)return false;
    if(ratingF==="negative"&&r.rating>2)return false;
    if(ratingF==="positive"&&r.rating<4)return false;
    return true;
  });
  const rankPos=ALL_BANKS_RANKED.findIndex(b=>b.id===bank.id)+1;
  const TabBtn=({id,label})=>(
    <button onClick={()=>setTab(id)} style={{padding:"10px 20px",border:"none",borderBottom:`2px solid ${tab===id?C.blue:"transparent"}`,background:"none",fontSize:14,fontWeight:tab===id?"bold":"normal",color:tab===id?C.blue:C.text,cursor:"pointer",fontFamily:FF}}>{label}</button>
  );
  const bankType=bank.type==="Digital"?t.digitalBank:bank.type==="Government"?t.govBank:t.universalBank;

  return (
    <div style={{maxWidth:900,margin:"0 auto",padding:isMobile?"12px":"16px 20px",display:"flex",gap:20,flexWrap:isMobile?"wrap":"nowrap"}}>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontSize:12,color:C.muted,marginBottom:12,cursor:"pointer"}} onClick={()=>navigate("home")}>{t.backAll}</div>
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
          <div style={{width:52,height:52,borderRadius:8,background:bank.color,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:"bold",fontSize:20,flexShrink:0}}>{bank.name[0]}</div>
          <div>
            <h1 style={{fontSize:isMobile?18:22,fontWeight:"bold",margin:"0 0 2px"}}>{bank.name}</h1>
            <div style={{fontSize:12,color:C.muted}}>{bankType}</div>
          </div>
        </div>
        <div style={{borderBottom:`1px solid ${C.border}`,marginBottom:16,display:"flex"}}>
          <TabBtn id="about" label={t.tabAbout}/><TabBtn id="reviews" label={t.tabReviews}/>
        </div>

        {tab==="reviews"&&<>
          <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:"14px 16px",marginBottom:16}}>
            <div style={{fontWeight:"bold",fontSize:15,marginBottom:10,display:"flex",alignItems:"center",gap:6}}>
              {t.peopleRating} <span style={{fontSize:14,color:C.muted,fontWeight:"normal",cursor:"help"}} title="Rating based on customer reviews">ⓘ</span>
            </div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
              {[[`${rankPos} ${t.place}`,`${t.outOf} ${ALL_BANKS_RANKED.length} ${t.banks}`],[`★ ${bank.rating.toFixed(2)}`,t.avgScore],[`${bank.resolved}%`,t.resolved],[bank.reviews.toLocaleString(),t.reviewsWord],[Math.round(bank.reviews*bank.responseRate/100).toLocaleString(),t.answers]].map(([v,s],i)=>(
                <div key={i} style={{flex:"1 1 80px",padding:"4px 8px 4px 0",minWidth:isMobile?70:90}}>
                  <div style={{fontWeight:"bold",fontSize:isMobile?14:16}}>{v}</div>
                  <div style={{fontSize:11,color:C.muted}}>{s}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:"12px 16px",marginBottom:16}}>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <SelDrop label={t.services} value={service} onChange={setService} options={t.services_filter.map(s=>({value:s,label:s}))}/>
              <SelDrop label={t.reviewsFilter} value={revF} onChange={setRevF} options={[{value:"all",label:t.allReviews},{value:"verified",label:t.verified}]}/>
              <SelDrop label={t.scoreFilter} value={ratingF} onChange={setRatingF} options={[{value:"all",label:t.anyScore},{value:"negative",label:t.negative},{value:"positive",label:t.positive}]}/>
            </div>
          </div>
          {filtered.length===0
            ?<div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:32,textAlign:"center",color:C.muted}}>{t.noReviews}</div>
            :filtered.map(r=><ReviewCard key={r.id} r={r} t={t} onOpen={onOpen} isMobile={isMobile}/>)}
        </>}

        {tab==="about"&&<>
          <div style={{background:bank.color,borderRadius:6,padding:12,marginBottom:16}}>
            <div style={{display:"flex",gap:10,overflowX:"auto"}}>
              {[{label:t.peopleRating,val:`#${rankPos} ${t.outOf} ${ALL_BANKS_RANKED.length}`},{label:t.qaCard,val:`${t.reviewsCard} ${bank.reviews}`},{label:t.phoneCard,val:bank.phone}].map(c=>(
                <div key={c.label} style={{background:"#fff",borderRadius:6,padding:"12px 14px",flex:"1 1 140px",minWidth:140}}>
                  <div style={{color:C.blue,fontWeight:"bold",fontSize:12,marginBottom:4}}>{c.label}</div>
                  <div style={{fontSize:13,fontWeight:"bold"}}>{c.val}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,marginBottom:16,overflow:"hidden"}}>
            <div style={{padding:"12px 16px",borderBottom:`1px solid ${C.border}`,fontWeight:"bold",fontSize:15}}>{bank.name}</div>
            <div style={{padding:"6px 16px",borderBottom:`1px solid ${C.border}`,fontSize:12,color:C.muted}}>{t.since} {bank.since} {t.year} · {t.license} {bank.license}</div>
            {[[t.position,`#${rankPos} ${t.outOf} ${ALL_BANKS_RANKED.length} ${t.banks}`],[t.address,bank.address],[t.branches,<a href={bank.googleMaps} target="_blank" rel="noreferrer" style={{color:C.blue}}>{t.googleMaps}</a>],[t.phones,<><div>{bank.phone}</div>{bank.phone2&&<div style={{marginTop:2,color:C.muted,fontSize:12}}>{bank.phone2} {t.forRegions}</div>}</>],[t.website,<a href={`https://${bank.website}`} target="_blank" rel="noreferrer" style={{color:C.blue}}>{bank.website}</a>],[t.social,<a href={`https://${bank.facebook}`} target="_blank" rel="noreferrer" style={{color:C.blue}}>Facebook</a>],[t.appsLabel,<span style={{display:"flex",gap:12}}><a href="#" style={{color:C.blue,fontSize:13}}>▶ Google Play</a><a href="#" style={{color:C.blue,fontSize:13}}> App Store</a></span>]].map(([l,v])=>(
              <div key={l} style={{display:"flex",borderBottom:`1px solid ${C.border}`,padding:"11px 16px",gap:12,alignItems:"flex-start"}}>
                <div style={{width:isMobile?110:200,flexShrink:0,fontSize:13,color:C.muted}}>{l}</div>
                <div style={{fontSize:13,flex:1}}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>{t.recentReviews}</div>
          {reviews.filter(r=>r.bankId===bank.id).slice(0,3).map(r=><ReviewCard key={r.id} r={r} t={t} onOpen={onOpen} isMobile={isMobile}/>)}
          <button onClick={()=>setTab("reviews")} style={{background:"none",border:`1px solid ${C.border}`,color:C.blue,borderRadius:4,padding:"8px 18px",fontSize:13,cursor:"pointer",fontFamily:FF,width:"100%",marginTop:4}}>{t.allReviewsBtn}</button>
        </>}
      </div>
      {!isMobile&&tab==="reviews"&&<div style={{width:240,flexShrink:0}}><SimilarBox t={t} onWrite={()=>onWrite(bank)}/></div>}
    </div>
  );
};

// ─── WRITE REVIEW FORM ────────────────────────────────────────────────────────
const WriteForm=({t,navigate,preBank,isMobile})=>{
  const [step,setStep]=useState(1);
  const [bankId,setBankId]=useState(preBank?.id||"");
  const [clientType,setClientType]=useState("");
  const [province,setProvince]=useState("");
  const [channels,setChannels]=useState([]);
  const [service,setService]=useState("");
  const [titleV,setTitleV]=useState("");
  const [body,setBody]=useState("");
  const [files,setFiles]=useState([]);
  const [rating,setRating]=useState(null);
  const [subR,setSubR]=useState({transparent:null,polite:null,support:null,app:null});
  const [email,setEmail]=useState("");
  const [done,setDone]=useState(false);
  const fileRef=useRef();
  const selBank=TOP3_BANKS.find(b=>b.id==bankId);
  const toggleCh=(ch)=>setChannels(p=>p.includes(ch)?p.filter(c=>c!==ch):[...p,ch]);
  const canNext1=bankId&&clientType&&province&&channels.length>0&&service&&titleV.trim().length>0&&body.trim().length>=300;
  const canNext2=rating!==null;

  const EmojiBtn=({val,current,onClick})=>(
    <button onClick={()=>onClick(val)} style={{width:44,height:44,borderRadius:"50%",border:`2px solid ${current===val?"#555":"#DDD"}`,background:current===val?"#555":"#F5F5F5",fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}} >
      {val===0?"😞":val===1?"😐":"😊"}
    </button>
  );

  const handleFile=(e)=>{
    const ok=["image/jpeg","image/png","image/gif","application/pdf","text/plain","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    setFiles(p=>[...p,...[...e.target.files].filter(f=>ok.includes(f.type)&&f.size<=5*1024*1024)].slice(0,3));
    e.target.value="";
  };

  if(done)return(
    <div style={{maxWidth:560,margin:"40px auto",padding:"0 20px",textAlign:"center"}}>
      <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:32}}>
        <div style={{fontSize:48,marginBottom:12}}>✅</div>
        <div style={{fontSize:20,fontWeight:"bold",marginBottom:8}}>{t.doneTitle}</div>
        <div style={{fontSize:14,color:C.muted,marginBottom:24,lineHeight:1.6}}>{t.doneText(selBank?.name||"")}</div>
        <button onClick={()=>navigate("home")} style={{background:C.blue,color:"#fff",border:"none",borderRadius:4,padding:"10px 28px",fontWeight:"bold",fontSize:14,cursor:"pointer",fontFamily:FF}}>{t.backHome}</button>
      </div>
    </div>
  );

  const LB=({ch,req})=><label style={{display:"block",fontWeight:"bold",fontSize:13,marginBottom:6}}>{ch}{req&&<span style={{color:C.red}}> *</span>}</label>;

  return(
    <div style={{maxWidth:720,margin:"0 auto",padding:isMobile?"12px":"20px"}}>
      <div style={{fontSize:12,color:C.muted,marginBottom:12}}><span style={{color:C.blue,cursor:"pointer"}} onClick={()=>navigate("home")}>{t.breadHome}</span> › {t.breadAdd}</div>
      <h1 style={{fontSize:isMobile?20:24,fontWeight:"bold",margin:"0 0 20px"}}>{t.addReview}</h1>
      <div style={{marginBottom:20}}>
        <div style={{display:"flex",marginBottom:6}}>
          {[t.stepReview,t.stepScore,t.stepContacts].map((s,i)=><div key={s} style={{flex:1,textAlign:"center",fontSize:13,color:i+1<=step?C.blue:C.muted,fontWeight:i+1===step?"bold":"normal"}}>{s}</div>)}
        </div>
        <div style={{height:4,background:"#E0E0E0",borderRadius:2,overflow:"hidden"}}><div style={{height:"100%",background:C.blue,width:`${(step/3)*100}%`,transition:"width 0.3s",borderRadius:2}}/></div>
      </div>
      <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,padding:isMobile?16:24}}>
        {step===1&&<>
          <div style={{marginBottom:14}}>
            <LB ch={t.bankLabel} req/>
            <select value={bankId} onChange={e=>setBankId(e.target.value)} style={{width:"100%",padding:"9px 12px",border:`1px solid ${C.border}`,borderRadius:4,fontSize:14,fontFamily:FF,boxSizing:"border-box"}}>
              <option value="">{t.bankPlaceholder}</option>
              {TOP3_BANKS.map(b=><option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
          <div style={{marginBottom:14}}>
            <LB ch={t.clientType} req/>
            <div style={{display:"flex",gap:10}}>
              {[t.individual,t.business].map(tp=>(
                <label key={tp} style={{display:"flex",alignItems:"center",gap:8,padding:"9px 16px",border:`1px solid ${clientType===tp?C.blue:C.border}`,borderRadius:4,cursor:"pointer",background:clientType===tp?C.blueLt:C.white,fontSize:13,flex:1,justifyContent:"center"}}>
                  <input type="radio" checked={clientType===tp} onChange={()=>setClientType(tp)} style={{accentColor:C.blue}}/>{tp}
                </label>
              ))}
            </div>
          </div>
          <div style={{marginBottom:14}}>
            <LB ch={t.province} req/>
            <select value={province} onChange={e=>setProvince(e.target.value)} style={{width:"100%",padding:"9px 12px",border:`1px solid ${C.border}`,borderRadius:4,fontSize:14,fontFamily:FF,boxSizing:"border-box"}}>
              <option value="">{t.provincePlaceholder}</option>
              {PH_PROVINCES.map(p=><option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div style={{marginBottom:14}}>
            <LB ch={t.channel} req/>
            <div style={{border:`1px solid ${channels.length>0?C.blue:C.border}`,borderRadius:4,padding:"8px 12px"}}>
              <div style={{fontSize:13,color:channels.length>0?C.text:C.muted,marginBottom:4}}>{channels.length>0?channels.join(", "):t.channelPlaceholder}</div>
              <div style={{borderTop:`1px solid ${C.border}`,marginTop:6,paddingTop:8,display:"flex",flexDirection:"column",gap:2}}>
                {t.channels.map(ch=>(
                  <label key={ch} style={{display:"flex",alignItems:"center",gap:10,padding:"6px 4px",cursor:"pointer",fontSize:13}}>
                    <div onClick={()=>toggleCh(ch)} style={{width:20,height:20,borderRadius:4,border:`2px solid ${channels.includes(ch)?C.blue:C.border}`,background:channels.includes(ch)?C.blue:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      {channels.includes(ch)&&<span style={{color:"#fff",fontSize:12,fontWeight:"bold"}}>✓</span>}
                    </div>
                    <span onClick={()=>toggleCh(ch)}>{ch}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div style={{marginBottom:14}}>
            <LB ch={t.service} req/>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {t.services_list.map(s=>(
                <label key={s} style={{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",border:`1px solid ${service===s?C.blue:C.border}`,borderRadius:4,cursor:"pointer",background:service===s?C.blueLt:C.white,fontSize:13}}>
                  <input type="radio" checked={service===s} onChange={()=>setService(s)} style={{accentColor:C.blue}}/>{s}
                </label>
              ))}
            </div>
          </div>
          <div style={{marginBottom:14}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
              <LB ch={t.titleLabel} req/><span style={{fontSize:12,color:titleV.length>230?"#E65100":C.muted,alignSelf:"flex-end",marginBottom:6}}>{titleV.length}/255</span>
            </div>
            <input value={titleV} onChange={e=>setTitleV(e.target.value.slice(0,255))} placeholder={t.titlePlaceholder} style={{width:"100%",padding:"9px 12px",border:`1px solid ${C.border}`,borderRadius:4,fontSize:14,fontFamily:FF,boxSizing:"border-box"}}/>
          </div>
          <div style={{marginBottom:14}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
              <LB ch={t.bodyLabel} req/><span style={{fontSize:12,color:body.length<300?C.red:C.green,alignSelf:"flex-end",marginBottom:6}}>{body.length<300?t.bodyMin(300-body.length):`✓ ${body.length}`}</span>
            </div>
            <textarea value={body} onChange={e=>setBody(e.target.value)} rows={7} placeholder={t.bodyPlaceholder} style={{width:"100%",padding:"9px 12px",border:`1px solid ${C.border}`,borderRadius:4,fontSize:14,fontFamily:FF,resize:"vertical",boxSizing:"border-box",lineHeight:1.6}}/>
          </div>
          <div style={{marginBottom:14}}>
            <LB ch={t.docsLabel}/>
            <div style={{fontSize:12,color:C.muted,marginBottom:6}}>{t.docsNote}</div>
            <div style={{fontSize:12,color:C.muted,marginBottom:8}}>{t.docsFormats}</div>
            {files.length<3&&<button onClick={()=>fileRef.current.click()} style={{background:"#F5F5F5",border:`1px dashed ${C.border}`,color:C.blue,borderRadius:4,padding:"9px 16px",fontSize:13,cursor:"pointer",fontFamily:FF,marginBottom:8}}>{t.attachFile}</button>}
            <input ref={fileRef} type="file" multiple accept=".jpg,.jpeg,.png,.gif,.pdf,.txt,.doc,.docx" onChange={handleFile} style={{display:"none"}}/>
            {files.map((f,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 10px",background:"#F5F5F5",borderRadius:4,marginBottom:4,fontSize:13}}>
                <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{f.name}</span>
                <span style={{color:C.muted}}>{(f.size/1024/1024).toFixed(1)} MB</span>
                <span onClick={()=>setFiles(p=>p.filter((_,j)=>j!==i))} style={{color:C.red,cursor:"pointer",fontSize:16}}>✕</span>
              </div>
            ))}
          </div>
        </>}

        {step===2&&<>
          <div style={{marginBottom:24}}>
            <div style={{fontWeight:"bold",fontSize:15,marginBottom:12}}>{t.yourScore}</div>
            <div style={{fontSize:13,color:C.muted,marginBottom:10}}>{t.scoreLabel}</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
              {[1,2,3,4,5].map(n=>(
                <button key={n} onClick={()=>setRating(n)} style={{width:44,height:44,borderRadius:"50%",border:`2px solid ${rating===n?C.blue:C.border}`,background:rating===n?C.blue:"#F5F5F5",color:rating===n?"#fff":C.text,fontWeight:"bold",fontSize:16,cursor:"pointer"}}>{n}</button>
              ))}
              <button onClick={()=>setRating(0)} style={{padding:"8px 14px",borderRadius:20,border:`2px solid ${rating===0?C.blue:C.border}`,background:rating===0?C.blue:"#F5F5F5",color:rating===0?"#fff":C.text,fontWeight:"bold",fontSize:13,cursor:"pointer"}}>{t.noScore}</button>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
            {[[t.transparent,"transparent"],[t.polite,"polite"],[t.support,"support"],[t.app,"app"]].map(([label,key])=>(
              <div key={key}>
                <div style={{fontSize:13,marginBottom:10}}>{label} <span style={{fontSize:12,color:C.blue,cursor:"help"}} title="Rate this parameter">ⓘ</span></div>
                <div style={{display:"flex",gap:6,background:"#F5F5F5",borderRadius:24,padding:"6px 10px",width:"fit-content"}}>
                  {[0,1,2].map(v=><EmojiBtn key={v} val={v} current={subR[key]} onClick={val=>setSubR(p=>({...p,[key]:p[key]===val?null:val}))}/>)}
                </div>
              </div>
            ))}
          </div>
        </>}

        {step===3&&<>
          <div style={{fontWeight:"bold",fontSize:15,marginBottom:14}}>{t.contactsTitle}</div>
          <div style={{background:"#F0F7FF",border:`1px solid ${C.blue}33`,borderRadius:4,padding:"12px 14px",marginBottom:18,fontSize:13,color:"#0D47A1"}}>ℹ️ {t.contactsNote}</div>
          <div style={{marginBottom:12}}><LB ch={t.emailLabel}/><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" type="email" style={{width:"100%",padding:"9px 12px",border:`1px solid ${C.border}`,borderRadius:4,fontSize:14,fontFamily:FF,boxSizing:"border-box"}}/></div>
          <div style={{background:"#F9F9F9",border:`1px solid ${C.border}`,borderRadius:4,padding:14,marginBottom:16}}>
            <div style={{fontSize:12,fontWeight:"bold",color:C.muted,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.04em"}}>{t.summaryTitle}</div>
            {[[t.bankLabel,selBank?.name],[t.service,service],[t.scoreLabel,rating===0?t.noScore:rating?`${rating}/5`:t.noScoreLabel],[t.titleLabel,titleV.substring(0,60)+(titleV.length>60?"…":"")]].map(([l,v])=>(
              <div key={l} style={{display:"flex",gap:8,marginBottom:4,fontSize:13}}><span style={{color:C.muted,minWidth:80}}>{l}:</span><span style={{fontWeight:"bold"}}>{v}</span></div>
            ))}
          </div>
          <div style={{fontSize:12,color:C.muted,marginBottom:14,lineHeight:1.5}}>{t.publishNote}</div>
          <button onClick={()=>setDone(true)} style={{width:"100%",background:C.blue,color:"#fff",border:"none",borderRadius:4,padding:12,fontWeight:"bold",fontSize:15,cursor:"pointer",fontFamily:FF}}>{t.publish}</button>
        </>}

        <div style={{display:"flex",justifyContent:"space-between",marginTop:16}}>
          <button onClick={()=>step>1?setStep(s=>s-1):navigate("home")} style={{background:"#F5F5F5",border:`1px solid ${C.border}`,borderRadius:4,padding:"9px",fontWeight:"bold",fontSize:18,cursor:"pointer",fontFamily:FF,width:42}}>‹</button>
          {step<3&&<button onClick={()=>{if(step===1&&canNext1)setStep(2);if(step===2&&canNext2)setStep(3);}}
            style={{background:((step===1&&canNext1)||(step===2&&canNext2))?C.blue:"#CCC",color:"#fff",border:"none",borderRadius:4,padding:"9px 24px",fontWeight:"bold",fontSize:14,cursor:"pointer",fontFamily:FF}}>{t.continue}</button>}
        </div>
      </div>
    </div>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage=({reviews,t,navigate,onOpen,onWrite,isMobile})=>{
  const [showAll,setShowAll]=useState(false);
  const shown=showAll?ALL_BANKS_RANKED:ALL_BANKS_RANKED.slice(0,10);

  return(
    <div>
      <div style={{background:`linear-gradient(135deg,#004C99,${C.blue})`,padding:isMobile?"28px 16px":"40px 24px",textAlign:"center"}}>
        <h1 style={{color:"#fff",fontSize:isMobile?22:32,fontWeight:"bold",margin:"0 0 10px",lineHeight:1.25}}>
          {t.slogan1}<br/>{t.slogan2} <em style={{fontStyle:"italic",color:"#FFD700"}}>{t.sloganEm}</em>
        </h1>
        <p style={{color:"rgba(255,255,255,0.82)",fontSize:isMobile?13:16,margin:"0 0 22px",lineHeight:1.5}}>{t.heroSub}</p>
        <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={()=>onWrite(null)} style={{background:"#FFD700",color:"#003366",border:"none",borderRadius:4,padding:isMobile?"10px 18px":"12px 24px",fontWeight:"bold",fontSize:isMobile?13:15,cursor:"pointer",fontFamily:FF}}>{t.leaveReview}</button>
          <button onClick={()=>document.getElementById("rb")?.scrollIntoView({behavior:"smooth"})} style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"1px solid rgba(255,255,255,0.35)",borderRadius:4,padding:isMobile?"10px 18px":"12px 24px",fontSize:isMobile?13:15,cursor:"pointer",fontFamily:FF}}>{t.ratingBtn}</button>
        </div>
      </div>

      <div style={{maxWidth:900,margin:"0 auto",padding:isMobile?"12px":"20px"}}>
        {/* Rating table */}
        <div id="rb" style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,marginBottom:20,overflow:"hidden"}}>
          <div style={{padding:"12px 16px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontWeight:"bold",fontSize:16}}>{t.ratingTitle}</div>
            <div style={{fontSize:12,color:C.muted}}>{t.ratingSubtitle}</div>
          </div>
          {!isMobile&&(
            <div style={{display:"flex",background:"#F5F5F5",borderBottom:`1px solid ${C.border}`,padding:"7px 14px"}}>
              {[t.colNum,t.colBank,t.colRating,t.colReviews,t.colResolved].map((h,i)=>(
                <div key={h} style={{flex:i===1?3:1,fontSize:11,fontWeight:"bold",color:C.muted,textAlign:i>1?"center":"left"}}>{h}</div>
              ))}
            </div>
          )}
          {shown.map((bank,i)=>{
            const isTop3=TOP3_BANKS.some(b=>b.id===bank.id);
            return(
              <div key={bank.id}
                onClick={isTop3?()=>navigate("bank",TOP3_BANKS.find(b=>b.id===bank.id)):undefined}
                style={{display:"flex",alignItems:"center",padding:isMobile?"12px":"10px 14px",borderBottom:`1px solid ${C.border}`,cursor:isTop3?"pointer":"default",background:i%2===1?"#FAFAFA":C.white,opacity:isTop3?1:0.6,transition:"background 0.15s"}}
                onMouseEnter={e=>{if(isTop3)e.currentTarget.style.background=C.blueLt;}}
                onMouseLeave={e=>e.currentTarget.style.background=i%2===1?"#FAFAFA":C.white}>
                <div style={{flex:isMobile?undefined:1,width:isMobile?32:undefined,fontWeight:"bold",fontSize:15,color:i<3?C.blue:C.muted,textAlign:"center",flexShrink:0}}>
                  {i===0?"🥇":i===1?"🥈":i===2?"🥉":`${i+1}`}
                </div>
                <div style={{flex:isMobile?1:3,display:"flex",alignItems:"center",gap:10,minWidth:0,padding:isMobile?"0 8px":"0 12px 0 8px"}}>
                  <div style={{width:30,height:30,borderRadius:4,background:bank.color,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:"bold",fontSize:12,flexShrink:0}}>{bank.name[0]}</div>
                  <div style={{minWidth:0}}>
                    <div style={{fontWeight:"bold",fontSize:isMobile?13:14,color:isTop3?C.blue:C.text,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{bank.name}</div>
                    {isMobile&&<div style={{fontSize:11,color:C.muted}}><Stars n={Math.round(bank.rating)} size={11}/> {bank.rating} · {bank.reviews.toLocaleString()}</div>}
                  </div>
                </div>
                {!isMobile&&<>
                  <div style={{flex:1,textAlign:"center"}}><Stars n={Math.round(bank.rating)}/><br/><span style={{fontSize:12,fontWeight:"bold"}}>{bank.rating}</span></div>
                  <div style={{flex:1,textAlign:"center",fontSize:13}}>{bank.reviews.toLocaleString()}</div>
                  <div style={{flex:1,textAlign:"center",fontWeight:"bold",fontSize:14,color:bank.resolved>=80?C.green:bank.resolved>=60?"#E65100":C.red}}>{bank.resolved}%</div>
                </>}
                {isMobile&&<span style={{color:isTop3?C.muted:"transparent",fontSize:16,flexShrink:0}}>›</span>}
              </div>
            );
          })}
          <div style={{padding:"10px 14px",textAlign:"center",borderTop:`1px solid ${C.border}`}}>
            <button onClick={()=>setShowAll(!showAll)} style={{background:"none",border:`1px solid ${C.border}`,color:C.blue,borderRadius:4,padding:"8px 24px",fontSize:13,cursor:"pointer",fontFamily:FF}}>
              {showAll?t.showLess:t.showAll(ALL_BANKS_RANKED.length)}
            </button>
          </div>
        </div>

        {/* Latest reviews */}
        <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:6,overflow:"hidden"}}>
          <div style={{padding:"12px 16px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontWeight:"bold",fontSize:16}}>{t.latestReviews}</div>
            <div style={{fontSize:12,color:C.muted}}>{t.latestSub}</div>
          </div>
          <div style={{padding:10}}>
            {reviews.map(r=><ReviewCard key={r.id} r={r} t={t} showBank onOpen={onOpen} isMobile={isMobile}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App(){
  const [lang,setLang]=useState("ru");
  const [page,setPage]=useState("home");
  const [selBank,setSelBank]=useState(null);
  const [selReview,setSelReview]=useState(null);
  const [reviews,setReviews]=useState(REVIEWS_DATA.ru);
  const [menuOpen,setMenuOpen]=useState(false);
  const w=useW();
  const isMobile=w<700;
  const t=T[lang];

  // Update reviews when language changes
  useEffect(()=>{setReviews(REVIEWS_DATA[lang]);},[lang]);

  const navigate=(p,bank=null,review=null)=>{setPage(p);if(bank)setSelBank(bank);if(review)setSelReview(review);setMenuOpen(false);window.scrollTo(0,0);};
  const openReview=(r)=>{setSelReview(r);setSelBank(TOP3_BANKS.find(b=>b.id===r.bankId));setPage("review");window.scrollTo(0,0);};
  const openWrite=(bank)=>{setSelBank(bank);setPage("write");window.scrollTo(0,0);};
  const addComment=(rid,text)=>{
    const newC={id:Date.now(),user:"Вы",av:"Я",date:new Date().toLocaleString(),text,bank:false};
    setReviews(rs=>rs.map(r=>r.id===rid?{...r,comments:[...r.comments,newC]}:r));
    if(selReview?.id===rid)setSelReview(r=>({...r,comments:[...r.comments,newC]}));
  };

  return(
    <div style={{fontFamily:FF,background:C.bg,minHeight:"100vh",fontSize:14,color:C.text}}>
      {/* HEADER */}
      <header style={{background:C.blue,position:"sticky",top:0,zIndex:100,boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}}>
        <div style={{maxWidth:900,margin:"0 auto",padding:`0 ${isMobile?12:20}px`,height:48,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
          <div onClick={()=>navigate("home")} style={{fontWeight:"bold",fontSize:isMobile?16:19,color:"#fff",cursor:"pointer",flexShrink:0}}>
            BankReviews<span style={{color:"#FFD700"}}>.ph</span>
          </div>
          {!isMobile&&(
            <nav style={{display:"flex",alignItems:"center",gap:0,flex:1}}>
              <button onClick={()=>navigate("home")} style={{background:"none",color:"rgba(255,255,255,0.9)",border:"none",padding:"0 14px",height:48,fontSize:13,cursor:"pointer",fontFamily:FF,borderBottom:page==="home"?"2px solid #FFD700":"2px solid transparent"}}>{t.navHome}</button>
              <button onClick={()=>navigate("home")} style={{background:"none",color:"rgba(255,255,255,0.9)",border:"none",padding:"0 14px",height:48,fontSize:13,cursor:"pointer",fontFamily:FF,borderBottom:"2px solid transparent"}}>{t.navReviews}</button>
              <span style={{fontSize:11,color:"rgba(255,255,255,0.45)",marginLeft:8,maxWidth:220,lineHeight:1.3}}>{t.disclaimer}</span>
            </nav>
          )}
          <LangSwitcher lang={lang} setLang={setLang}/>
          {isMobile&&<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"none",border:"none",color:"#fff",fontSize:22,cursor:"pointer",padding:0,marginLeft:4}}>{menuOpen?"✕":"☰"}</button>}
        </div>
        {isMobile&&menuOpen&&(
          <div style={{background:"#004C99",borderTop:"1px solid rgba(255,255,255,0.1)",padding:"8px 0"}}>
            <div onClick={()=>navigate("home")} style={{padding:"12px 16px",color:"#fff",fontSize:14,cursor:"pointer",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>{t.navHome}</div>
            <div onClick={()=>navigate("home")} style={{padding:"12px 16px",color:"#fff",fontSize:14,cursor:"pointer",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>{t.navReviews}</div>
            <div style={{padding:"10px 16px",fontSize:11,color:"rgba(255,255,255,0.45)"}}>{t.disclaimer}</div>
          </div>
        )}
      </header>

      {page==="home"&&<HomePage reviews={reviews} t={t} navigate={navigate} onOpen={openReview} onWrite={openWrite} isMobile={isMobile}/>}
      {page==="bank"&&selBank&&<BankPage bank={selBank} reviews={reviews} t={t} navigate={navigate} onOpen={openReview} onWrite={openWrite} isMobile={isMobile}/>}
      {page==="review"&&selReview&&selBank&&<ReviewDetailPage review={selReview} reviews={reviews} bank={selBank} t={t} navigate={navigate} onAddComment={addComment} onWrite={openWrite} isMobile={isMobile} lang={lang}/>}
      {page==="write"&&<WriteForm t={t} navigate={navigate} preBank={selBank} isMobile={isMobile}/>}

      <footer style={{background:"#1A1A1A",color:"#888",padding:"20px",marginTop:32,textAlign:"center",fontSize:12}}>
        <div style={{fontWeight:"bold",color:"#fff",marginBottom:6,fontSize:14}}>BankReviews<span style={{color:"#FFD700"}}>.ph</span></div>
        <div style={{marginBottom:4}}>{t.footerText}</div>
        <div>{t.footerSub}</div>
      </footer>
    </div>
  );
}
