// const btn = document.getElementById('btn')
// const square = document.getElementById('square')

// const logger = function () {
//   console.log("Текст по квадрату");
//   }
// const logger1 = function () {
//   console.log("Текст поццвцв квадрату");
// }

// // Мы можем вызвать событие onclick тоько оддин раз ,а адлше нужно вызвать анонимную фкункцию
// square.onclick = function(){
//   logger()
//   logger1()
// }
// // Чтобы затереть обработчик по клиику то нужно
// // square.onclick = null


// console.dir(square);


// const btn = document.getElementById('btn')
// const square = document.getElementById('square')

// const logger = function () {
//   console.log("Текст по квадрату");
// }
// // другой виде обработки (где передам (событие и функцию)
// square.addEventListener('click', logger)

// // через аннонимную функцию делаем
// square.addEventListener('click', function(){
//   console.log("клик по квадрату");
// })



// const square = document.getElementById('square')

// let counter = 0

// const logger = function () {
//   counter++
//   console.log(counter);
//   // если conter равен 3 то мы удалим слушаетль
//   if (counter === 3) {
//       square.removeEventListener('click', logger)
//   }
//   console.log("Текст по квадрату");
// }

// // другой виде обработки (где передам (событие и функцию)
// square.addEventListener('click', logger)
// // ЕСЛИ МЫ ПЕРЕДА!М АНОНИНМНУЮ ыункцию то мы не сможем её удалить
// // УДАЛИТЬ ДАННЫЙ СЛУШАТЕЛЬ (ОБРАБОТЧИК)
// // square.removeEventListener('click', logger)


// const square = document.getElementById('square')

// const logger = function (event) {
//   console.log(event.type);
// }

// square.addEventListener('click',logger)
// // кода мышка зашла в хону квадрата
// square.addEventListener('mouseenter',logger)
// // когда мышка вышла из зоны квадрата
// square.addEventListener('mouseleave',logger)

// // НЕ ИГНОРИРТУЮТ ВЛОЖЕННОСТЬ
// square.addEventListener('mouseover',logger)
// //
// square.addEventListener('mouseout',logger)

// // square.addEventListener('mouseup',logger)
// // square.addEventListener('mousedown',logger)
// // square.addEventListener('mousemove',logger)

// const text = document.getElementById('text')
// const span = document.getElementById('text-span')

// const logger = function (event) {
//   console.dir(event.target.value);
//   // запись в спан текст кторый мы пишем в инпуте
//   span.textContent = event.target.value
// }
// // События input зависят не от количства символов а от колтчесва изменения
// text.addEventListener('input',logger)
// // когда выбрали простаратнство для ввода текста
// text.addEventListener('focus',logger)
// // blur  момент потери фокуса
// text.addEventListener('blur',logger)
// // когда производтся 2 события input и  blur
// text.addEventListener('change',logger)

// const range = document.getElementById('range')
// const text = document.getElementById('text')
// const span = document.getElementById('text-span')
// const rangeSpan = document.getElementById('range-span')

// const logger = function (event) {
//   console.dir(event.type);
//   // запись в спан текст кторый мы пишем в инпуте
//   rangeSpan.textContent = event.target.value
// }
// // range.addEventListener('input',logger)
// range.addEventListener('change',logger)

// const span = document.getElementById('range-span')

// const logger = function (event) {
//   console.dir(event.type);
//   // запись в спан текст кторый мы пишем в инпуте
//   span.textContent = event.target.value
// }
// //  данное событие раньше использовалось вместо defer
// document.addEventListener('DOMContentLoaded', function(){
//   console.log('DOM построен');
// })
// //
// window.onbeforeunload = function(){
//   return ' Вы уверены что хотите уйти со страницы?'
// }


// // можно сразу запистат событие
// // выглядит не очень лучше так не делать
// document.getElementById('range').addEventListener('change', logger)


// const link = document.querySelector('a')

// link.addEventListener('click', function(event){
//   // event.preventDefault() Отмена перехода по ссылке
//   event.preventDefault()
//   console.log(' кликли по кнопке');
// })
// // Убирвем меню
// document.addEventListener('contextmenu', function(event){
//     event.preventDefault()
//   console.log('нет меню по правой кнпке мыши');
// })

const btn = document.querySelector('#e_btn')
const circle = document.querySelector('#circle')
const square = document.querySelector('#square')

const toggler = function(event){
  // Чтобы событие не перенослось, а происхоидло на конкртеном умутеу
  // event.stopPropagation()

  console.log('Событие сработало на ' + event.target.id + ' и перенеслась на ' +  event.currentTarget.id);
  event.target.classList.toggle('green')
}
// если обавить true то мы будем смтоерть события от рождителя к элементу
btn.addEventListener('click', toggler,true)
circle.addEventListener('click', toggler,true)
square.addEventListener('click', toggler,true)
// Проверка