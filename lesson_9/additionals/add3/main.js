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
        arr.push(htmlElement);
        for (const ele of htmlElement.children) {
            readHTMLTree(ele);
        }
    }

    readHTMLTree(el);

    let i = 0;
    prev.disabled = true;

    prev.onclick = () => {
        next.disabled = false;

        if (arr[i - 1]) {
            console.log(arr[--i])
        }

        if (i === 0) {
            prev.disabled = true;
        }

    };

    next.onclick = () => {
        prev.disabled = false;

        if (arr[i + 1] !== undefined) {
            console.log(arr[++i])
        }

        if (i === arr.length - 1) {
            next.disabled = true
        }
    };
}

recHTMLTree(document.body);

//
//
//
//
//
//
//
//
//
//
//
//
//

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати ліворуч-праворуч натискаєте на стрілку.


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділенні сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

