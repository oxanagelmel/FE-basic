"use strict";

console.log("Connected");

// Свойство style

// const prg = document.querySelector('p');
// prg.style.width = "300px";
// prg.style.backgroundColor = "lightblue";

// setTimeout(() => {
//     prg.style.backgroundColor = "";
// }, 2000)

// Задача: написать цикл, который создает
// множество div'ов с цветами
// от rgb(128,128,0) до rgb(128,128,255)
// Шаг = 5
// NB: Обязательно использовать elem.style

// const mainElem = document.querySelector('main');

// mainElem.style.display = "flex";
// mainElem.style.flexWrap = "wrap";

// let i=0;
// while(i <= 255) {  //цикл while
//     const div = document.createElement('div'); //создает div
//     div.style.width = "100px";
//     div.style.height = "100px";
//     div.style.backgroundColor = `rgb(128, 128, ${i})`;
//     mainElem.append(div);
//     i+=5; //множество div'ов
// }

// Callbacks (колбэки) - приходит в функцию функцией


const shoppingList = (item, callback = null) => {
    console.log(`Need to buy ${item}`)
    !!callback() && callback();
}

const confirmation = () => {
    console.log("Item was added");
}

shoppingList("apples", confirmation);

const numbers = [0, 1, 2, 3, 4, 5];

// map
// const newNumbers = numbers.map((item, index) => callback());

// const newNumbers = numbers.map((item, index) => {
//     return item*2;
// })

const newNumbers = numbers.map((item, index) => {
    if(index % 2 === 0) {
        return item*2
    }else{
        return item*3;
    }
})

console.log(newNumbers);
console.log(numbers);

//forEach
numbers.forEach((item, index) => {
    console.log(item**4);
})

// Написать функцию applyForEach, которая принимает в качестве 
// первого аргумента массив
// а в качестве второго аргумента колбэк
// и применяет этот колбэк для каждого элемента
// а в качестве результата возвращает новый массив
// входной массив: массив цен на товары без налогов
// выходе: массив цен на товары с налогом

const prices = [120.55, 99.9, 15.5, 329.9]; //массив цен 

const priceWithTax = (price) => price + price*0.2; // callback

const applyForEach = (arr, callback) => {
    const resultArray = [];

    for(let i = 0; i < arr.length; i++) {
        const resValue = callback(arr[i]);
        resultArray.push(resValue)
    }

    return resultArray;
}

console.log(applyForEach(prices, priceWithTax));

// Events (события)

// addEventListener, removeEventListener

const simpleButton = document.querySelector('#simple-button'); // находит кнобку

// function onSimpleButtonClick () {
//     console.log('I am clicked!');
// }

// simpleButton.addEventListener('click', onSimpleButtonClick)

// simpleButton.addEventListener('mouseover', (ev) => {
//     console.log(ev);
//     simpleButton.style.backgroundColor = 'lightblue';
// })

// simpleButton.addEventListener('mouseleave', () => {
//     simpleButton.style.backgroundColor = '';
// })

// setTimeout(() => {
//     simpleButton.removeEventListener('click', onSimpleButtonClick)
// }, 3000)



// Задача: добавить в интерфейс 2 кнопки ("+", "-")
// создать в скрипте переменную-счетчик
// при клике на + увеличивать счетчик на 1
// при клике на - уменьшать на 1

let counter = 0;
const plusButton = document.querySelector('#plus-button');
const minusButton = document.querySelector('#minus-button');
const counterPrg = document.querySelector('#counter');

plusButton.addEventListener('click', () => {
    counter +=1;
    counterPrg.innerText = counter;
    console.log(counter);
})

minusButton.addEventListener('click', () => {
    if(counter > 0) {
        counter -= 1;
        counterPrg.innerText = counter;
    }
    console.log(counter);
})


// Event Object

const simpleInput = document.querySelector('#simple-input');
const listElement = document.querySelector('#list');

// simpleImput.addEventListener('keydown', (ev) => {
//     if(ev.key === 'h') {
//         console.log("You pressed h!!")
//     }
// })

simpleButton.addEventListener('click', () => {
    console.log(simpleInput.value);
    if(simpleInput.value.length > 0) {
        const pElement = document.createElement('p');
        pElement.innerText = simpleInput.value;
        listElement.prepend(pElement);
        simpleInput.value = '';
    }
})