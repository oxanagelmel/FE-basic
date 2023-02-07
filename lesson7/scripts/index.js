"use strict";

//Однострочный комментарий

/**
 * Это 
 * многострочный
 * комментарий
 */

console.log('Hello World!');
console.log("Hello World!");
console.log(`Hello World!`);

let greeting = "Привет! Какой прекрасный день сегодня день";
console.log(greeting);
let name; //undefined

var oldVersion = "Не используем var!";
console.log(typeof greeting);
greeting = 65;
const numberAsString = '65';
const floatingNumber = 134.56;
console.log(greeting);
console.log(numberAsString);

// let snake_case = "Snake!";

const monthOfBirth = "Август";
console.log(monthOfBirth);

// let personName = prompt("Пожалуйста, введите свое имя", "Daria");

console.log(greeting+10, 'start variable as number');
console.log(numberAsString+10, 'start const as string');

console.log(Infinity);
console.log(-Infinity);

console.log(typeof greeting);

// +, -, *, /
console.log(Infinity/10);
// % - взятие остатка от деления
console.log(5%2);
console.log(8%3);
console.log(15%3);

// ** - возведение в степень
console.log(3**2);
console.log(12**2);
console.log(4**4);