const data = {
  Services: [
    {
      icon: process.env.PUBLIC_URL + '/img/Элвес МК.png',
      name: 'РРО КСА «Элвес МК»',
      text:
        'КСА «Элвес МК» — автономный портативный кассовый аппарат. Чёрно-белый дисплей, клавиатура защищена от пыли и влаги. Устройство надёжно в эксплуатации, работает при низких отрицательных температурах. Для печати чеков используется лента 57 мм шириной.',
      price: '17 500',
      description: `<div>Максимальная ширина бумаги: 57 мм;<br>
      Внешний диаметр рулона бумаги: не более 60 мм;<br>
      Скорость печати: не менее 45 мм/сек;<br>
      Интерфейсы: RS-232 <br>
      Сканер штрих-кодов RS-232: опционально<br>
      Питание от аккумулятора: 6V 1200 mAh;<br>
      Утилита программирования (таблицы, база): MicroConfig;<br>
      Размер базы товаров (ПЛУ): до 2700;<br>
      Диапазон рабочих температур: -10 °C...+40 °C<br>
      Габариты: 11,6 х 23,2 х 7,3 см;<br>
      Вес: 0,9 кг</div>`,
      driver: process.env.PUBLIC_URL + '/drivers/driver Элвес МК.zip'
    },
    {
      icon: process.env.PUBLIC_URL + '/img/Штрих М.png',
      name: 'РРО ШТРИХ-М ПТК',
      text:
        'Штрих-М-ПТК – популярный фискальный регистратор. Качественная термопечать выполняется на чековой ленте шириной 80 мм, аппарат снабжён автоматическим отрезчиком чеков. Это позволяет использовать аппарат в торговых залах с высокой нагрузкой на кассы и большим потоком покупателей.',
      price: '39 600',
      description: `<div>Метод печати – прямая термопечать;<br>
      Скорость печати – 200 мм/сек;<br>
      Область печати - 72 (576) мм (точек);<br>
      Количество колонок (при печати стандартным шрифтом) – 48 шт.;<br>
      Размеры ленты: ширина – 80±1 мм;<br>
      Интерфейсы: RS-232, USB;<br>
      Толщина ленты – 60-120 мкм;<br>
      Наружный диаметр рулона, не более – 83;<br>
      Наличие отрезчика – да;<br>
      Количество кассиров – 30;<br>
      Разрядность денежных регистров – 12;<br>
      Разрядность операционных регистров – 4 (после номера чека или отчета 9999 идет номер 0000);<br>
      Количество налоговых ставок – 4;<br>
      Диапазон рабочих температур: -10 °C...+40 °C<br>
      Габариты – 15,0 х 22,5 х 13,0 см;<br>
      Вес – 3,4 кг.`,
      driver: process.env.PUBLIC_URL + '/drivers/driver Штрих-М ПТК.zip'
    },
    {
      icon: process.env.PUBLIC_URL + '/img/Штрих Лайт.png',
      name: 'РРО ШТРИХ-Лайт ПТК',
      text:
        'Штрих-Лайт ПТК – стационарный фискальный регистратор. Используется на торговых точках со средней проходимостью. Высокая скорость печати, лента термобумаги (57 мм), аппарат снабжён автоматическим отрезчиком чеков. Компактные размеры и небольшой вес обеспечивают эргономичность рабочего места.',
      price: '',
      description: `<div>Метод печати – прямая термопечать;<br>
      Скорость печати – 200 мм/сек;<br>
      Область печати - 47 (576) мм (точек);<br>
      Количество колонок (при печати стандартным шрифтом) – 48 шт.;<br>
      Размеры ленты: ширина – 57±1 мм;<br>
      Толщина ленты – 60-120 мкм;<br>
      Интерфейсы: RS-232, USB;<br>
      Наличие отрезчика – да;<br>
      Количество кассиров – 30;<br>
      Разрядность денежных регистров – 12;<br>
      Разрядность операционных регистров – 4 (после номера чека или отчета 9999 идет номер 0000);<br>
      Количество налоговых ставок – 4;<br>
      Диапазон рабочих температур: -10 °C...+40 °C<br>
      Габариты – 11,8 x 20,5 x 11,0 см;<br>
      Вес – 3,2 кг.`
    }
  ],
  Contact: {
    addresses: [
      'г. Донецк, ул. Постышева, 60',
      'г. Донецк, пр-т Богдана Хмельницкого, 102'
    ],
    phone: '071-519-51-49',
    email: 'ntcbazis@mail.ru',
    facebook: 'https://facebook.com/',
    twitter: 'https://twitter.com/',
    youtube: 'https://youtube.com/'
  },
  Features: [
    {
      icon: 'fa fa-industry',
      title: 'Производство',
      text:
        'Компания является аккредитованным производителем регистраторов расчетных операций на территории ДНР'
    },
    {
      icon: 'fa fa-rub',
      title: 'Продажа',
      text:
        'Продажа полного комплекса торгового оборудования для автоматизации бизнеса'
    },
    {
      icon: 'fa fa-wrench',
      title: 'Сервис',
      text:
        'Сервисное обслуживание, ремонт регистраторов расчетных операций, весоизмерительного и другого торгового оборудования'
    }
  ],
  Partners: [
    {
      link: process.env.PUBLIC_URL + '/img/Сертификаты БАЗИС.jpg',
      title: 'Базис',
      text: ''
    },
    {
      link: process.env.PUBLIC_URL + '/img/Сертификаты Д-Маркет.jpg',
      title: 'Д-Маркет',
      text: ''
    },
    {
      link: process.env.PUBLIC_URL + '/img/Сертификаты Кассервис.jpg',
      title: 'Кассервис',
      text: ''
    },
    {
      link: process.env.PUBLIC_URL + '/img/Сертификаты Инфотех.jpg',
      title: 'Инфотех',
      text: ''
    },
    {
      link: process.env.PUBLIC_URL + '/img/Сертификаты Топ-Сервис.jpg',
      title: 'Топ-Сервис',
      text: ''
    }
  ]
}

export default data
