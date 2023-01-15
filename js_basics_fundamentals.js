/* //task1
let n = prompt("Let number", 0)
switch (n) {
    case '0':
        alert("zero")
        break;
    case '1':
        alert("one")
        break;
    case '2':
        alert("two")
        break;
    case '3':
        alert("three")
        break;
    case '4':
        alert("four")
        break;
    case '5':
        alert("five")
        break;
    case '6':
        alert("six")
        break;
    case '7':
        alert("seven")
        break;
    case '8':
        alert("eight")
        break;
    case '9':
        alert("nine")
        break;
    default:
        alert("This number is greater than 10 or less than 0, or it's not a number. ")
} */

/* //task2
let start = Number(prompt("Let first number"));
let end = Number(prompt("Let last number"));
let n = 0;
for (; start <= end; start++) {
    if (!(start % 2)) {
        n += start;
    }
}
console.log(n); */

/* //task3
let a = Number(prompt("a="));
let b = Number(prompt("b="));
let c = Number(prompt("c="));
MaxValue = Math.max(a, b, c));
MinValue = Math.min(a, b, c));
console.log(MaxValue);
console.log(MinValue); */

/* //task4
const ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1, );
}
console.log(ucFirst("Вася")); */

/* //task5
let string = prompt("Let string"); //3242DSADA
const extractCurrencyValue = (str) => {
    let sir = ``;
    for (let element of str) {
        if (!isNaN(element)) {
            sir += element;
        }
    }
    console.log(sir); //``
}
extractCurrencyValue(string); */

/* //task6
let num = prompt("Let number");
if (num > 0) {
    alert("1")
} else if (num == 0) {
    alert("0")
} else if (num < 0) {
    alert("-1")
} else {
    alert("Error")
} */

/* //task7
let age = prompt("Let age");
if (age > 14 && age <= 90) {
    alert("In the range");
} else {
    alert("Out of range");
} */ // anu >14 si anu<=90

/* //task7 v2
let age = prompt("Let age");
if (!((age < 14) && (age > 90))) {
    alert("In the range");
} else {
    alert("Out of range");
} */

/* //task8
let username = prompt("Enter username");
let password = prompt("Enter password");
if (username && password) {
    alert("Hi!");
} else if (!username && password) {
    alert("Wrong username");
} else if (!password && username) {
    alert("Wrong password");
} else {
    alert("Validation error")
}
console.log(username);
console.log(password); */

/* //task9
let name = prompt("Enter your name");
if (!name || !isNaN(Number(name))) {
    alert("It is not a name")
} else {
    alert(`Hi ${name}`);
    if (confirm("Do you know javascript?")) {
        alert("You are good")
    } else {
        alert("You can start right now")
    }
} */

/* //task10
let num = prompt("Let number");
const dividers = (number) => {
    for (let i = 0; i <= number; i++) {
        if (number % i == 0) {
            alert(`Dividers of ${num} is ${i}`)
        }
    }
}
dividers(num); */