// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNumber(...arg) {
    let min = arg[0];
    for (const argElement of arg) {
        if (argElement < min) {
            min = argElement
        }
    }
    console.log(min)
}

minNumber(10, 2, 5, 5);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNumber(...arg) {
    let max = arg[0];
    for (const argElement of arg) {
        if (max < argElement) {
            max = argElement;
        }
    }
    return max;
}

maxNumber(45, 5, 79, 3, 1);

// - створити функцію яка повертає найбільше число з масиву

let arrNumbers = [4, 465, 13212, 4, 5, 87, 3];

function maxNumberOfArray(arr) {
    let max = arr[0];
    for (let arrElement of arr) {
        if (max < arrElement) max = arrElement;
    }
    return max;
}

console.log(maxNumberOfArray(arrNumbers));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arithmeticMean(arr) {
    let sum = 0
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum / arr.length;
}

console.log(arithmeticMean(arrNumbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minMaxNumber(...arr) {
    let min = arr[0];
    let max = arr[0];
    for (const arrElement of arr) {

        if (arrElement < min) {
            min = arrElement
        }

        if (arrElement > max) {
            max = arrElement;
        }
    }
    console.log(max);
    return min;
}

console.log(minMaxNumber(1, 2, 5, 8, 7));

// - створити функцію яка заповнює масив рандомними числами.
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomNumbers(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    console.log(arr);
}

randomNumbers(5);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

function randomN(n, limit) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * limit);
    }
    console.log(arr);
}

randomN(5, 5);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function revers(arr) {
    let newArray = [];

    // 1 спосіб.
    for (let i = arr.length - 1, j = 0; i >= 0; i--) {
        newArray[j++] = arr[i];
    }
    // 2 спосіб.
    // for (let i = 0; i < arr.length; i++) {
    //     newArray[arr.length - 1 - i] = arr[i];
    // }
    console.log(newArray);
}

revers([1, 2, 3]);

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function arg() {
    return arguments.length === 1 ? arguments[0] : arguments[0] + arguments[0];
}

arg('hello');


// - створити функцію яка приймає два масиви та скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//

function sumArg(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result[i] = arr1[i] + arr2[i];
        }
    }
    console.log(result);

}

sumArg([1, 2, 3, 4], [2, 3, 4, 5]);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//

function returnerKeys(arr) {
    let keys = [];
    let i = 0;
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            console.log(arrElementKey)
            keys[i++] = arrElementKey;
        }
    }
    return keys;
}

console.log(returnerKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]



function returnerValue(arr) {
    let value = [];
    let i = 0

    for (const arrElement of arr) {
        for (const arrKey in arrElement) {
            value[i++] = arrElement[arrKey]
        }
    }


    return value;
}

console.log(returnerValue(  [{name: 'Dima', age: 13}, {model: 'Camry'}]));




















