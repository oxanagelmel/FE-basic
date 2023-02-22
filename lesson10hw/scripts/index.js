"use strict"

console.log("Connected");

console.log('===Task 1===');

// 1 - Описать функцию, которая получает в качестве аргумента число
// и возвращает массив из чисел от 0 до указанного числа. 

function generateArray(value) {
    const result = [];
    for(let i=0; i<=value; i++) {
        result.push(i);
    }
    return result;
}

console.log(generateArray(10));
console.log(generateArray(0));
console.log(generateArray(100));
// первое задание делала по разбору ДЗ

console.log('===Task 2===');

// 2 - Написать результат выполнения выражения и пояснить в комментариях к коду, почему результат именно такой:
// -- "Winter" || "Summer" && "Srping" || "Autumn"
// -- ("Winter" || "Summer") && ("Srping" || "Autumn")
// -- !"" && !505 && !!0 && !"Hello!"
// -- !!(!"" && !505 && !!0 && !"Hello!")
// -- "Как дела?" && (!505 && !!0) || "Hello!"
// -- (false || "Новая строка" && "" || 2023) && !(0 && 10 && "Еще одна строка")
// -- false || "Новая строка" && "" || 2023 && !0 && 10 && "Еще одна строка"


console.log("Winter" || "Summer" && "Srping" || "Autumn"); // Winter - сначала сравнивается && и остаётся последнее так как оба правдивые, потом сравниваются "Winter" || "Srping" || "Autumn" и выводится дервое правдивое значение

console.log(("Winter" || "Summer") && ("Srping" || "Autumn")); // Spring - сначала сравнивается то что в скобках а потом сравнивается в помощью && - "Summer" && "Spring" - оба правдивы так что выводит второе 

console.log(!""   &&   !505   &&  !!0  &&  !"Hello!"); //false - так как оба сравнения: первое !""   &&   !505 и второе !!0  &&  !"Hello!"  являются false, то сравнивая их выходит false --> && всегда false когда находит в строке первое ложное значение. Если бы все значения были бы с !! а не ! то тонда было бы true.


console.log(!!(!"" && !505 && !!0 && !"Hello!")); // false - здесь двойное отрицание. Если бы было один раз ! то было бы true, так как у нас в скобках false.


console.log("Как дела?" && (!505 && !!0) || "Hello!"); //Hello! - ставниваются сначала скобки и они false, потом && и это тоже false, последнее || вводится первое правдивое значение "Hello!"


console.log((false || "Новая строка" && "" || 2023) && !(0 && 10 && "Еще одна строка")); //true - "Новая строка" && "" здесь выходит false и потом дальше в скобках срабнивается || и выводится первое правдивое значение, во вторых скобках у нас выводится пкрвое ложное значение это 0. Поставив перед скобкой ! (НЕ) происходит отрицание ложного значения. В итоге ставнивается true и true --> true


console.log(false || "Новая строка" && "" || 2023 && !0 && 10 && "Еще одна строка");
// Еще одна строка - здесь я не совсем разобралась


console.log('===Task 3===');
// 3 - Написать функцию hasProp, которая принимает в себя объект и название ключа.
// Если ключа с таким названием нет в объекте, функция возвращает false. Если ключ есть, функция возвращает значение этого ключа. 

function hasProp(object, propName) {
    for(let key in object) {
        if(key === propName) {
            return object[key];
        }
    }
    return false;
}

const user = {
    username: "Oxana",
    age: "28"
}

console.log(hasProp(user, "age"));
console.log(hasProp(user, "secondName"));

console.log('===Task 4===');

// Написать функцию поиска адреса(города) пользователя по его id.
// У Вас должен быть массив из пользователей (2-3 элемента достаточно) со свойствами id, username, address.
// Также должна быть отдельная функция (не метод объекта), которая принимает в себя id, находит пользователя по этому id в массиве и возвращает его адрес.
// Если пользователь с таким айди не найден, функция должна вернуть сообщение “Извините, такого пользователя не существует”.

