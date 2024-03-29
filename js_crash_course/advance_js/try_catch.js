// 

function divide(a,b) {
    try{
        if(b === 0){
            // throw "Divide by zero error";
            throw Error("Divide by zero error");
        }
        else{
            return a/b;
        }
    }
    catch(e){
        // console.log(e);
        console.error(e);
    }
}d