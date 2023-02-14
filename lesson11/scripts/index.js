"use strict"

console.log("Connected");

//innerText & innerHTML

const uniqueP = document.querySelector('#unique-p');
console.log(uniqueP.innerText);

//uniqueP.innerText = "Hello!";

console.log(uniqueP.innerHTML);

uniqueP.innerHTML = uniqueP.innerText + "<span>Hello!</span><span>How r u?<span/>";

const prgs = document.querySelectorAll('p');

console.log(prgs); //[]

for(let i=0; i < prgs.length; i++) {
    prgs[i].innerText = "Hello!";
}

//Задача: на странице найти элемент main и в начало этого элемента добавить тег <h3>Я -добавленный динамически заголовок!</h3>

const mainSection =document.querySelector('main');

mainSection.innerHTML = "<h3>Я - добавленный динамически заголовок!</h3>" + mainSection.innerHTML;

//Работа с аттрибутами
// elem.hasAttribute(name) – проверяет наличие атрибута.
// elem.getAttribute(name) – получает значение атрибута.
// elem.setAttribute(name, value) – устанавливает значение атрибута.
// elem.removeAttribute(name) – удаляет атрибут.

console.log(uniqueP.hasAttribute('id'));
console.log(uniqueP.hasAttribute('class'));

// if(uniqueP.hasAttribute('id')) {
//     console.log(uniqueP);
//     uniqueP.setAttribute('id', 'prg-text');
// }

const githubLink = document.querySelector('a');
console.log(githubLink);

// console.log(githubLink.getAttribute('href'));
// githubLink.removeAttribute('href');

// const imgElement = document.querySelector('img');
// console.log(imgElement.getAttribute('src').length);

// setTimeout(() => {
//     if(!!imgElement.getAttribute('src')) {
//         imgElement.removeAttribute('src');
//     }
// }, 2000)


const pictureLinks = [
'https://cdn.forestresearch.gov.uk/2021/11/forestry-home-1.jpg',
'https://www.travelandleisure.com/thmb/PtkzpF17oxHfxuTbsnUx7oJY20A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lake-tahoe-california-USLAKES0920-59df9ea26eaf4bbba7620eb604f0af3c.jpg',
'https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095.jpg',
'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=pexels-sagui-andrea-618833.jpg&fm=jpg',
'https://cdn.unenvironment.org/2022-09/nicolai-kramer-unsplash.jpg',
'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?cs=srgb&dl=pexels-pixabay-355321.jpg&fm=jpg',
'https://www.treehugger.com/thmb/nSp8ESJ1N6zq_bsTVL_MoSrKAqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg',
'https://t4.ftcdn.net/jpg/02/69/82/11/360_F_269821180_UAEWi4xE7JhAqOUvOD1JoBLP0YDvqFvA.jpg',
'https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg',
'https://www.timeforkids.com/wp-content/uploads/2021/07/turtle1.jpg'
];


// Написать скрипт, который находит картинки в блоке тега main 
// и первым 5 картинкам меняет url на указанное значение.

const imgs = mainSection.querySelectorAll('img'); //NodeList[]
for(let i=0; i < imgs.length; i++) {
    if(i < 5) {
        imgs[i].setAttribute('src',pictureLinks[i]);
    } else {
        break;
    }
}


//document.createElement(tag)
//document.createTextNode(string)

const blockElement = document.createElement('div');
blockElement.innerHTML = "<h3>I'm a header of this block</h3><p>I'm a paragraph</p>";


// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

const list = document.querySelector('ul');
list.before('Before list');
list.after(blockElement);

const firstLiItem = document.createElement('li');
firstLiItem.innerText = "Item 0";
list.prepend(firstLiItem);

const lastLiItem = document.createElement('li');
lastLiItem.innerText = "Item 3";
list.append(lastLiItem);

// node.remove() - удаление узлов
// const githubLink = document.querySelector('a');

githubLink.remove();

// Задача: Написать функцию, которая удалит все li на странице

function clearElements() {
    if(!element) return;
    const items = document.querySelector(element); //NodeList {}
    for(let i=0; i < items.length; i++) {
        items[i].remove();
    }
}

// clearElements('li');
// clearElements('p');


//Работа со стилями
//classList
//classList.remove(className) - удаляет классы
// classList.add(className) - добавляет классы
// classList.toggle(className) - добавляет классы, если класса у элемента нет. Удаляет, если есть
// classList.replace(classNameToReplace, newClassName)
// classList.contains(className) - вернет boolean (содержится ли класс)

const mainHeadline = document.querySelector('h1');
mainHeadline.classList.add('green');

setTimeout(() => {
    mainHeadline.classList.remove('green');
}, 3000)


const bodyHeadline = document.querySelectorAll('p');
for(let i=0; i < bodyHeadline.length; i++) {
    console.log(bodyHeadline[i]);
    bodyHeadline[i].classList.add('red');
}

// setTimeout(() => {
//     bodyHeadline.classList.remove('red');
// }, 3000)


