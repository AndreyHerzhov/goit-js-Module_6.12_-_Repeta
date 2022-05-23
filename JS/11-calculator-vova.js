
const refs = {
    priceInput: document.querySelector('#price'),
    quantityInput: document.querySelector('#quantity'),
    total: document.querySelector('.total'),
    form: document.querySelector('.form'),
    amount: document.querySelector('.amount')
}



function calculate () {
    const result = refs.priceInput.value * refs.quantityInput.value;
    refs.total.textContent = `${result.toFixed(2)}грн`;
    refs.amount.textContent = refs.quantityInput.value
}

refs.form.addEventListener('input', calculate) // навешали все на form (делегирование событий)

document.addEventListener('DOMContentLoaded', calculate)
