/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault();
    console.dir(event.currentTarget)

    console.log('Это сабмит форма')

}

// event.preventDefault(); - что бы не перезагружалась страница