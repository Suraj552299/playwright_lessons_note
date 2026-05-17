"use strict";
// Conditional statements in Typescript.
// 1. if -else statement
var person_age = 18;
if (person_age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}
// Multiple conditions using if-else if-else statement
var number1 = 1;
if (number1 > 0) {
    console.log("The number is positive.");
}
else if (number1 < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}
// Ternary operator:
// Syntax: condition?expression1:expression2
var my_age = 20;
var result = (my_age >= 18) ? 'I am eligible to vote.' : 'I am not eligible to vote.';
console.log(result);
// Switch statement:
var day = 3;
switch (day) {
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    case 7:
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}
