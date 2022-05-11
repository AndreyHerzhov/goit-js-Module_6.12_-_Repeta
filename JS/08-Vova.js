/*
 * Поиск и вовзрат только уникальных элементов массива 
 */ 

const fruitArray = ['apple','apple' ,'lemon', 'grape', 'lemon','lemon']
const newArray = fruitArray.filter((el,index,array) => array.indexOf(el) === index )

console.log(newArray)


/*
 * Создания новых элементов списка с помощью фонкуции
 */ 


// ------- LIST ------- // 

const list = document.querySelector('.list')
const listItem = document.querySelector('.list__item')

const createNewListItem = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    li.classList.add('list__item')
    list.append(li)
    li.style.fontSize = "20px"
    li.style.marginBottom = "20px"
    li.style.marginLeft = "20px"
}


createNewListItem('First element')
createNewListItem('Second element')
createNewListItem('Third element')
createNewListItem('Fourth element')



console.log(list)


// ----- INPUT ----- // 

refs = {
    text1: document.querySelector('.text1'),
    input: document.querySelector('input[type="text"]'),
    text2: document.querySelector('.text2'),
}

refs.text1.style.color = `green`;
refs.text1.style.marginLeft = '15px';
refs.text1.style.marginBottom = `${15}px`;
refs.text2.style.marginLeft = `${15}px`;
refs.text2.style.marginTop = `${15}px`;
refs.input.style.marginLeft = `${15}px`;

console.log(refs.text1)
console.log(refs.input)


refs.input.addEventListener ('input', inputValue)

function inputValue (ev) {
    if (refs.input.value === '') {
        refs.text2.textContent = 'Empty';
    } else {
        refs.text2.textContent = ev.currentTarget.value
    }
    
    console.log(refs.text2.textContent)
    console.log(refs.input.value)
    console.log(ev.currentTarget.value)

}

