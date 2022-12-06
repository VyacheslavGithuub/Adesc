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