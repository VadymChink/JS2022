// 1. Створити пустий масив та :

let arr = [];


// a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 0; i < 50; i++) {
    let number = Math.floor(Math.random() * 100);
    if (number % 2 === 0 && number !== 0) {
        arr[i] = number;
    } else {
        for (let j = 0; j < 100; j++) {
            let number = Math.floor(Math.random() * 10);
            if (number % 2 === 0 && number !== 0) {
                arr[i] = number;
                break;
            }
        }
    }
}
console.log(arr);

// b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 0; i < 50; i++) {
    let number = Math.floor(Math.random() * 732);
    if (number % 2 === 0 && number !== 0) {
        arr[i] = number;
    } else {
        for (let j = 0; j < 100; j++) {
            let number = Math.floor(Math.random() * 10);
            if (number % 2 !== 0 && number !== 0) {
                arr[i] = number;
                break;
            }
        }
    }
}
console.log(arr);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arr20Numbers = [];

for (let i = 0; i < 20; i++) {
    arr20Numbers[i] = Math.floor(Math.random() * 100);
}
console.log(arr20Numbers);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    arr20Numbers[i] = Math.floor(Math.random() * (732 - 8) + 8);
}
console.log(arr20Numbers);

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < arr.length; i += 3) {
    console.log(arr[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < arr.length; i += 3) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

for (let i = 0; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let example = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < example.length; i++) {
    if (example[i] % 2 === 0 && i !== 0) {
        console.log(example[i - 1]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arrPrice = [100, 250, 50, 168, 120, 345, 188];

let sum = 0;
for (const number of arrPrice) {
    sum += number;
}
console.log(sum);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrRandom = ['hello', 1, 2, 54, true, 'world', {name: 'Vadym'}];
let arrEm = [];
for (let i = 0; i < arrRandom.length; i++) {

}

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом -
// додати його в інший масив.

let arrE = [];

for (let i = 0; i < arrRandom.length; i++) {
    if (typeof arrRandom[i] === 'number') {
        arrE[i] = arrRandom[i]
    }
}

console.log(arrE);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (const city of citiesWithId) {
        if (usersWithId[i].id === city.user_id) {
            usersWithId[i].address = city;
            usersWithCities[i] = usersWithId[i];
        }
    }
}
console.log(usersWithCities)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrN = [465, 1, 21, 5, 6, 46, 79, 354, 654, 434];

for (const number of arrN) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let emptyArr = [];

for (let i = 0; i < arrN.length; i++) {
    emptyArr[i] = arrN[i];
}

console.log(emptyArr);

let arrWord = ['a', 'b', 'c'];
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let wordFor = '';
for (let i = 0; i < arrWord.length; i++) {
    wordFor += arrWord[i];
}
console.log(wordFor);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let wordWhile = '';
let i = 0;
while (i < arrWord.length) {
    wordWhile += arrWord[i];
    i++;
}

console.log(wordWhile);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let wordForOf = '';
for (const arrElement of arrWord) {
    wordForOf += arrElement
}

console.log(wordForOf);
