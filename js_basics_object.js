/* //task1
let user = {};
console.log(user);
user.name = "John",
    console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user); */

/* //task2
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let salariu = (Object.values(salaries));
const sum = salariu.reduce((a, b) => {
    return a + b;
}, 0);
console.log(sum); */

/* //task3
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
const multiplyNumeric = () => {
    for (const key in menu) {
        if (typeof(menu[key] == 'number')) {
            menu[key] *= 2;
        }
    }
    console.log(menu);
}
multiplyNumeric(menu); */

/* //task4
const user1 = {
    name: `User 1`,
    age: 123
}
const user2 = Object.assign({}, user1)
user2.name = `User 2`;
user2.age = 321;
console.log(user1);
console.log(user2); */

/* //task5
const info = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: `email @domain.com`,
    },
    address: `Moldova`,
}
info.contacts.phone = +37312345678;
delete info.address;
console.log(info); */

/* //task6
const arr = [{ x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: null, y: 4 },
    { x: 3, y: undefined },
]
const wrong = (obj) => {
    arr.forEach((item, index) => {
        for (const key in item) {
            if (!(item[key])) {
                arr.splice(index)
            }
        }
    })
    console.log(arr);
}
console.log(wrong()); */

/* //task7
const person = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: `email@domain.com`
    },
    address: `Moldova`
} */

//task8
const weekDays = {
    "Mo": 'Понедельник',
    "Tu": 'Вторник',
    "We": 'Среда',
    "Th": 'Четверг',
    "Fr": 'Пятница',
    "Sa": 'Суббота',
    "Su": 'Воскресенье',
}
const translate = (day) => {
    for (let key in weekDays) {
        weekDays[key] = 'Luni',
            weekDays[key] = 'Marti',
            weekDays[key] = 'Miercuri',
            weekDays[key] = 'Joi',
            weekDays[key] = 'Vineri',
            weekDays[key] = 'Simbata',
            weekDays[key] = 'Duminica'
    }
    console.log(weekDays);
}
translate(weekDays);

//task 9

//task10
let person1 = {
    name: `Vasile`,
    age: 123,
    salary: 0,
    contacts: {
        phone: `112`,
        email: 'email @domain.com',
    },
    address: `Moldova`
}
let person2 = {
    name: `Marcel`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: 'emailmarcel@.bk',
    },
    address: `Moldova`
}
let person = {

}

const Intersection = (first, second) => {
    if (Object.values(first) === Object.values(second)) {
        person
    }

}