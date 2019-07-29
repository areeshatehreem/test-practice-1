/*
LINK = https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
 QUESTION : 1 ( Write a JavaScript program to display the current day and time in the following format)???

let today = new Date();
let day = today.getDay();
let dayList = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log("curent day : " + dayList[day]);
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let time = (hour >= 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && time === "PM") {
    if (minute === 0 && second === 0) {
        hour = 12;
        time = "noon";
    } else {
        hour = 12;
        time = "PM";
    }
}


if (hour === 0 && time === "AM") {
    if (minute === 0 && second === 0) {
        hour = 12;
        time = "mid night";
    } else {
        hour = 12;
        time = "AM";
    }
}

console.log("current time : " + hour + time +  " : "  +  minute +  " : " + second )


QUESTION : 2 ( Write a JavaScript program to print the contents of the current window) ??


function currentPage(){
    window.print();
}

QUESTION : 3 PRINT  CURREBT DATE ??? 

let today = new Date();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let fixedTime = (hour >= 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && fixedTime === "PM") {
    if (minute === 0 && second === 0) {
        hour = 12;
        fixedTime = "noon";
    } else {
        hour = 12;
        fixedTime = "PM";
    }
}


if (hour === 0 && fixedTime === "AM") {
    if (minute === 0 && second === 0) {
        hour = 12;
        fixedTime = "mid night";
    } else {
        hour = 12;
        fixedTime = "AM";
    }
}

console.log("current time : " + hour + fixedTime +  " : "  +  minute +  " : " + second )

QUESTION : 4 (Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. )???

*/
let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = ( side1 + side2 + side3)/2;
let area =  Math.sqrt(s *=(( s-side1) * (s-side2) * (s-side3)));

console.log(area);