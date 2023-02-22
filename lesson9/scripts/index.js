"use strict";

console.log("Connected");


// while


// while (true) {
//  тело цикла
// }

// let salaryCoeff = 10;
// let currentSalaryCoeff = 0;

// while(currentSalaryCoeff <=  salaryCoeff) {
//     currentSalaryCoeff++;
//     console.log(currentSalaryCoeff);
// }


// while(true) {
//     let userInput = prompt("Please enter a value");
//     console.log(userInput);
//     if(userInput.length === 0) {
//         break;
//     }
// }

//Объекты

let user = new Object();
let websiteUser = {
    username: 'Oxana',
    id: 123,
    currentCity: 'Tallinn',
    someArray: [1, 'ghfdg']
};
console.log(websiteUser);
console.log(websiteUser.username);
console.log(websiteUser['currentCity']);
  



// websiteUser.isModerator = true;
// console.log(websiteUser);

// delete websiteUser.isModerator;

// console.log(websiteUser);

//websiteUser = 0;

console.log(websiteUser.isModerator === undefined);

// key in object
console.log("isModerator" in websiteUser);
console.log("isAdmin" in websiteUser);

// Создать массив из 2 объектов (товары в интернет магазине)
// у каждого объекта есть свойства
// title: string
// description: string
// img: string
// price: number
// isOnSale: boolean
// quantity: number


const items = [ // в квадратных скобках объявляем массив и ложим во внутрь 2 объекта
    {
        title: "Harry Potter and the Goblet of Fire",
        description: "New adventures of Harry Potter and his friends",
        img: "../imgs/img-hp-goblet.jpg",
        price: 24.99,
        isOnSale: false,
        quantity: 10
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        description: "New adventures of Harry Potter and his friends",
        img: "../imgs/img-hp-azkaban.jpg",
        price: 24.99,
        isOnSale: true,
        quantity: 5
    }
];

console.log(items);

// Если товар на скидке, вывести в консоль его финальную цену, умноженную на 20% 
for(let i=0; i < items.length; i++) {
    if(items[i].isOnSale) {
        console.log(items[i].price - items[i].price*0.2);
    }
    //вывести в консоль пару ключ-значение (key: value) каждого товара\
    for (let key in items[i]) {
        console.log(`Свойство ${key} со значением ${items[i][key]}`);
    } // items[i] = object
}

for (let key in websiteUser){
    console.log(key);
    console.log(websiteUser[key]);
}

//Логические операторы

// ИЛИ ||
// И &
// НЕ !
// Оператор нулевого слияния ??

// ИЛИ || - НАХОДИТ ПЕРВОЕ ПРАВДИВОЕ ЗНАЧЕНИЕ
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log (false || false);

let hour = 18;
if(hour < 10 || hour > 19) {
    console.log("офис закрыт")
}else {
    console.log("офис открыт!")
}

console.log("" || "Hello!"); //false true
console.log(undefined || 1 || 0); //false true false

// И & - НАХОДИТ ПЕРВОЕ ЛОЖНОЕ ЗНАЧЕНИЕ
console.log("И &")
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log (false && false);

let minutes = 30;

if(hour === 12 && minutes === 30) {
    console.log('Время пить кофе!');
}

console.log("" && "Hello!");

console.log("" || "Hello!" && "Hi!"); // первым выполняется && а потом ||
// если оба значения правдивы значит возвращается последнее, 
// например "Hello!" && "Hi!", а дальше Hi! сравнивается ( || ) с пустой строкой и возвращается первое правдивое значение

// НЕ !
console.log("НЕ !")
console.log(!"Hello");
console.log(!!"Hello");
// if(!!items.description){
//     console.log(items.description)
// }

console.log(!"" || "Hello!" && "Hi!");

// Оператор нулевого слияния ??
console.log("Hello!" ?? "Hi!");
console.log(0 ?? "Hi!");
console.log("" || "Hi!");

//Функции

// function declaration
function greeting(userName = "user"){
    console.log(`Hello, ${userName}!`);
}

greeting();
greeting('Oxana');
greeting('Alina');
greeting('Tatiana');
greeting('Sergei');
