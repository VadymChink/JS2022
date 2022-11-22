// - Напишіть функцію cutString(str, n), яка ділить строку на підстроки, складаються з n символів.
// document.writeln(cutString('насолода',3)) // [нас,оло,да]


let cutString = (str, n) => {
    let arr = [];

    // for (let i = 0; i < str.length;) {
    //     arr.push(str.substring(0, n))
    //     str = str.slice(n)
    // }
    while (str.length) {
        arr.push(str.substring(0, n));
        str = str.slice(n);
    }

    console.log(arr)


}
cutString('насолода', 3);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый
let str = 'Кожний мисливець хоче знати де сидить фазан';

let delete_characters = (str, length) => {
    return str.substring(0, length);
}

console.log(delete_characters(str, 8));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";

let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase()
}

console.log(insert_dash(str2));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let toUpperCaseFirstLetter = (str) => {
    return str.slice(0, 1).toUpperCase() + str.substring(1, str.length);
}

console.log(toUpperCaseFirstLetter('hello'));


// - Дано список імен:
let n1 = 'Harry.....Potter'
let n2 = 'Ron---     Whisley'
let n3 = 'Hermione  __Granger'
// Написати функцію, яка приймає будь-яке не валідне імя, та нормалізує його в наступнйи вигляд

let normalizes = str => {
    let newStr = str.replace(/[-_.]/g, ' ').split(' ');
    let string;
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i]) {
            newStr[i] = newStr[i] + ' ';
            string = newStr[i] += newStr[i]
        }
    }
    return string.trim();
}
console.log(normalizes(n1));
console.log(normalizes(n2));
console.log(normalizes(n3));


//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomNumberArray = (arrLength) => {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        let number = Math.floor(Math.random() * 100);
        arr.push(number);
    }
    return arr;

}

let arr = randomNumberArray(50);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
console.log(arr.sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати його за допомоги filter, залишивши тільки парні числа (без 0!)

console.log(arr.filter(value => value % 2 === 0 && value !== 0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = str => {
    let split = str.split(' ');

    let map = split.map(value => value.replace(value[0], value[0].toUpperCase()))

    return map.join(' ');
}
console.log(capitalize('hello world'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до
// регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let emailValidator = str => {
    if (!str.includes('@' && str.startsWith('@'))) return 'Wrong email';
    if (str.indexOf('@') + 2 >= str.lastIndexOf('.')) return 'Wrong email';

    return 'Valid Email'
}

console.log(emailValidator('someemail@gmail.com'));
console.log(emailValidator('@gmail.com'));
console.log(emailValidator('someeMAIL@i.ua'));
console.log(emailValidator('some.email@gmail.com'));

// - є масивlet
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sorted = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(sorted)


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symbol = "о";
let str3 = "Астрономія це наука про небесні об'єкти";
// document.writeln(count(str, symb)) // 3

let count = (str, stringSearch) => {
    let count = 0;
    for (const strElement of str) {
        if (strElement === stringSearch) {
            count++;
        }
    }
    return count;
}

console.log(count(str3, symbol));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str4 = "Сила тяжіння застосована до центру мас тіла";
// document.writeln(cutString2(str, 5))

let cutString2 = (str, n) => {
    // let arr = str.split(' ');
    // let iter = arr.length - n;
    // for (let i = 0; i < iter; i++) {
    //     arr.pop(arr[i]);
    // }
    // return arr.join(' ')

    return str.split(' ').slice(0, n).join(' ');
}

console.log(cutString2(str4, 2));