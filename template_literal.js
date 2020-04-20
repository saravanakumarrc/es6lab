var customer = {
    name: 'saravanakumarrc',
    age: 30,
}

function display(customer) {
    console.log("customer name is "+ customer.name + " age is "+ customer.age);
}

display(customer);

function displayNew(customer) {
    console.log(`customer name is ${customer.name} 
    age is ${customer.age}`);
}

displayNew(customer); //''`

var c1 = new customer();
c1.name = 'json';
c1.age = 31;

displayNew(c1);