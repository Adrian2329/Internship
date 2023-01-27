/* //task1
let d = new Date();
const currday = () => {
    const date = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    let back = `${date}/${month}/${year}`
    let line = `${date}-${month}-${year}`
    console.log(back);
    console.log(line);
}
currday('d'); */

/* //task2
let getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
 */

/* //task3
let monthName = (item) => {
    return item.toLocaleString(`en-us`, { month: "long" });
}
console.log(monthName(new Date("10/11/2009")))
console.log(monthName(new Date("12/13/2014"))); */

/* //task4
const compareDate = (first, second) => {
    const Date1 = first.getTime();
    const Date2 = second.getTime()
    if (Date1 === Date2) {
        console.log(`Date1=Date2`);
    } else if (Date1 > Date2) {
        console.log(`Date1>Date2`);
    } else if (Date1 < Date2) {
        console.log(`Date1<Date2`);
    }
}
compareDate(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'));
compareDate(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'));
compareDate(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')); */

/* //task5
const timeConverter = (min) => {
    const hour = Math.round(min / 60)
    const minutes = min % 60;
    return `${min} minutes = ${hour} hour(s) and ${minutes} minute(s)`;
}
console.log(timeConverter(750)); */

/* //task6
const currday = new Date();
const BirthDay = new Date(prompt(`Let your Birthday`))
const getInfo = () => {
    const age = currday.getFullYear() - BirthDay.getFullYear();
    console.log(`${age} age`);
    const month = age * 12;
    console.log(`${month} months`);
    const day = age * 365;
    console.log(`${day} days`);
}
getInfo() */

//task7
const d = new Date(2014, 10, 2);
const addYears = (date, years) => {
    const copy = new Date(date)
    copy.setFullYear(date.getFullYear() + years)
    return copy
}
console.log(addYears(d, 10));

//task8