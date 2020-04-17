console.log(this);

setTimeout(function() {
    console.log(this);
}, 1000);

function Customer(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.display = function (){
        //normal
        var that = this; //hack
        setTimeout(function() {
            console.log("full name is " + this.firstname + " " + this.lastname)
        }, 1000);
        //es6
        setTimeout(a => console.log("full name is " + this.firstname + " " + this.lastname), 1000);
    }
} //constructor in javascript

var c1 = new Customer("Saravanakumar", "Radhakrishna");

console.log(c1.display());

