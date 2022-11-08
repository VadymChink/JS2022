// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x;

x = 1;
x = 0;
x = -1;

if (x !== 0) {
    console.log('True');
} else {
    console.log('False');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 45;

if (time > 0 && time < 15) {
    console.log('Перша чверть');
} else if (time >= 15 && time < 30) {
    console.log('Друга чверть');
} else if (time >= 30 && time < 45) {
    console.log('Третя чверть');
} else if (time >= 45 && time < 60) {
    console.log('Четверта чверть');
} else {
    console.log('Enter the correct time');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 31;

if (day > 0 && day < 11) {
    console.log('Перша декада');
} else if (day > 10 && day < 21) {
    console.log('Друга декада');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада');
} else {
    console.log('Wrong date');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

day = 'Sunday';

switch (day) {
    case  'Monday':
        console.log('Monday');
        break;
    case 'Tuesday':
        console.log('Tuesday');
        break;
    case 'Wednesday':
        console.log('Wednesday');
        break;
    case 'Thursday':
        console.log('Thursday');
        break;
    case 'Friday':
        console.log('Friday');
        break;
    case 'Saturday':
        console.log('Saturday');
        break;
    case 'Sunday':
        console.log('Sunday');
        break;
    default:
        console.log('Not day of the week');
}


// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.


let a = 15;
let b = 17;

if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a === b) {
    console.log('Числа рівні');
} else {
    console.log('Not a number');
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//  (хибноподыбне, тобто кастується до false)

let y = b || "default";
console.log(y);