"use strict"

console.log("Connected");

// Функции (function declaration)

const userGreeting = greeting('Sergei');

function greeting(username = "dear customer"){
    return `Hello, ${username}!`;
}

const userName = "dear customer";

console.log(userGreeting);

//Задача
// написать функцию, которая принимает в себя 2 параметра
// и в консоль выводит значение первого параметра в степени второго

function power(startValue, powerValue) {
    const result = startValue**powerValue;
    return result;
}

console.log(power(2, 3));
console.log(power(4, 4));
console.log(power(11, 2));

// return
// Задача: используя функцию power, написать процесс поиска гипотенузы по 2 катетам
// (сумма квадратов катетов дает квадрат гипотенузы)

const sqrKat1 = power(3, 2);
const sqrKat2 = power(4, 2);
const hyp = Math.sqrt(sqrKat1 + sqrKat2);
console.log(hyp);

// Задача
// Написать функцию isEven, которая принимает в себя число
// Если число четное, возвращает true
// Если нечетное, false

function isEven(value){
    // if(value % 2 === 0) {   //чётное ли число с помощью % остатка от 2 
    //     return true;
    // }
    // return false;

    return value % 2 === 0 ? true : false;  //с помощью тернарного оператора

    // return value % 2 === 0;   //упрощённый вариант
}

console.log(isEven(4));
console.log(isEven(5));

/** Для ДЗ:
 * Задача: Описать функцию, которая получает в качестве аргумента число 
 * и возвращает массив из чисел от 0 до указанного числа. 
 */

function generateArray(value) { // в () аргумент
    const result = []; // нужно создать/объявить массив
    for(let i=0; i<=value; i++) {
        result.push(i);   // результат пушим в массив
    }
    return result; // return = возвращает массив
}

console.log(generateArray(10));
console.log(generateArray(0));
console.log(generateArray(100));


// Функции (function expression) - функциональное выражение
// функция внутри выражения

//const sumWithCoef = function() {}; --> имя фйнкции отсутствует, это правильная конструкция

const sumWithCoef = function(val1, val2) {
    return val1 + val2;
} (3, 4) * 0.5;    // вызываем функцию и присваиваем ей коэфицент

console.log(sumWithCoef);

let newGreeting = greeting; // копируем значение функции в новую переменную = указание на функцию
console.log(greeting("Oxana!"));
console.log(newGreeting("Lena!"));

let sayGoodbye = function() {         //объевляю
    return 'Goodbye, see you soon!';
};

let byeBye = sayGoodbye;              //вызываю
console.log(sayGoodbye());
console.log(byeBye());

// сначала объевляю функцию а потом вызываю

// Когда нам могут быть полезны functional expression?
// --> когда работаем с методами в объектах
// Метод у объекта это функция которая ассоциируется с этим объектом.

const user = {
    username: "Oxana",
    jobTitle: "Frontend dev",
    city: "Ingolstadt",
    age: "28",
    showData: function() {  //showData = метод
        let userData = "";

        for(let key in user) {
            if(key !== "showData") { // не просматриваем showData
                userData = userData + `${key}: ${user[key]} ` // конкатенация ключ : значение
            }
        }
        return userData;
    }
}

console.log(user.showData());

// Стрелочные функуии

// let someFunction = (value1, value2,...) => expression
// создаётся функция, принимает в себя аргументы, вычесляет выражение и возвращает нам результат
// --> сокращённый вариант функционального выражения

let sum = (value1, value2) => value1 + value2; //упрощённый вариант вля возврвта значения если нету доп. логики

let sumNew = (value1, value2) => { // -"-
    //some additional logic
    return value1 + value2
};

let square = n => n**2;      // если у нас только один аргумент

let shoppingCartTitle = () => 'Title'; // когда вообше нету аргументов нужны ()

const res = sum(2, 3);
console.log(res);

// => полезны когда нужно сократить код


// Переписать функцию power в виде стрелочной (powerArrow)
// //function power(startValue, powerValue) {
//     const result = startValue**powerValue;
//     return result;
// }

let powerArrow =(startValue, powerValue) => startValue**powerValue;

console.log(powerArrow(8,2));


// document.documentElement = html
// document.body = body
// document.head = head
// childNodes, firstChild, lastChild

// Поиск элементов в ДОМе
// getElementById

let uniquePrg = document.getElementById('unique-prg');
console.log(uniquePrg);
uniquePrg.style.backgroundColor = 'red';

// querySelectorAll
const prgs = document.querySelectorAll('p');
console.log(prgs);

const blogPost = document.querySelectorAll('.blog-post');
console.log(blogPost);

const headline = blogPost[0].querySelector('h3'); //tag, .class, #id
console.log(headline);

// getElementsByTagName = querySelectorAll(tag)
// getElementsByClassName = querySelectorAll('.class-name')
// getElementsByName - искал по аттрибуту name


// Задача
// Добавить на страницу header
// Внутрь положить nav
// Внутрь nav положить 2 a (ссылки)
// В JS найти header, nav & эти ссылки
// Вывести в консоль

const headerLine = document.querySelector('header');
console.log(headerLine);

const navLine = headerLine.querySelector('nav');
console.log(navLine);

const aLinks = navLine.querySelectorAll('a');
console.log(aLinks);