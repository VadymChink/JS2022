// Є масив -
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних
// на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let wrapper = document.createElement('div');
document.body.appendChild(wrapper);

let arrFavorite = [];

for (const user of users) {
    let div = document.createElement("div");
    div.innerText = `${user.name} -- ${user.age}`

    let btn = document.createElement('button');
    btn.innerText = 'select';

    div.appendChild(btn);
    wrapper.appendChild(div);

    btn.onclick = () => {
        arrFavorite.push(user);
        localStorage.setItem('users', JSON.stringify(arrFavorite))
    }
}

let favorites = document.createElement('button');
favorites.innerText = 'favorites';
favorites.onclick = () => location.href = 'favorites.html';

wrapper.appendChild(favorites);









