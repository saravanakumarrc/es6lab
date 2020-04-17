var customer = {
    name: 'sara',
    age: 30,
    address: '29/2, salem'
}

var c1 = customer;
c1.age = 32;
var c2 = {...customer}; //spred;
c2.age = 33;

console.log(c1);
console.log(customer);
console.log(c2);

var arr = [1,2,3,4]; 
var [arr2, ...arr3] = arr; //Rest of ES6
var [arr4, arr5] = arr; //no rest sample possiblity

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

function display(customer) {
    console.log("name", customer.name, "age", customer.age);
}

display(c1);

function display2({ name, age }) { //destructure
    console.log("name", name, "age", age);
}

display(c2);