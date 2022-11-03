// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [10, 9, 8, 'hello', 'world', true, false, null, undefined, {name: 'Vadym', age: 27}];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[9].name);
console.log(arr[9].age);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: 'Remote',
    pageCount: 208,
    genre: 'Психологія',
};

const book2 = {
    title: 'Rework',
    pageCount: 176,
    genre: 'Бізнес-література',
};

const book3 = {
    title: 'Швидкісний поїзд',
    pageCount: '448',
    genre: 'Сучасні автори',
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив. Кожен автор має поля name,age

const book4 = {
    title: 'Needful Things',
    pageCount: 864,
    genre: 'Жахи',
    authors: [
        {nam: 'Стівен Кінг', age: 75},
    ],
};

const book5 = {
    title: '1984',
    pageCount: 368,
    genre: 'Сучасні автори',
    authors: [
        {nam: 'Орвелл Джордж', age: 46},
    ],
};

const book6 = {
    title: 'Покров',
    pageCount: 384,
    genre: 'Сучасні автори',
    authors: [
        {nam: 'Люко Дашвар', age: 65},
    ],
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

const users = [
    {name: 'vasyl', username: 'validol13', password: 'sdfsdf'},
    {name: 'vadym', username: 'myName', password: 'fjkf'},
    {name: 'inna', username: 'love', password: 'hjkfgjkfgh'},
    {name: 'taras', username: 'kvas', password: 'xdcgvvdv'},
    {name: 'olia', username: 'gopa', password: 'vbzxcvzxcv'},
    {name: 'tania', username: 'shvabra', password: 'sgdhfghsgh'},
    {name: 'petro', username: 'petrus', password: 'fgjdsfgs'},
    {name: 'vitalii', username: 'zmei', password: 'dfkjxdcv'},
    {name: 'dimon', username: 'chomba', password: 'olcjgv;of'},
    {name: 'serhii', username: 'grayHead', password: 'dfovjisdjfiv'},
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);