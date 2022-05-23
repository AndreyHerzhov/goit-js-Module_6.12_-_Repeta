const list = document.querySelector('.list')

const array = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'ReactNative']

const createList = function(text) {
    const li = document.createElement('li')
    li.textContent = text
    list.append(li)
}

array.map(el => createList(el))

