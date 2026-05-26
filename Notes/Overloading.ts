/*
Function overloading
Typescript provides the concept of function overloading.
We can have multiple functions with the same name but different parameter types and return type.
However, the number of parameters should be the same.
*/
function add_To_Number(a:number,b:number):number;
function add_To_Number(a:string,b:string):string;

function add_To_Number(a:any,b:any):any{
return a+b;
}
console.log(add_To_Number(5,10)); // 15
console.log(add_To_Number('Hello ','Typescript')); // Hello Typescript
console.log(add_To_Number(5,'10')); // 510
console.log(add_To_Number('Hello ',10)); // Hello 10

//* Function Overloading  with different number of parameters and types with same name is not supported.


function display(a:string,b:string):void{

console.log(a+b);
}
/*
function display(a:string):void{

console.log(a+b); // Error: Duplicate function implementation.
}
*/