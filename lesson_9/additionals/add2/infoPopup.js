// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//  При лівому кліку миші зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//  Інформація яку потрібно вивести в popup: Назва тегу, список класів, ід, розміри в форматі висота*ширина


onclick = (ev) => {
    let [oldPopup] = document.getElementsByClassName('popup');
    if (oldPopup) {
        document.body.removeChild(oldPopup);
    }
    let target = ev.target;

    let popup = document.createElement("div");
    popup.classList.add('popup');
    popup.style.left = `${target.clientWidth / 2 + target.offsetLeft}px`;
    popup.style.top = `${15 + target.offsetTop}px`;
    document.body.appendChild(popup);
    console.log(ev)


    let classList = target.classList.value || null;
    let id = target.id || null;

    popup.innerText = `    Name: ${target.localName}, 
    Class list: ${classList},
    ID: ${id},
    Height: ${target.clientHeight},
    Width: ${target.clientWidth},`;
}
