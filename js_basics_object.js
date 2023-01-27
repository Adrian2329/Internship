/* //task1
const user = {};
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
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
const salariu = Object.values(salaries);
const sum = salariu.reduce((a, b) => {
    return a + b;
}, 0);
console.log(sum); */

/* //task3
const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
const multiplyNumeric = (item) => {
    for (const key in item) {
        if (typeof(item[key] == 'number')) {
            item[key] *= 2;
        }
    }
    console.log(item);
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

/* //task8
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
translate(weekDays); */

//task 9

/* //task10
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
    for (key in object) {
        if (person1[key] === person2[key]) {
            person3.
        }
    }
} */

/* //tak11
let grup = [{
        name: 'First',
        marks: [8, 10, 7, 5, 4],
    },
    {
        name: 'Second',
        marks: [9, 10, 2, 5, 7],
    },
    {
        name: 'Third',
        marks: [5, 7, 8, 9, 10],
    },
    {
        name: 'Fourth',
        marks: [2, 2, 2, 5, 2],
    },
    {
        name: 'Fifth',
        marks: [6, 10, 10, 9, 8],
    }
]

const average = () => {
    for (let pers of grup) {
        pers.average = pers.marks.reduce((a, b) => {
            return a + b / pers.marks.length;
        }, 0);
        console.log(pers);
    }
}
average(grup);

const five = (item) => {
    for (let element of item) {
        if (element.average > 5) {
            console.log(element.name, element.average);
        }
    }
}
five(grup);

const MinMax = (arr) => {
    let MaxValue = grup[0].average;
    let MinValue = grup[0].average;
    for (let element of arr) {
        if (element.average > MaxValue) {
            MaxValue = element.average;
        }
        if (element.average < MinValue) {
            MinValue = element.average;
        }
    }
    console.log(MaxValue);
    console.log(MinValue);
}
MinMax(grup);


const grupSorted = grup.sort((a, b) => b.average - a.average);
console.log(grupSorted);

const medcl = grup.reduce((acum, i) => acum += i.average, 0) / grup.length;

grup.forEach(person => {
    if (person.average > medcl) {
        console.log(person);
    }
}) */

//task12
const person = {
    first: 'Ion',
    last: 'Creanga',
    company: 'Amintiri din copilarie SRL',
}
let pers = ``;
const { first, last, company } = person;
pers = `Name:${first} ${last},Company:${company}`;
console.log(pers);