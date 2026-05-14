"use strict";
var x = 10;
var y = 20;
// Arithmetic Operators
var sum = x + y; // Addition
var difference = x - y; // Substraction
var product = x * y; // Multiplication
var quotient = x / y; // Division
var remainder = x % y; // Modulus
var last = x ** y; // Exponentiation
console.log("Arithmetic Operators:");
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);
console.log("Exponentiation: " + last);
// x++ post increment
console.log("Post Increment: " + x++); // Outputs 10, then x becomes 11
// ++x pre-increment
console.log("Pre Increment: " + ++x); // x becomes 12, then outputs 12
// x-- post decrement
console.log("Post Decrement: " + x--); // Outputs 12, then x becomes 11
// --x pre-decrement
console.log("Pre Decrement: " + --x); // x becomes 10, then outputs 10
// Assignment Operators 
var a = 5;
a += 10; //=> a=15;
a -= 5; //=> a=10;
a *= 2; //=> a=20;
a /= 4; //=> a=5;
a %= 3; //=> a=2;
a **= 3; //=> a=8;
console.log("Assignment Operators:");
console.log("a: " + a);
// Comparison Operators
var isEqual = (x === y); // Strict equality
var isNotEqual = (x !== y); // Strict inequality
var isGreater = (x > y); // Greater than
var isLess = (x < y); // Less than
var isGreaterOrEqual = (x >= y); // Greater than or equal to
var isLessOrEqual = (x <= y);
console.log("Comparison Operators:");
console.log("Is Equal: " + isEqual);
console.log("Is Not Equal: " + isNotEqual);
console.log("Is Greater: " + isGreater);
console.log("Is Less: " + isLess);
console.log("Is Greater or Equal: " + isGreaterOrEqual);
console.log("Is Less or Equal: " + isLessOrEqual);
