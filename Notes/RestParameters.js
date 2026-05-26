"use strict";
/*
Rest Parameters:
İf number of parameters that a function will recieve is not known or can vary,we can use rest parameters.

*/
function message(greetMessage, ...name) {
    console.log(greetMessage + ' ' + name.join(' '));
}
console.log(message('You are welcome ', 'Suraj', 'Kumar')); // You are welcome  Suraj Kumar
