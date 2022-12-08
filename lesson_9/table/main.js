// *** Створити 3 инпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


let [form] = document.forms;

form.btn.onclick = () => {
    let table = document.createElement('table');

    for (let i = 0; i < form.row.value; i++) {
        let tr = document.createElement('tr');
        for (let i = 0; i <  form.column.value; i++) {
            let td = document.createElement('td');
            td.innerText = form.text.value;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    document.body.appendChild(table)
}
