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

// const user = {
//     username: "Oxana",
//     jobTitle:"Frontend dev",
//     city: "Ingolstadt",
//     age: "28",
//     showData: function() {
//         let uerData = "";
   
//         for(let key in userS) {
//             if(key !== "showData") {
//                 userData = + `${key} : ${user[key]}`
//             }
//         }
//         return userData;
//     }
// }