// - Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

str1.toUpperCase();
str2.toUpperCase();
str3.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

str1.toLowerCase();
str2.toLowerCase();
str3.toLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

str.trim();

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let string = 'Ревуть воли як ясла повні';

let stringToArray = (str) => str.split(' ');

let arr = stringToArray(string);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let newArr = array.map(value => value + '');
console.log(newArr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

let nums = [11, 21, 3];

let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        console.log(arr.sort((a, b) => a - b));
    } else if (direction === 'descending') {
        console.log(arr.sort((a, b) => b - a));
    }
}

sortNums(nums, 'ascending') // [3,11,21]
sortNums(nums, 'descending') // [21,11,3]


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sortedArr = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortedArr)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredArr = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredArr);

// описати колоду карт

let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'as'];
let colors = ['red', 'black'];

let deckOfCards = [];

for (let i = 0; i < cardSuits.length; i++)
    for (let j = 0; j < values.length; j++) {
        let color;

        if (values[j] === 'as') {
            cardSuits[i] = 'Joker'
            if (i === 0 || i === 2) {
                color = 'black';
            } else {
                color = 'red'
            }
        }

        if (cardSuits[i] === 'diamond' || cardSuits[i] === 'heart') {
            color = colors[0];
        }
        if (cardSuits[i] === 'spade' || cardSuits[i] === 'clubs') {
            color = colors[1];
        }

        deckOfCards.push({
            cardSuit: cardSuits[i],
            value: values[j],
            color,
        });

    }

console.log(deckOfCards)


// - знайти піковий туз

let spadeAce = deckOfCards.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(spadeAce[0]);

// - всі шістки
let sixes = deckOfCards.filter(value => value.value === '6')
console.log(sixes);

// - всі червоні карти

let redsCards = deckOfCards.filter(value => value.color === 'red');
console.log(redsCards)


// - всі буби

let diamondCards = deckOfCards.filter(value => value.cardSuit === 'diamond')
console.log(diamondCards)


// - всі трефи від 9 та більше

let clubsCards = deckOfCards.filter(value => value.value !== '6' && value.value !== '7' && value.value !== '8')
console.log(clubsCards);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
let reduce = deckOfCards.reduce((previousValue, card) => {

        if (card.cardSuit === 'spade') {
            previousValue.spades.push(card);
        }

        if (card.cardSuit === 'diamond') {
            previousValue.diamonds.push(card);
        }

        if (card.cardSuit === 'heart') {
            previousValue.hearts.push(card);
        }

        if (card.cardSuit === 'clubs') {
            previousValue.clubs.push(card);
        }

        return previousValue;

    }, {spades: [], diamonds: [], hearts: [], clubs: []}
)

console.log(reduce)