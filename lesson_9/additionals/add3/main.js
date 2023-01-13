// *****(Прям овердоз с рекурсией)
// Создать функцию которая принимает какой-либо элемент DOM-структуры. Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо) дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

function recHTMLTree(el) {

    let prev = document.createElement('button');
    prev.innerText = 'prev';

    let next = document.createElement('button');
    next.innerText = 'next';

    document.body.append(prev, next);

    let arr = [];

    function readHTMLTree(htmlElement) {
        for (const ele of htmlElement.children) {

            if (ele.children.length === 0) {
                arr.push(ele);
            }
            readHTMLTree(ele);
        }
    }

    readHTMLTree(el);

    let i = 0;
    prev.disabled = true;

    prev.onclick = () => {
        next.disabled = false;

        if (arr[i - 1]) {
            arr[i].classList.remove('bgr')
            arr[--i].classList.add('bgr')
        }

        if (i === 0) {
            prev.disabled = true;
        }

    };

    next.onclick = () => {
        prev.disabled = false;

        if (arr[i + 1] !== undefined) {
            arr[i].classList.remove('bgr')
            arr[++i].classList.add('bgr')
        }

        if (i === arr.length - 1) {
            next.disabled = true
        }
    };
    console.log(arr)
}

recHTMLTree(document.body);

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділенні сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let element = document.querySelector('.wrapper');

document.onselectstart = () => {
    console.log(document.getSelection().toString());
};