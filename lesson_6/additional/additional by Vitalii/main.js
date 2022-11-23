// створити функцію котра буде повертати суму розрядів числа у вигляді строки
//
// Приклад:
// return '40 + 2'
// return '10 + 2'
// return '70000 + 300 + 4'


let expanded_form = (n) => {
    let str = n + '';
    let arr = [];
    let pushEl;

    for (let i = 0; i < str.length - 1; i++) {
        let f = '';
        for (let j = 0; j < str.length - 1 - i; j++) {
            f += '0'
        }
        pushEl = str[i] + f;

        if (pushEl[0] !== '0') {
            arr.push(+pushEl);
        }
    }
    if (str[str.length - 1] !== '0') {
        arr.push(+str[str.length - 1])
    }

    return arr.join(' + ');

}

console.log(expanded_form(420202));  //# return '40 + 2'
console.log(expanded_form(12));     //# return '10 + 2'
console.log(expanded_form(70304));  //# return '70000 + 300 + 4'
console.log(expanded_form(20020));
