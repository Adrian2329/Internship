/* //task1 for
let arr = []; //n elemente
let n = Number(prompt("Let max range"));
for (let i = 0; i < n; i++) { // introducem pina la n elemente
    let element = Number(prompt(`Enter a ${i+1} number`));
    if (isNaN(element)) {
        alert("Is not a number")
    } else {
        arr.push(element);
    }
}
console.log(arr); */
/* for (let e = 0; e < arr.length; e++) {
    console.log(e);
} */

//for in
/* for (let e in arr) {
    console.log(e);
} */

/* //for of
for (let e of arr) {
    console.log(e);
} */

/* //foreach
arr.forEach((e, index, array) => {
    console.log(e);
    console.log(index);
    console.log(array);
}); */

/* //map
let ar = arr.map((e) => e * 2);
console.log(ar); */

/* //task 2
let arr = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
let five = [];
let reverse = arr.sort((a, b) => a - b);
let MaxValue = Math.max(...arr);
let MinValue = Math.min(...arr);
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
five = arr.filter((element) => element > 5);
console.log(MaxValue, MinValue);
console.log(average);
console.log(reverse);
console.log(five);
let media = arr.filter((element) => element > average); */
/* arr.forEach((element) => {
    if (element > average) {
        console.log(element);
    }
}) */

/* //task3
styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles.splice(Math.round(styles.length) / 2, 1, "Классика");
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles); */

/* //task4
let arr = [];
const sumInputNumbers = (num) => {
    let suma = 0;
    let element = ``;
    do {
        element = Number(prompt("Give element"));
        if (!isNaN(element)) {
            arr.push(element)
        }
    } while (!isNaN(element) && element >= 0);
    for (element of arr) {
        suma += element;
    }
    return suma;
}

console.log(sumInputNumbers()); */

/* let suma = 0;
let arr = [];
let element;// Number(0)
const sumInputNumbers = (num) => {
    element = Number(prompt("Give element"));
    if (!isNaN(element) && (element)) {
        arr.push(element);
    } else if(element === null || element === "") {
        alert("Error")
    }
    for (element of arr) {
        suma += element;
    }
    return arr, suma;
}

console.log(sumInputNumbers()); */

/* //task5
let arr = [1, 2, 3];
let square = (item) => {
    arr.forEach(num => {
        let sqr = num * num;
        console.log(sqr);
    })
}

let convert = (fn, array) => {
    return square(arr);
}
console.log(convert(square, arr));
console.log(arr); */



/* //task6
number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
number.splice(Math.round(number.length) / 2, 1, 0, 0, 0)
console.log(number); */

/* //task7
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const extract = (start, end) => {
    console.log(number.slice(start, end))
}
extract(2, 5); */

//task8
let color = prompt("Give color")
const colors = ["red", "green", "blue"];
const checkColors = (color) => {
    alert(colors.indexOf(color));
}
checkColors(color);

/* //task9
const arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
const filter = (element) => {
    arr.forEach(item => {
        if (isNaN(item)) {

        }
    });
} */

/* let arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
arr = arr.filter(item => typeof(item) == 'number');
console.log(arr); */

/* //task10
let arr = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1]
const uniqueSorted = (element) => {
    element = new Set(arr);
    console.log(element);
}
uniqueSorted(arr.sort()); */

/* //task11
const colors = ["white", "blue", "yellow", "black", "red", "green"]
let firstColor = colors.slice(0, 2);
let secondColor = colors.slice(2, 4);
let Other = colors.slice(4, 6);
console.log(firstColor);
console.log(secondColor);
console.log(Other); */

/* let colors = ["white", "blue", "yellow", "black", "red", "green"] = [FirstColor, SecondColor, Other] */