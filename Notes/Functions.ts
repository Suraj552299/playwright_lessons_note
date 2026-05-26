/*
Functions in Typescript 
Functions are primary blocks of any program.
Advantages of function
1. Code reusability: We can call a function several times without writing again.The code reusability saves time and reuces the program size.
2.Less coding:Function makes our program compact.So we do not need to write many lines of code each time to perform a common task.
3.Easy to debug: It makes the programmer easy to locate and isolate faulty information.

Types of functions in Typescript
1. Named function
A named function is one where you declare and call a function by its given name.
2. Anonymous function
An anonymous function is one which is defined as an expression.
This expression is stored in a varibale.So the function itself does not have  a name.
These functions are invoked using the variable name that the function is stored.
3. Arrow function
*/ 

// Named function
function add_To_Number(a:number,b:number):number{
    return a+b;
}
console.log(add_To_Number(5,10));

// Anonymous function
var anonymousFunction = function(){
    console.log("This is an anonymous function");
}
anonymousFunction();

var minus=function(x:number,y:number):number{
    return x-y;
}
console.log(minus(10,5));

/*
Function Parameters
Parameters are values or arguments passed to a function.
In Typescript,the compiler expects a function to recieve a exact number and type  of arguments as defined in the function signature.
İf the function is expected three parameters, the compiler checks that the user has passed the values for all three parameters i.e it checks for exact matches.
Types of Parameters.
1. Optional Parameters
2. Default Parameters
*/

// Optional Parameters
function message(name:string,language:string):string{
    return "Hello "+name+" welcome to "+language;

}
console.log(message('Suroj','Typescript'));// Hello Suroj welcome to Typescript

function message1(name:string,language1?:string):string{
return 'Hello '+name+' welcome to '+language1;
}
console.log(message1('Suroj')); // Hello Suroj welcome to undefined
console.log(message1('Suroj','Typescript')); // Hello Suroj welcome to Typescript

// Default Parameters
function message2(name:string,language2:string='Java'):string{
  return 'Hello '+name+ ' welcome to '+language2;
}
console.log(message2('Suroj')); // Hello Suroj welcome to Java
console.log(message2('Suroj','Typescript')); // Hello Suroj welcome to Typescript