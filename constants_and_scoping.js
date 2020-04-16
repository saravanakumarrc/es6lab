console.log("Hello Team");

//Scopes in existing javascript
//1. functional scope
function fun(){
    var i = 10;
}
//console.log(i);
//2. block scope
var x = 10; //priya
var x = 20; // Javascript hositing; //json
if(true){  
    console.log("x inside block", x);
}
console.log("x", x);

//Dist.js is multiple javascript combined to 1 javascript
//a.js var i = 10; //priya
//b.js var i = 20; //json
//abDist.js 

//new es6 features
// let and const
let i = 10;
const c = 'c';
const b = 'b';
const obj = { name: 'json'};
if(true){
    let i = 20;
    // b = 'bb'; not possible
    const c = 'cc';
    obj.name = 'kavitha';
    console.log("i", i);
    console.log("c", c);
    console.log("name", obj.name);
}
console.log("i", i);
console.log("c", c);
