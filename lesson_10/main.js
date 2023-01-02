// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - user id)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let ul = document.createElement("ul");
document.body.appendChild(ul);


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        for (const user of users) {

            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`
            a.innerText = 'user details'

            let li = document.createElement('li');
            li.innerText =` ${user.id} ${user.name} `
            li.appendChild(a);

            ul.appendChild(li)
        }

    })
