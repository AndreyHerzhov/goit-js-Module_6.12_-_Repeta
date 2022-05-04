/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*:   handleSubjectEvent
 *    - *Handler:  subjectEventHandler
 *    - on*:       onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn')
const addListenerBtn = document.querySelector('.js-add-listener')
const removeListenerBtn = document.querySelector('.js-remove-listener')

// targetBtn.addEventListener('click', () => {
//     console.log('Click')
// })

addListenerBtn.addEventListener('click', event => {
    console.log(event)
    console.log('Вешаю слушателя на целевую кнопку')
    targetBtn.addEventListener('click', onTargetBtnClick) // ссылка на одну и ту же функцию 
})

removeListenerBtn.addEventListener('click',  event  => {
    console.log('Снимаю слушателя на целевую кнопку')
    targetBtn.removeEventListener('click', onTargetBtnClick) // ссылка на одну и ту же функцию 
})

function onTargetBtnClick (event) {
    console.log('Клик по целевой кнопке')
}

// function handleTargetButtonClick () {
//     console.log('click')
// }

// function  targetButtonClickHandler () {
//     console.log('click')
// }

// function   onTargetButtonClick () {
//     console.log('click')
// }


function logMessage() {
    console.log('Click on the button');
}