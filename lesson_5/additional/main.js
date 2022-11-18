// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumber = (...arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    console.log(min);
}

minNumber(100, 22, 35, 50, 5, 10);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber = (...arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}

maxNumber(1, 2, 3, 50, 4, 7);

// - створити функцію яка повертає найбільше число з масиву
let array = [50, 60, 406, 60, 6050, 64, 60, 46, 4, 81, 88, 81, 81, 8, 8, 6, 6, 618]

let maxNum = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxNum(array));


// - створити функцію яка повертає найменьше число з масиву


let minNum = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

console.log(minNum(array));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sum = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(sum(array));

// - Дано натуральне число n. Виведіть всі числа від 1 до n.

let n = (n) => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    if (n === 0) {
        n = arr.length
    }

    for (let i = 0; i < n - 1; i++) {
        console.log(arr[i])
    }
}

n(0);

// - Дано два цілих числа A і В. Виведіть всі числа від A до B включно, в порядку зростання, якщо A < B,
// або за зменшенням в іншому випадку.

let numbers = (a, b) => {
    if (a < b) {
        let j = b - a
        for (let i = 0; i < j + 1; i++) {
            console.log(a);
            a++
        }
    } else if (a > b) {
        let j = a - b
        for (let i = 0; i < j + 1; i++) {
            console.log(a);
            a--
        }
    } else {
        console.log(a);
    }
}

numbers(10, 20);


// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let substitution = (arr, i) => {
    if (arr[i + 1]) {
        let n = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = n;
        return arr;
    }else {
        return 'error';
    }
}

console.log(substitution([9, 8, 0, 4], 0));
console.log(substitution([9, 8, 0, 4], 2));
console.log(substitution([9, 8, 0, 4], 3));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let movetoEnd = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(arr.indexOf(arr[i]), 1);
            arr.push(0);
        }
    }
    console.log(arr)
}

movetoEnd([1, 0, 6, 0, 3]);
movetoEnd([0, 1, 2, 3, 4]);
movetoEnd([0, 0, 1, 0]);

// Треба оптимальним способом отримати масив імен користувачів, яким понад 20 років.

const users = [
    {name: 'Iryna', age: 28},
    {name: 'Olexander', age: 19},
    {name: 'Olha', age: 18},
    {name: 'Kateryna', age: 22},
]

let result = () => {
    let res = users.filter(a => a.age > 20).map(b => b.name);
    console.log(res);
}

result(users);