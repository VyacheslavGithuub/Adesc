let tariff_cards = [
  {
    title: "Тариф «Первый»",
    description: "Полный пакет опций для максимального результата",
    price: "2 499 ₽",
    whenPaidPerYear: "в месяц при оплате за год",
    people: [
      {icon: "user", title: "10+ пользователей"}, 
      {icon: "organization", title: "5+ юридических лиц"}, 
    ],
    services:[
      {isState: true, title: "Неограниченные счета"}, 
      {isState: true, title: "Учет по проектам"}, 
      {isState: true, title: "Отчет о движении денег"}, 
      {isState: true, title: "Отчет о прибылях и убытках"}, 
      {isState: true, title: "Настройка прав доступа"}, 
      {isState: true, title: "Бюджеты и план-факт анализ"}, 
      {isState: true, title: "Согласование платежей"}, 
      {isState: true, title: "Кредиты"}, 
      {isState: true, title: "Основные средства"}, 
      {isState: true, title: "Расширенная аналитика"}, 
      {isState: true, title: "Прикрепление файлов"}, 
      {isState: true, title: "Приоритетная поддержка"}
    ],
    button: "Протестировать"
  },
  {
    title: "Тариф «Бизнес»",
    description: "Инструмент для улучшения экономики бизнеса",
    price: "2 082 ₽",
    whenPaidPerYear: "в месяц при оплате за год",
    people: [
      {icon: "user", title: "10+ пользователей"}, 
      {icon: "organization", title: "5+ юридических лиц"}, 
    ],
    services:[
      {isState: true, title: "Неограниченные счета"}, 
      {isState: true, title: "Учет по проектам"}, 
      {isState: true, title: "Отчет о движении денег"}, 
      {isState: true, title: "Отчет о прибылях и убытках"}, 
      {isState: true, title: "Настройка прав доступа"}, 
      {isState: true, title: "Бюджеты и план-факт анализ"}, 
      {isState: true, title: "Согласование платежей"}, 
      {isState: false, title: "Кредиты"}, 
      {isState: false, title: "Основные средства"}, 
      {isState: false, title: "Расширенная аналитика"}, 
      {isState: false, title: "Прикрепление файлов"}, 
      {isState: false , title: "Приоритетная поддержка"}
    ],
    button: "Протестировать"
  },
  {
    title: "Тариф «Комфорт»",
    description: "Подходит для стартапов и микробизнеса",
    price: "1 749 ₽",
    whenPaidPerYear: "в месяц при оплате за год",
    people: [
      {icon: "user", title: "10+ пользователей"}, 
      {icon: "organization", title: "5+ юридических лиц"}, 
    ],
    services:[
      {isState: true, title: "Неограниченные счета"}, 
      {isState: true, title: "Учет по проектам"}, 
      {isState: true, title: "Отчет о движении денег"}, 
      {isState: true, title: "Отчет о прибылях и убытках"}, 
      {isState: false, title: "Настройка прав доступа"}, 
      {isState: false, title: "Бюджеты и план-факт анализ"}, 
      {isState: false, title: "Согласование платежей"}, 
      {isState: false, title: "Кредиты"}, 
      {isState: false, title: "Основные средства"}, 
      {isState: false, title: "Расширенная аналитика"}, 
      {isState: false, title: "Прикрепление файлов"}, 
      {isState: false , title: "Приоритетная поддержка"}
    ],
    button: "Протестировать"
  },
  {
    title: "Тариф «Эконом»",
    description: "Подходит для фрилансеров и самозанятых",
    price: "833 ₽", 
    whenPaidPerYear: "в месяц при оплате за год",
    people: [
      {icon: "user", title: "10+ пользователей"}, 
      {icon: "organization", title: "5+ юридических лиц"}, 
    ],
    services:[
      {isState: true, title: "Неограниченные счета"}, 
      {isState: true, title: "Учет по проектам"}, 
      {isState: true, title: "Отчет о движении денег"}, 
      {isState: false, title: "Отчет о прибылях и убытках"}, 
      {isState: false, title: "Настройка прав доступа"}, 
      {isState: false, title: "Бюджеты и план-факт анализ"}, 
      {isState: false, title: "Согласование платежей"}, 
      {isState: false, title: "Кредиты"},  
      {isState: false, title: "Основные средства"}, 
      {isState: false, title: "Расширенная аналитика"}, 
      {isState: false, title: "Прикрепление файлов"}, 
      {isState: false , title: "Приоритетная поддержка"}
    ],
    button: "Протестировать"
  }
];
// куда всё записываем
let tariff = document.querySelector(".tariff_block");

