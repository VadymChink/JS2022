// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в
// параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let h2Arr = document.getElementsByTagName("h2");

let content = document.getElementById('content');
let ul = document.createElement('ul')

content.appendChild(ul);

for (const h2ArrElement of h2Arr) {

    let li = document.createElement('li');

    li.innerText = h2ArrElement.innerText;

    ul.appendChild(li);
}


// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let arr = [];

function recurs(value) {
    let children = value.children;

    for (const child of children) {

        let classList = child.classList;

        for (const classListElement of classList) {
            arr.push(classListElement);
        }

        recurs(child);
    }
}

recurs(document);

arr = arr.join('').split('rules');

arr[0]= 'rules';

console.log(arr);


