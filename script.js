// 1 записываем в переменую по id ryjgre
const btn = document.getElementById('btn')
// записываем переменную инпут
const text = document.querySelector('#text')
const square = document.getElementById('square')
const btnOnCircle = document.getElementById('e_btn')
const range = document.getElementById('range')
const span = document.getElementById('range-span')
const circle = document.getElementById('circle')

// функция изменение background квадрата который ввёдт в инпут
const backGroundColor = function(){
  console.log(" Клик по кнопке");
  // обращаемся через style к background и присваиваем ему value input
  square.style.backgroundColor = text.value
}
// на событие клик вызываем функцию
btn.addEventListener('click', backGroundColor)

// 2 даём кнопке в круге display none
btnOnCircle.style.display = "none"

// 3) Повесить на input[type=range] обработчик
// события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение input[type=range]
// необходимо заносить в свойства ширины и высоты кружка
// (который внутри квадрата) (height и width) (в процентах!!)
// range.addEventListener('')


console.log(circle);
const logger = function (event) {
  // запись в спан текст кторый мы пишем в инпуте
  span.textContent = event.target.value
  circle.style.width = event.target.value + "%"
  circle.style.height = event.target.value + "%"
}
range.addEventListener('input',logger)
range.addEventListener('change', logger)