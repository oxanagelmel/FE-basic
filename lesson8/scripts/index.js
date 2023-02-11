"use strict";

console.log("Connected!");

// Работа со строками

let greeting = "Hello!";
console.log(greeting[0]);
console.log(greeting.charAt(0));

console.log(greeting.length); //возвращает длину строки
console.log(greeting[greeting.length - 1]);

// методы для измненения регистра
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// Конкатенация и интерполяция

let mainQuestion = "В чем смысл жизни?";
console.log(greeting+mainQuestion);

const userName = "Daria";
const country = "Estonia";

console.log(`Hello! My name is ${userName}, I live in ${country}`);

function sum(a, b) {
    return a + b;
}

const firstArgument = 10;
const secondArgument = 15;

console.log(`${firstArgument} + ${secondArgument} = ${sum(firstArgument, secondArgument)}`);

const r = '100';
const g = '120';
const b = '25';

console.log("rgb(" + r + "," + g + "," + b + ")");
console.log(`rgb(${r},${g},${b})`);

//Неявные преобразования типов

console.log(r/b);
console.log(greeting/b); //NaN - not a number
console.log(greeting/b*r + 1); 

console.log(+r);
console.log(secondArgument+"");
console.log(`${secondArgument}`);

console.log('b'+'a'+ +'c');

// const enteredName = prompt("Enter your name");
// console.log(enteredName);

//Задача: написать программу,которая запрашивает возраст пользователя
// через диалоговое окно и выводит, сколько ему минут

// const age = prompt("Please, enter your age");

// const ageInMinutes = 365 * 24 * 60 * +age;

// console.log(`You are ${ageInMinutes} minutes`);

//Задача 2: написать программу, которая запрашивает 2 числа
// и выводит в консоль их сумму

// const enteredFirstNum = prompt("Enter first number");
// const enteredSecondNum = prompt("Enter second number");
// console.log(`You entered ${enteredFirstNum} and ${enteredSecondNum}`);

// const finalSum = +enteredFirstNum + +enteredSecondNum;
// console.log(finalSum);

//Операторы сравнения и условные операторы

// =, ==, ===

console.log('10' == 10);
console.log('10' === 10);

console.log(10 >= 9);
console.log(10 >= 10);
console.log(10 > 10);

const month = "Февраль";

if(month === "Январь") {
    console.log("Это Январь");
} else if(month === "Февраль") {
    console.log("Это Февраль");
} else {
    console.log(`Это ${month}`);
}

// // условие ? если правда : если ложь

const age = 20;
console.log(age > 18 ? 'Добро пожаловать на наш ресурс!' : 'Извините, Вам сюда нельзя');
console.log(age < 10 ? 
    'Увы, так рано сюда нельзя!' : 
    age > 60 ? 'Добро пожаловать, уважаемый клиент!' : 
    'Привет!');

//Задача: через диалоговое окно спросить у пользователя, 
// "В каком году вышла спецификация ESMAScript-2015?"
// Далее, используя условный оператор, вывести в консоль:
// если значение больше - "Не угадали, берите меньше"
// если значение меньше - "Не угадали, берите больше"
// если попал в значение - "Верно!"

const year = 2016;

if(year < 2015) {
    console.log("Не угадали, берите больше");
} else if (year > 2015) {
    console.log("Не угадали, берите меньше");
} else {
    console.log("Верно!");
}

// Сравнение строки
console.log("A" > "Z");
console.log("Кот" > "Код");


// Функция isNaN

console.log(NaN == NaN);
console.log(NaN === NaN);


console.log(Number.isNaN(NaN));
console.log(Number.isNaN(greeting/firstArgument));
console.log(Number.isNaN('27'));

console.log(Number.isNaN(greeting/firstArgument) === Number.isNaN(NaN));

// Массивы

let arrayFromConstructor = new Array();
console.log(arrayFromConstructor);

let arr = [];
console.log(arr);

const daysOfWeek = ["Monday", "Tuesday", "Sunday"];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);
daysOfWeek[1] = "Friday";
console.log(daysOfWeek);

// pop/push, shift/unshift

console.log(daysOfWeek.pop());
console.log(daysOfWeek);

daysOfWeek.push("Saturday", "Wednesday");
console.log(daysOfWeek);

console.log(daysOfWeek.shift());
console.log(daysOfWeek);

daysOfWeek.unshift("Saturday");
console.log(daysOfWeek);

const mixedArray = ["I am a string", 55, 
    {
    id: 123, 
    userName: "Daria"}
];
console.log(mixedArray);

// Циклы

for(let i=0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

