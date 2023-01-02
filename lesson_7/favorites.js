let wrapper = document.querySelector('.wrapper');

let arrFavorites = JSON.parse(localStorage.getItem('users'));

let index;
let btnDelete;

if (arrFavorites) {

    for (const user of arrFavorites) {

        let div = document.createElement("div");
        div.innerText = `${user.name} -- ${user.age}-- ${user.status} `;

        btnDelete = document.createElement('button');
        btnDelete.innerText = 'delete';

        index = arrFavorites.indexOf(user);

        div.appendChild(btnDelete);
        wrapper.appendChild(div);
    }

    btnDelete.onclick = () => {
        location.reload();
        arrFavorites.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(arrFavorites));
    }
}

