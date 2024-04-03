// prototypal inheritance


// any function in which this is used and we use new to instantiate it, it is called constructor function.
// 'new' keyword creates a blank object and binds it to 'this' keyword.

function makePerson(name, age) {
    this.name = name;
    this.age = age;
    // this.printMyName = function() {
    //     console.log(this.name);
    // }
}


// prototype is an object that is shared among all the instances of the constructor function.
makePerson.prototype.printMyName = function(){
    console.log(this.name);
}

var me = new makePerson('pratik', 24);
var you = new makePerson('tanya', 25);



