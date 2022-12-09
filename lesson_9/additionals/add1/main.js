let users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    },
    {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    },
    {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    },
    {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    },
    {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    },
    {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    },
    {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    },
    {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }
];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let usersAddress = [];

for (const user of users) {
    usersAddress.push(user.address);
}
// - За допомоги циклу проітерувати масив users, записати кожного юзера у свій блок за допомоги document.createElement.
// Всі данні в одному блоці.


for (const user of users) {
    let div = document.createElement('div');

    div.innerText = `${JSON.stringify(user)}`;

    document.body.appendChild(div);
}

// - За допомоги циклу проітерувати масив users, записати кожного юзера у свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

for (const user of users) {

    let div = document.createElement('div');

    div.innerHTML = `
<div>${user.age}</div>
<div>${user.name}</div>
<div>${user.status}</div>
<div>${user.address.city}</div>
<div>${user.address.country}</div>
<div>${user.address.street}</div>
<div>${user.address.houseNumber}</div>
<hr>
`;

    document.body.appendChild(div);
}


// - За допомоги циклу проітерувати масив users, записати кожного юзера у свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам, блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {

    let div = document.createElement('div');
    let divAddress = document.createElement('div');

    div.innerHTML = `
<div>${user.age}</div>
<div>${user.name}</div>
<div>${user.status}</div>
`;
    divAddress.innerHTML = `
<div>${user.address.city}</div>
<div>${user.address.country}</div>
<div>${user.address.street}</div>
<div>${user.address.houseNumber}</div>
<hr>
`;
    div.appendChild(divAddress);

    document.body.appendChild(div);

}


//---------------------------------------------------------------------------------------------------------------------
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати у свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

let wrap = document.createElement("div");
wrap.setAttribute('id', 'wrap');
document.body.appendChild(wrap);


for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    let div = document.createElement("div");
    div.classList.add('rules', `rule${i + 1}`);

    div.innerHTML = `
    <h2>${rule.title}</h2>
    <p>${rule.body}</p>
    `;

    wrap.appendChild(div);
}




