// Создание карточек тарифов
for (const item of tariff_cards) {
  let tariff_card = document.createElement("div")
  tariff_card.classList.add("tariff_item")

  // Title
  let title = document.createElement("h3")
  title.classList.add("item_title")
  title.innerHTML = item.title
  tariff_card.append(title);
  // Description
  let description = document.createElement("p")
  description.classList.add("item_description")
  description.innerHTML =  item.description
  tariff_card.append(description);
  // Price
  let price = document.createElement("h2")
  price.classList.add("item_prace")
  price.innerHTML =  item.price
  tariff_card.append(price);
  // whenPaidPerYear
  let whenPaidPerYear = document.createElement("p")
  whenPaidPerYear.classList.add("item_prace_description")
  whenPaidPerYear.innerHTML =  item.whenPaidPerYear
  tariff_card.append(whenPaidPerYear);

  // people
  // Создаём контейнер списка
  let peopleUl = document.createElement("ul")
  peopleUl.classList.add("card_ul")
  tariff_card.append(peopleUl)
  
  for (const elem of item.people) {
  // Создаём элемент списка
    let peopleLi = document.createElement("li")
    peopleLi.classList.add("card_li")
  // Добавляем картинку 
    let icon = document.createElement("div")
    icon.classList.add(elem.icon === "user" ? "card_people_user" : "card_people_organization")
    peopleLi.append(icon);
  // Добавляем описание
    let title = document.createElement("p")
    title.classList.add("item_active")
    title.innerHTML =  elem.title
    peopleLi.append(title);
  // Добавляем элемент списка в карточку
  peopleUl.append(peopleLi)
  }

  //  services
  for (const elem of item.services) {
  // Создаём элемент списка
    let servicesLi = document.createElement("li")
    servicesLi.classList.add("card_li")
  // Добавляем картинку 
    let icon = document.createElement("div")
    icon.classList.add(elem.isState ?"services_img-active" : "services_img-not_active")
    servicesLi.append(icon);
  // Добавляем описание
    let title = document.createElement("p")
    title.classList.add(elem.isState ?"item_active" : "item_not_active")
    title.innerHTML =  elem.title
    servicesLi.append(title);

  // Добавляем элемент списка в карточку
    tariff_card.append(servicesLi)
  }
//Card button
  let card_button = document.createElement("button")
  card_button.classList.add("card_button")
  card_button.innerHTML =  item.button
  tariff_card.append(card_button);

  tariff.append(tariff_card)
}
///////////////////////////////////////
// consultation_block

const consultationArr = [
  {id: 1, title: "Вы получите полностью работоспособную систему управленческого учета"},
  {id: 2, title: "Вам не придется тратить время на самостоятельное изучение тонкостей"},
  {id: 3, title: "Мы будем сопровождать вас в течение первых месяцев работы"}
]
// Получаем списов в который добавим данных ul
let consultation_list = document.querySelector(".consultation_block_ul");
for (const item of consultationArr) {
  // Создаём li
  let li = document.createElement("li")
  li.classList.add("consultation_block_li")

  // left block
  const left_block = document.createElement("div")
  left_block.classList.add("consultation_block_numbr")
  li.append(left_block)

  // id / blur in left block
  const id = document.createElement("div")
  id.classList.add("consultation_numbr")
  id.innerHTML = item.id
  left_block.append(id)

  const blur_block = document.createElement("div")
  blur_block.classList.add("consultation_blur")
  left_block.append(blur_block)
// title
  const title = document.createElement("div")
  title.classList.add("consultation_title")
  title.innerHTML =  item.title
  li.append(title)

// li помещаем в ul
  consultation_list.append(li)
}

