// closures


function counter(){
    var count = 0;


    return function(){
        count++;
        console.log(count);
    }


}


var count = counter(); // even though the counter function has finished executing, the count variable is still accessible to the returned function.

count();
count();
count();



function timer(){

    var a = 23;

    return setTimeout(function(){
        console.log(a);
    }, 1000)

}


var value = timer();