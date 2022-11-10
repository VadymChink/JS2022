// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++
}

// 2. перебрати його циклом for
for (const number of arr) {
    console.log(number);
}

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
let j = 0;
while (j < arr.length) {
    if (j % 2 !== 0) {
        console.log(arr[j]);
    }
    j++
}

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 5. перебрати циклом while та вивести числа тільки парні значення
let k = 0;
while (k < arr.length) {
    if (k % 2 === 0) {
        console.log(arr[k])
    }
    k++
}

// 6. перебрати циклом for та вивести числа тільки парні значення

for (let i = 0; i < arr.length; i++) {

    if (i % 2 === 0) {
        console.log(arr[i]);
    }

}


// 7. замінити кожне число кратне 3 на слово "okten"

for (let l = 0; l < arr.length; l++) {
    if (arr[l] % 3 === 0) {
        console.log(arr[l])
        arr[l] = 'okten';
    }
}

// 8. вивести масив у зворотньому порядку.

for (let l = arr.length - 1; l >= 0; l--) {
    const arrElement = arr[l];
    console.log(arrElement)
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr2 = [];
for (let l = 0; l < 10; l++) {
    arr2[l] = Math.floor(Math.random() * 10);
    console.log(arr2[l]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr3 = ['hello', 'world', 2022, true, false, 27, {name: 'vadym'}, [1, 2, 3], 33, 'Inna'];
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const arr3Element of arr3) {
    if (typeof arr3Element === "boolean") {
        console.log(arr3Element);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const arr3Element of arr3) {
    if (typeof arr3Element === "number") {
        console.log(arr3Element);
    }

}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const arr3Element of arr3) {
    if (typeof arr3Element === "string") {
        console.log(arr3Element);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let o = 0;
while (o < arr3.length) {
    console.log(arr3[o])
    o++
}

// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let l = 0; l < 10; l++) {
    console.log(l);
    // document.write(`${l}`);
}


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let l = 0; l < 100; l++) {
    console.log(l);
    // document.write(`${l}`);

}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let l = 0; l < 100; l+=2) {
    console.log(l);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let l = 0; l < 100; l++) {
    if (l % 2===0){
        console.log(l);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let l = 0; l < 100; l++) {
    if (l%2 !==0){
        console.log(l);
    }
}