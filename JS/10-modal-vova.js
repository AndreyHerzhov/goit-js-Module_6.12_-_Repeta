const createModal = function() {
    return `
    <button id="modal-btn">Click me</button>
    <div class="overlay hide">
        <div class="modal">
            <h2 class="title"></h2>
            <button class="close">Close</button>
        </div>
    </div>`;
}

const wrapper = document.querySelector('.wrapper')
const markup = createModal()
wrapper.insertAdjacentHTML('beforeend', markup)

const refs = {
    overlay: document.querySelector('.overlay'),
    openBtn: document.querySelector('#modal-btn'),
    closeBtn: document.querySelector('.close'),
    
}



function toggleModalHandler() {
    refs.overlay.classList.toggle('hide')
    window.addEventListener('keydown', onEscKeyPress); 
}

function onEscKeyPress(event) {
    if(event.code === 'Escape') { 
        toggleModalHandler();
    }
}

refs.openBtn.addEventListener('click', toggleModalHandler)
refs.closeBtn.addEventListener('click', toggleModalHandler)

