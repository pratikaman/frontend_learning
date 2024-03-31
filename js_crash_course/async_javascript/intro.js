// Main call stack and callback queue

// setTimeout
// setInterval
// Fetch API
// Axios or any other http library
// promise - 

// these all are used when we want to do something asynchronously



// 
console.log('World')
setTimeout(function (){
    console.log('Hello')
}, 2000)
console.log('World Again')



// 
var count = 0
var hii = setInterval(function(){
    if (count == 10){
        clearInterval(hii)
    }
    count++;
    console.log('Hii Pratik')

}, 1000);

