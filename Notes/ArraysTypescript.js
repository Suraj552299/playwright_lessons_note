"use strict";
/*
An array is sğecial type of data type which can store multiple values of different data types sequentially using s special syntax.
There are 2 types of arrays
1.Single dimensional array
2.Multi dimensional array
*/
//Single dimensional array
var num = [1, 2, 3, 4, 5]; // decleration and initialization are one statement.
var num1; // decleration
num1 = [1, 11, 111, 1111, 11111, 111111, 1111111]; // initialization
console.log(num1);
console.log(num);
for (let i = 0; i < num.length; i++) {
    console.log("Number is : " + num[i]);
}
//Multi dimensional array
var multi = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
for (let i = 0; i < multi.length; i++) {
    for (let a = 0; a < multi[i].length; a++) {
        console.log('Multi Dimensional Array : ' + multi[i][a]);
    }
}
