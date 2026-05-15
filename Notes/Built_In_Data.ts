// Number.
let num:number=45;
console.log(num);

// String.
var str:string='Hello World';
var str1:string='Welcome to TypeScript to learn about built-in data types.';
console.log(str);
console.log(str1);

// Boolean.
var isTrue:boolean=true;
var isFlase:boolean=false;
console.log(isTrue);
console.log(isFlase);

// Void.
function heyBro():void{
    console.log('Hello Bro');
}

// Null and Undefined
var num1:number|null=null;
var num2:number|undefined=undefined;
console.log(num1);
console.log(num2);

// Any
var randomValue:any=10;
randomValue='Hello';
randomValue=true;
console.log(randomValue);

function display_SomeValue(x:any,y:any){
console.log(x+y);
}
