// створити функцію котра буде повертати суму розрядів числа у вигляді строки
//
// Приклад:
// return '40 + 2'
// return '10 + 2'
// return '70000 + 300 + 4'


let expanded_form = (n) => {
    let str = `${n}`;
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '0') {
            console.log(str[i])
            arr.push(str[i] + '0'.repeat(str.length - 1 - i));
        }
    }

    return arr.join(' + ');

}

// 2 варіант

const expanded_from = (val) => `${val}`.split('').reduce((acc, ch, index, chars) =>
    ch !== '0' ? [...acc, ch + '0'.repeat(chars.length - index - 1)] : acc, []).join(' + ')


console.log(expanded_from(420202));  //# return '40 + 2'
console.log(expanded_from(12));     //# return '10 + 2'
console.log(expanded_form(70304));  //# return '70000 + 300 + 4'
console.log(expanded_form(20020));
