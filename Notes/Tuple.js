"use strict";
/*
Tuple is a new data type which includes multiple set of values of different data types.
It represents a heteroneous collection of values.
var employee=[91,'Steve'];
or
var employee:[number,string]=[1,'Steve'];
*/
var employeeId = 91;
var employeeName = 'Suroj';
var employeeSalary = 75000;
var employeeInfo = [employeeId, employeeName, employeeSalary];
console.log(employeeInfo);
// Accessing tuple values
console.log(employeeInfo[0]); //91
console.log(employeeInfo[1]); // 'Suroj'
console.log(employeeInfo[2]); // 75000
// add elements to tuple in order to add elements to tuple we can use push method.
employeeInfo.push('Developer');
employeeInfo.push('IT Department');
console.log(employeeInfo); // [91, 'Suroj', 75000, 'Developer', 'IT Department']
// remove elements from tuple in order to remove elements from tuple we can use pop method().
// pop method() removes the last element of the tuple and returns it.
var removedElement = employeeInfo.pop();
console.log(removedElement); // 'IT Department'
console.log(employeeInfo); // [91, 'Suroj', 75000, 'Developer']
