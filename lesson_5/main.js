const PI = 3.14;

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaOfRectangle(a, b) {
    return a * b;
}

let result = areaOfRectangle(3, 5)
console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(r) {
    return PI * r ** 2;
}

console.log(areaOfCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

function areaOfCylinder(h, r) {
    return PI * r ** 2 * h;
}

console.log(areaOfCylinder(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

const users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true},
];

function arrayParser(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

arrayParser(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(txt) {
    document.write(`<p>${txt}</p>`);
}

paragraph('hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(txt) {
    document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`);
}

list('Test');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2(txt, number) {
    document.write('<ul>');
    for (let i = 0; i < number; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write('</ul>');
}

list2('Test2', 1);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список.

let arr = [1, 'Hello', 2, 'World', 3];

function parser(arr) {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write('</ul>');
}

parser(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function user(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} -- ${arrElement.name} -- ${arrElement.age}</div>`);
    }
}

user(users);

// - створити функцію яка повертає найменьше число з масиву.
let arrNumber = [200, 30, 40, 56, 45, 789, 23, 4545, 45, 46, 5421];

function minNumber(arr) {
    let minNumber = arr[0];
    let maxNumber = arr[0];
    for (i = 1; i < arr.length; ++i) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    console.log(minNumber, '--', maxNumber);
}

minNumber(arrNumber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrN = [1,2,10]
function sum(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(sum(arrN));















