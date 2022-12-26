// - Сворити масив не цензцрних слів. Сворити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку

let arrBadWorlds = ['shit', 'duck', 'stupid', 'bitch', 'freak'];

let btn = document.getElementById('btn');
let input = document.getElementById('text');

btn.onclick = () => {
    let value = input.value.toLowerCase();

    for (const word of arrBadWorlds) {
        if (value === word) {
            alert('Bad word. Enter correct world')
        }
    }
}

// - Сворити масив не цензцрних слів. Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

btn.onclick = () => {

    let value = input.value.toLowerCase();

    for (const badWord of arrBadWorlds) {

        if (value.includes(badWord)) {
            alert('ata ta ta');
        }

    }
}


// - Создайте меню, яке розвертається/звертається при кліку

 let [menu] = document.getElementsByClassName('menu');
 let [button] = document.getElementsByClassName('btn');

 button.onclick = () => {

     menu.classList.toggle('none');

 }


// - Створити список коментарів, приклад об'екта коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кажний у своєму блоку.
//     Додати кожному коментарію по кнопці для скривання його body.

let arrObjs = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
];


for (const obj of arrObjs) {

    let comment = document.createElement('div');
    document.body.appendChild(comment);

    let btnComment = document.createElement('button');
    btnComment.innerText = 'Click'

    for (const objKey in obj) {
        let div = document.createElement('div');
        div.innerText = obj[objKey];

        btnComment.onclick = () => {
            if (objKey === 'body') {
                div.classList.toggle('none');
            }
        }

        comment.append(div, btnComment);
    }
}


// - Створити кнопку, при кліку на яку вона буде ховати сама себе.

let btnNoneYourself = document.createElement('button');
btnNoneYourself.innerText = 'click';
document.body.appendChild(btnNoneYourself);

btnNoneYourself.onclick = () => {

    btnNoneYourself.style.display = 'none';

}

// -- взять масив користувачів
// - створити три чекбокса. Кожний з них активує фільтр для вище вказаного масива. Фільтри можуть працювати, як разом, так і роздільно.
// 1-й - відфільтрувати користувачів зі статусом false (залишає зі статусом false)
// 2-й - залишає старших 29 років включно
// 3-й - залишає тих у кого місто Київ
// Дані вивести в документ

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 28, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let [checkbox1, checkbox2, checkbox3] = document.getElementsByClassName('checkbox');
let wrap = document.createElement("div");
document.body.appendChild(wrap);


function user(filter) {
    for (const user of filter) {
        let div = document.createElement("div");
        wrap.appendChild(div);
        div.innerText = JSON.stringify(user);
    }
}

function remove() {
    let i = 0;
    while (wrap.children[0]) {
        wrap.removeChild(wrap.children[0])
        i++
    }
}

user(usersWithAddress);

document.onclick = () => {

    remove();

    if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
        let filter = usersWithAddress.filter(user => !user.status && user.age > 29 && user.address.city === 'Kyiv');
        user(filter);
    } else if (checkbox1.checked && checkbox2.checked && !checkbox3.checked) {
        let filter = usersWithAddress.filter(user => !user.status && user.age > 29);
        user(filter);
    } else if (checkbox1.checked && !checkbox2.checked && checkbox3.checked) {
        let filter = usersWithAddress.filter(user => !user.status && user.address.city === 'Kyiv');
        user(filter);
    } else if (!checkbox1.checked && checkbox2.checked && checkbox3.checked) {
        let filter = usersWithAddress.filter(user => user.age > 29 && user.address.city === 'Kyiv');
        user(filter);
    } else if (checkbox1.checked) {
        let filter = usersWithAddress.filter(user => !user.status);
        user(filter);
    } else if (checkbox2.checked) {
        let filter = usersWithAddress.filter(user => user.age > 29);
        user(filter);
    } else if (checkbox3.checked) {
        let filter = usersWithAddress.filter(user => user.address.city === 'Kyiv');
        user(filter);
    } else {
        user(usersWithAddress);
    }
}
