// never change a state directly. make copies of the state and then change it.
// can use .map or .filter or spread to make a copy of an array

// ----------------------------------------------------------------------------------------------------------------------

var arr = [1, 2, 3, 4, 5];
var arr2 = arr; // arr2 is a reference to arr
var arr3 = [...arr]; // arr3 is a copy of arr

// ----------------------------------------------------------------------------------------------------------------------


var obj = { a: 1, b: 2, c: 3 };
var {b} = obj;
console.log(b);

//----------------------------------------------------------------------------------------------------------------------

var obj2 = {
    name: "pratik",
    social: {
        facebook: {
            first: "pratik",
            second: "aman"
        }
    }
}
var {second} = obj2.social.facebook;
// ----------------------------------------------------------------------------------------------------------------------

var arr4 = [122, 324, function(){}]
var [first, ,last] = arr4;

// ----------------------------------------------------------------------------------------------------------------------

var arrwFnc0 = (a,b) => {console.log(a)}; // it is not returning anything
var arrwFnc1 = (a,b) => {console.log(a); return 2}; // it is returning
var arrwFnc2 = (a,b) => a; // it is returning
var arrwFnc3 = () => ({name:'andrea', age: 23}); // it is returning an object
var arrFncWithOneArg = a => console.log(`hi ${a}`);
var arrFncWithOneArg2 = a => {console.log('hi')}; //it is not returning anything

// ----------------------------------------------------------------------------------------------------------------------


// array.map
// array.filter
// they do something and return a new array

// map performs an operation on each element of the array and returns a new array
// filter returns a new array with only those elements that satisfy a condition

var arr5 = [1, 2, 3, 4, 5];
var arr6 = arr5.map(e => e*3);
var arr7 = arr5.filter(e => e%2 === 0);

// example - from a array of objects create another array by adding 5 to elements greater that 5.
var arr8 = [33,2,42,3,4,5,64,7,28,9,10,4];
var arr9 = arr8.map(e => e>5 ? e+5 : e); // ternary operator- condition ? true : false

// ----------------------------------------------------------------------------------------------------------------------