const users = [
{
    id: 25,
    username: "Oxana",
    address: "London"
},
{
    id: 17,
    username: "Elena",
    address: "Moskau"
},
{
    id: 10,
    username: "Sina",
    address: "Ingolstadt"
}
];

function idSearch(id) {
    for(let i = 0; i< users.length; i++) {
        if(users[i].id === id) {
            return users[i].address;
        }
    }
    return "Извините, такого пользователя не существует";
}

console.log(idSearch(5));
console.log(idSearch(25));



// Написать процесс для подготовки вывода информации из интернет-магазина книг на экран. Пока что работаем со скриптом, он обязательно должен содержать массив из объектов (моделей) с книгами. Каждая модель книги представляет из себя набор данных:
//     -- id
//     -- Заголовок
//     -- Автор
//     -- Короткое описание
//     -- Фотография (ссылка на фото)
//     -- Стоимость
//     -- Есть ли на книгу скидка сейчас?
//     -- Метод для формирования ссылки на книгу (ниже приведен пример шаблона ссылки)
//     -- Метод для расчета итоговой стоимости со скидкой (размер скидки может отличаться у разных книг)


// Для каждой модели нужно вывести из массива наших книг все данные пока что в консоль:
//     заголовок
//     автор
//     описание
//     фотография
//     ссылка (формируется по следующему шаблону: books/item-${id}). Пока что сама ссылка никуда не будет вести, но этого достаточно для практики
//     стоимость: если книга находится на скидках, вывести нужно стоимость со скидкой. Иначе - обычную

console.log('===Task 5===');

const generateBookLink = (id) => `books/item-${id}`;

const calculateDiscountedPrice = (price, isOnSale) => 
isOnSale ? price * 0.8 : price;

const books = [
    {
        id: 123,
        title: "Männer sind anders, Frauen auch!",
        autor: "John Gray",
        about: "John Gray hat ein einfaches Rezept für dauerhaftes Liebesglück gefunden: Wenn Männer und Frauen verstehen und akzeptieren, wie unterschiedlich sie denken, fühlen und kommunizieren, können sie trotz aller Gegensätze miteinander glücklich sein. Einfühlsam erklärt Gray, warum guter Wille allein nicht genug ist, wieso Männer und Frauen so oft aneinander vorbeireden und wie man Streit vermeidet, den anderen um Unterstützung bittet und so den Zauber der Liebe lebendig hält. Durch das tiefe Verständnis, das dieser Ratgeber vermittelt, wird aus dem alltäglichen Geschlechterkampf eine liebevolle Partnerschaft.",
        bookCover: "https://images.thalia.media/00/-/7e7a09190ac14ed5bb0f3404722a7a8d/maenner-sind-anders-frauen-auch-gebundene-ausgabe-john-gray.jpeg",
        price: 14.99,
        onSale: false,
        getLink: generateBookLink,
        getDiscountedPrice: calculateDiscountedPrice
    },
    {
        id: 321,
        title: "Harry Potter und der Stein der Weisen",
        autor: "J.K. Rowling",
        about: "Bis zu seinem elften Geburtstag glaubt Harry, er sei ein ganz normaler Junge. Doch dann erfährt er, dass er sich an der Schule für Hexerei und Zauberei einfinden soll – denn er ist ein Zauberer! In Hogwarts stürzt Harry von einem Abenteuer ins nächste...",
        bookCover: "https://images.thalia.media/00/-/b24d55ebd7714524bea265e218b4f47b/harry-potter-und-der-stein-der-weisen-taschenbuch-j-k-rowling.jpeg",
        price: 5.99,
        onSale: true,
        getLink: generateBookLink,
        getDiscountedPrice: calculateDiscountedPrice
    }
];

for(const book of books) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.autor}`);
    console.log(`Description: ${book.about}`);
    console.log(`Cover: ${book.bookCover}`);
    console.log(`Link: ${book.getLink()}`);
    console.log(`Price: ${book.getDiscountedPrice(book.price, book.onSale)}`);
    console.log("\n");
}
// getLink и getDiscountedPrice  я делала с помощью разбора ДЗ - не нашла это в записи урока с 09.02.2023