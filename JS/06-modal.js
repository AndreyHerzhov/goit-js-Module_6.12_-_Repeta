/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop')
}

refs.openModalBtn.addEventListener('click', onModalOpen)
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.backdrop.addEventListener('click', onBackdropClick)


function onModalOpen() {
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEscKeyPress); 
}

function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress)
    document.body.classList.remove('show-modal') 
}

function onBackdropClick(event) {
    if(event.target === event.currentTarget) {
        onCloseModal();
    }
    
    // console.log(event.target)
    // console.log(event.currentTarget)
}

function onEscKeyPress(event) {
    if(event.code === 'Escape') { 
        onCloseModal();
    }
    console.log(event.code)
    
}