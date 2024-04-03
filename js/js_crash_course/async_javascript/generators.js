// flow of program can be controlled by the generator function.
// at each yield statement, the program stops and waits for the next() method to be called.


function* printNum(){
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    count = 0
    while(true){
        count++
        yield count;
    }
}


const num = printNum();

// console.log(num.next()); 