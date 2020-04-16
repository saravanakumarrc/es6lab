//before es6
var customer = {
    name: 'jason',
    age: 30,
    'customerType': 'A'
}

console.log(customer);

function f(name,age, customerType='A') {
    var customer = {
        name,
        age,
        customerType
    }
    
console.log(customer);
}

console.log(f("json", 32));

var prop = "foo"; 
var o = { [prop]: "hey", ["b" + "ar"]: "there", }; 
console.log(o); 
console.log(o.bar);
