// this keyword in JavaScript

// In global - this is window object
console.log(this);


// In function - this is window object
function test() {
    console.log(this); 
}
test();


// In method - this is object itself
var obj = {
    username: function(){
        console.log(this.age);
    },
    age: 25
};

obj.username();


// fnc inside method (es5) - this is window object
var obj2 = {
    username: function(){
        // will log object itself
        console.log(this);
        function test(){
            // will log window object
            console.log(this);
        }
        test();
    }
};

obj2.username();



// fnc inside method (es6) - this is object itself
var obj3 = {
    username: function(){
        console.log(this);
        const test = () => {
            console.log(this);
        
        }
        test();

    }
}

obj3.username();



// event - this is element that triggered the event
document.querySelector('button').addEventListener('click', function(){
    console.log(this);
});


// constructor - new object itself


// always use function keyword for methods to avoid confusion with this keyword.
