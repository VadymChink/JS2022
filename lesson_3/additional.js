// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому 3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    console.log('Big array');
} else {
    console.log('Little array');
}

// - Маємо 3 числа і між ним нам потрібно знайти те що посередині.
// Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let a = 3;
let b = 1;
let c = 2;

if (a < b && b < c && a < c) {
    console.log(b);
} else if (a < b && b > c && a > c) {
    console.log(a);
} else if (a > b && b > c && a > c) {
    console.log(b);
} else if (a > b && b < c && a < c) {
    console.log(a);
} else if (a > b && b < c && a > c) {
    console.log(c);
} else if (a < b && b > c && a < c) {
    console.log(c);
} else {
    console.log('Error');
}


// - Перепишіть конструкцію if з використанням умовного оператора '?':
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}
a + b < 1 ? result = 'Мало' : result = 'Багато';

console.log(result);

// - Маємо будь яке число від -100, 0, +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let num = 0;
num === 0 ? console.log('0') : num < 0 ? console.log('Негативним') : console.log('Позитивним');


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)


let test = true;

if (test) {
    console.log('True');
} else {
    console.log('False');
}

test === true ? console.log('True') : console.log('False')


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: Не знаєте? ECMAScript!

// let question = prompt('Яка «офіційна» назва JavaScript?');
//
// if (question === 'ECMAScript'){
// document.write('Правильно');
// }else {
//     document.write('Не знаєте? ECMAScript!');
// }


//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('').
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.


let numberApartment = 48 || +prompt('Enter number apartment');

if (numberApartment < 21) {
    console.log('The first entrance to the house');
} else if (numberApartment >= 21 && numberApartment < 49) {
    console.log('The second entrance to the house');
} else if (numberApartment >= 49 && numberApartment < 90) {
    console.log('the third entrance in the house');
} else {
    console.log('Wrong apartment number');
}


// - Ми маємо змінну number в яку користувач задає числове значення, якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО

let number = 10;

number === 10 ? console.log('True') : console.log('False')


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша температура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let t = 20;

if (t >= 10 && t < 22) {
    console.log('Go to OKTEN');
} else {
    console.log('Do not going');
}


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д) і якщо число не підходить тоді вивести Повідомлення - що число не вірне ... .
number = 4
switch (number) {
    case 1:
        console.log('You won car');
        break;
    case 2:
        console.log('You won phone');
        break;
    case 3:
        console.log('You won moto');
        break;
    case 4:
        console.log('You won apple');
        break;
    case 5:
        console.log('You won IPad');
        break;
    default:
        console.log('Wrong number');
}
