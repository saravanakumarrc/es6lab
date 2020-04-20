//old javascript
function Customer(name,age){
    this.name = name,
    this.age = age
}

//es6 way
class Entity {
    constructor(id){
        this.id = id
    }
}

class CustomerES6 extends Entity  {
    static count = 0;
    address = 'chennai';
    constructor(name,age){
        super(1);
        this.name = name;
        this.age = age;
    }
    display(){
        let i = 0;
        console.log(this.name,this.age, this.address);
    }
    display2 = () => {
        console.log(this.name,this.age);
        this.display();
    }
}

var c1 = new Customer("sarava",30);
var c2 = new CustomerES6("melvyn", 29);

console.log(c1);
console.log(c2);
c2.display();
c2.display2();

console.log(CustomerES6.count);

export default CustomerES6;