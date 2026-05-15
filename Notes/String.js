"use strict";
var strMyString = 'Hello Typescript';
// charAt() function.
console.log(strMyString.charAt(0)); // Output:H
console.log(strMyString.charAt(2)); // Output:l
// concat() function.
var str1 = 'Hello';
var str2 = ' to Typescript';
console.log(str1.concat(str2)); // Output: Hello to Typescript
var firstName = 'Suroj';
var lastName = 'Ernazarow';
var fullName = firstName.concat(' ', lastName);
console.log(fullName); // Output: Suroj Ernazarow
//repLace() function.
var str12 = "Typescript is a programming Language.";
console.log(str12.replace("Typescript", "JavaScript")); // Output: JavaScript is a programming Language.
// second way
console.log(str12.replace('Type', 'Java')); // Output: JavaScript is a programming Language.
// split() function.
var fruits = 'Apple,Banana,Cherry,Grapes';
var fruit = fruits.split(',');
console.log(fruit); // Output: [ 'Apple', 'Banana', 'Cherry', 'Grapes' ]
console.log(fruits.split(' ', 2)); // Output: [ 'Apple', 'Banana' ]
// substring() function.
var str13 = 'Hello Typescript';
console.log(str13.substring(0, 5)); // Output:Hello
console.log(str13.substring(6)); // Output: Typescript
console.log(str13.toLowerCase()); // Ouput: hello typescript
console.log(str13.toUpperCase()); // Output: HELLO TYPESCRIPT
// trim() function.
var str14 = '   Hello Typescript   ';
console.log(str14.trim()); // Ouput: Hello Typescript.
console.log(str14.trimStart()); // Output: Hello Typescript   
console.log(str14.trimEnd()); // Output:    Hello Typescript
