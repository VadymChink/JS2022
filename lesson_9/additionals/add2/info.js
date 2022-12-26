// - Описати скрипт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//  При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//  Інформація яку потрібно вивести:
//  Назва тегу,
//  список класів,
//  ід,
//  розміри в форматі висота*ширина


onclick = (ev) => {
    let target = ev.target;

    let classList = target.classList.value || null;
    let id = target.id || null;

    console.log(`    Name: ${target.localName}, 
    Class list: ${classList},
    ID: ${id},
    Height: ${ target.clientHeight},
    Width: ${target.clientWidth},`);
}
