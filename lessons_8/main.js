// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrUsers = [];
let user = new User(1, 'inna', 'love', 'inna@gmail.com', +380671149391);
let user2 = new User(3, 'inna', 'love', 'inna@gmail.com', +380671149391);
let user3 = new User(2, 'inna', 'love', 'inna@gmail.com', +380671149391);
arrUsers.push(user, user2, user3);
console.log(arrUsers);


// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

let evenNumbers = arrUsers.filter(value => value.id % 2 === 0);
console.log(evenNumbers)

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = arrUsers.sort((a, b) => a.id - b.id);
console.log(sort);

// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

let client1 = new Client(1, 'vasia', 'vinni', 'validol@gmail.com', 38067, ['apple', 'milk']);
let client2 = new Client(2, 'vasia', 'vinni', 'validol@gmail.com', 38067, ['apple', 'milk', 'water']);
let client3 = new Client(3, 'vasia', 'vinni', 'validol@gmail.com', 38067);

clients.push(client1, client2, client3);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостям:
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, name, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.name = name;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`
        model - ${this.model},
        name - ${this.name},
        year - ${this.year},
        maxSpeed - ${this.maxSpeed},
        engineCapacity - ${this.engineCapacity}
        `)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver = {}) {
        this.driver = driver;
    }

}


let car = new Car('astra', 'opel', 2000, 190, 1.4);
car.addDriver({name: 'Vadym', age: 27});
console.log(car)
car.changeYear(2020)
console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class CarClass {
    constructor(model, name, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.name = name;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`
        model - ${this.model},
        name - ${this.name},
        year - ${this.year},
        maxSpeed - ${this.maxSpeed},
        engineCapacity - ${this.engineCapacity}
        `)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver = {}) {
        this.driver = driver;
    }


}

let newCar = new CarClass('astra', 'opel', 2000, 190, 1.4);
console.log(newCar)

newCar.addDriver({name: 'vadym', age: 27})


// -Створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Vadym', 27, 37);

let cinderellas = [];

let cinderella1 = new Cinderella('Inna', 24, 37);
let cinderella2 = new Cinderella('Tania', 25, 39);
let cinderella3 = new Cinderella('Galia', 27, 40);
let cinderella4 = new Cinderella('Alina', 22, 39);
let cinderella5 = new Cinderella('Vika', 21, 42);
let cinderella6 = new Cinderella('Karina', 29, 36);
let cinderella7 = new Cinderella('Dasha', 31, 35);
let cinderella8 = new Cinderella('Dina', 35, 41);
let cinderella9 = new Cinderella('Diana', 18, 42);
let cinderella10 = new Cinderella('Marina', 28, 43);

cinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10)

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let c;
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        c = `${cinderella.name} is true cinderella`
    }
}
console.log(c);

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let trueCinderella = cinderellas.find(value => value.footSize === prince.shoe);
console.log(trueCinderella.name);
