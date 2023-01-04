// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку,
//     при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі
//     поточного поста

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(users => {
//         for (const user of users) {
//
//             let div = document.createElement('div');
//             div.innerText = `${user.id} -- ${user.name}`;
//
//             let button = document.createElement('button');
//             button.innerText = 'Posts';
//
//             button.onclick = () => {
//                 let posts = document.querySelector('.posts');
//                 if (posts) document.body.removeChild(posts);
//
//                 fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
//                     .then(value => value.json())
//                     .then(posts => {
//                         let divPosts = document.createElement('div');
//                         divPosts.classList.add('posts');
//                         document.body.appendChild(divPosts);
//
//                         for (const post of posts) {
//                             let divPost = document.createElement('div');
//                             divPost.innerText = `${post.id} -- ${post.title}`
//                             divPosts.appendChild(divPost);
//                         }
//                     })
//             }
//
//             div.appendChild(button);
//             document.body.appendChild(div);
//         }
//     })


// - Імітуємо наповнення інтернет магазина товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)

// Зберігати товари в масив в локалсторидж. При збереженні товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який
// відобразити на сторінці всі товари.

// На сторінці list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний товар


let [form1] = document.forms;
let btn = document.forms.form1.submit;
let key = 'products';

btn.onclick = (e) => {
    e.preventDefault();

    let obj = new Product(form1.nameOfProduct.value, form1.countOfProduct.value, form1.price.value, form1.picture.value)
    let arr = JSON.parse(localStorage.getItem(key)) || [];
    arr.push({id: arr.length + 1, ...obj});
    localStorage.setItem(key, JSON.stringify(arr));
}

class Product {
    constructor(name, count, price, picture) {
        this.name = name;
        this.count = count;
        this.price = price;
        this.picture = picture;
    }
}
