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