/////////////////////
const messages = [
  {
    question: "Зачем нужен Adesk, если есть Excel?",
    answer: [
      "Эксель — замечательный инструмент, но отнимает очень много времени и увеличивает шанс допустить ошибку",
      "Особенно когда в нём работают несколько пользователей",
      "Но самая главная проблема Экселя — это то, что в нем нет возможностей для автоматизации. Многие рутинные операции приходится делать вручную, что является очень дорогим удовольствием для предпринимателей."
    ]
  },
  {
    question: "А если у нас есть бухгалтер?",
    answer: [
      "О, бухгалтерский и управленческий учёт — совершенно разные вещи!",
      "Основная задача бухгалтера — правильно и вовремя отчитываться перед государством",
      "Управленческий учёт нужен в первую очередь для предпринимателя или собственника бизнеса для того, чтобы в реальном времени иметь ответ на вопрос «Как идут дела у компании?» и принимать правильные управленческие решения.",
      "Или у вас в бизнесе управленческие решения принимает бухгалтер? 🙂  "
    ]
  },
  {
    question: "А нашей компании подойдёт Adesk? ",
    answer: ["Наши клиенты — это малый бизнес из самых разных отраслей экономики с доходом от 500 тысяч до 15-20 млн рублей в месяц. Как правило, у них несколько счетов и ООО/ИП. Примерно половина клиентов — проектные компании, которые работают над заказами своих клиентов."]
  },
  {
    question: "Можно ли использовать Adesk с телефона?",
    answer: ["Да, у нас есть мобильное приложение для iOS и для Android. К тому же у нас очень удобная мобильная версия, а так же бот для Telegram, которому вы просто можете писать о своих расходах и он будет автоматически добавлять их в систему. Кроме этого, он будет напоминать вам о предстоящих платежах и давать сводку по состоянию дел."]
  },
  {
    question: "Могу ли я приглашать других пользователей в систему?",
    answer: ["Конечно! Более того, разным сотрудникам вы можете раздать разные права доступа. Например, кто-то из сотрудников может иметь доступ на внесение данных только по определенному счету и при этом не иметь доступа ни к каким отчетам."]
  },
  {
    question: "Мне нужна помощь в освоении сервиса. Как быть?",
    answer: [
      "У нас есть YouTube-канал, а так же сайт help.adesk.ru с простыми и понятными статьями, где вы, возможно, сможете найти ответы на свои вопросы.",
      "Не стесняйтесь писать нам в чат, мы очень активно отвечаем и с удовольствием вам поможем.",
      "Чтобы сэкономить ваше время, мы можем выделить вам помощника, который за несколько онлайн-созвонов обучит вас работе в сервисе. Услуга предоставляется за дополнительную плату."
    ]
  }, 
]

const faq = document.querySelector(".faq");

for (const message of  messages) {
// Блок с вопросом
  let accordion = document.createElement("div")
  accordion.classList.add("faq_accordion")
  accordion.innerHTML = message.question
  faq.append(accordion)

// Скрывающийся блок с ответами
  let content = document.createElement("div")
  content.classList.add("faq_content")

//Родительский элемент у элементов 
  let content_body = document.createElement("div")
  content_body.classList.add("faq_content_body")

// Блок сообщений
  let answer_block = document.createElement("div")
// Сообщения
  for (const item of message.answer) {
    let m = document.createElement("div")
    m.innerHTML = item
    m.classList.add("faq_message")
    answer_block.append(m)
  }
  content_body.append(answer_block)

// Аватарка 
  let icon = document.createElement("div")
  icon.classList.add("faq_icon")
  content_body.append(icon)
  content.append(content_body)

// Добавляем content в faq 
  faq.append(content)
}

///// faq_accordion
document.querySelectorAll('.faq_accordion').forEach((el, index) => {
  let content = el.nextElementSibling;
  if (index === 0) {
    document.querySelectorAll('.faq_content').forEach((el) => el.style.maxHeight = null)
     content.style.maxHeight = content.scrollHeight + "px"
  }
  el.addEventListener('click', () => {

    if (content.style.maxHeight) {
      document.querySelectorAll('.faq_content').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.faq_content').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + "px"
    }
  })
})