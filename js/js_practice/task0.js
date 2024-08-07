// 1 -------------------------------------------------------------------------------------------------------------------------

function reverseString(str) {

        arr = str.split(" ")

        for (var i = 0; i < arr.length; i++ ){

            var temp = ''

            for (var j = arr[i].length - 1; j >= 0; j--){
                temp += arr[i][j]
            }

            arr[i] = temp

        }

        console.log(arr.join(" "))

}

function reverseString2(str) {

    var reversedStr = str.split(" ").map((word) => {
        return word.split('').reverse().join("");
    }).join(" ");

    console.log(reversedStr);

}

reverseString('Hello World')
reverseString2('Hello World')

// 2 -------------------------------------------------------------------------------------------------------------------------

function checkArray(arr) {
    return Array.isArray(arr);
}

console.log(checkArray([1, 2, 3])); // true
console.log(checkArray(123)); // false 

// 3 -------------------------------------------------------------------------------------------------------------------------

function emptyArray(arr) {
    arr.length = 0;
}

var arr = [1, 2, 3];
emptyArray(arr); 
console.log(arr)

// 4 -------------------------------------------------------------------------------------------------------------------------

function checkInteger(num) {
    // return Number.isInteger(num);
    return typeof num === 'number' && num % 1 === 0;
}

console.log(checkInteger(10.4));

// 5 -------------------------------------------------------------------------------------------------------------------------

function duplicateArray(arr) {
    return arr.concat(arr);
}

var arr2 = [1, 2, 3];
var arr3 = duplicateArray(arr2); 
console.log(arr3)

// 6 -------------------------------------------------------------------------------------------------------------------------

function revNumber(num){
    var reversed = '';

    var numString = num.toString().split("")

    for (var i = numString.length - 1; i >= 0; i--){
        reversed += numString[i]
    }

    return parseInt(reversed)
    
} 

function revNumber2(num){

    return parseInt(num.toString().split("").reverse().join(""))
} 

function revNumber3(num){

    revArr = []

    while (num > 0) {
        revArr.push(num % 10);
        num = Math.trunc(num / 10)
    }

    return parseInt(revArr.join(""))
} 


console.log(revNumber(123456))
console.log(revNumber2(123456))
console.log(revNumber3(123456))

// 7 -------------------------------------------------------------------------------------------------------------------------

function checkPal(str){
    revStr = str.split("").reverse().join("")

    return revStr === str;
}
console.log(checkPal("lool"))

// 8 -------------------------------------------------------------------------------------------------------------------------

function stringAlphabetical(str) {
    return str.split("").sort().join("")
}

console.log(stringAlphabetical("praatik"))

// 9 -------------------------------------------------------------------------------------------------------------------------

function capitalizeKaro(sentence){

    return sentence.split(" ").map((word) => {
       return word.charAt(0).toUpperCase() + word.substring(1) 
    }).join(" ");
}

console.log(capitalizeKaro("pratik aman"))

// 10 -------------------------------------------------------------------------------------------------------------------------

function countLetters(str){
    var letterDict = {}

    for (var i = 0; i < str.length; i++) {

        var keyVal = str.charAt(i);

        if (letterDict.hasOwnProperty(keyVal)) {

            letterDict[keyVal] += 1
        }
        else {
            letterDict[keyVal] = 1
        }

    }

    return letterDict
}

console.log(countLetters("abrakadabra"))

// 11 -------------------------------------------------------------------------------------------------------------------------

function sumArray(arr){


    return arr.reduce((acc, curr)=> {
        if (typeof(curr) === 'number') {

        return acc += curr 

        }

        return acc
    });

}

console.log(sumArray([3,6,'pra',2,5, "ama"]))

// 12 -------------------------------------------------------------------------------------------------------------------------

function cloneArr(arr){
    return [...arr]
}

function cloneArr2(arr){
    var newArr = []

    arr.forEach(element => {
        newArr.push(element)
    });

    return newArr
}

function cloneArr3(arr){
    
    var newArr = arr.map((el) => el)

    return newArr
}


function cloneArr4(arr){
    
    var newArr = arr.filter((el) => true)

    return newArr
}

console.log(cloneArr([3,5,5]))
console.log(cloneArr2([3,5,5]))
console.log(cloneArr3([3,5,5]))
console.log(cloneArr4([3,5,5]))

// 13 -------------------------------------------------------------------------------------------------------------------------

function retrieveFirstN(arr, n=1){

    if (n > arr.length) return `${n} elements nhi hain`;

    arr2 = [...arr]
    arr2.splice(n)

    return arr2

}

console.log(retrieveFirstN([1,5,7,9,5,8,45], 4))

// 14 -------------------------------------------------------------------------------------------------------------------------

function retrieveLastN(arr, n=1){

    if (n > arr.length) return `${n} elements nhi hain`;

    arr2 = [...arr]

    return arr2.splice(-n)

}

console.log(retrieveLastN([1,5,7,9,5,8,45], 2))


// 15 -------------------------------------------------------------------------------------------------------------------------

function countElements(arr) {
    freq = {}

    arr.forEach(ele => {
        if (freq.hasOwnProperty(ele)) {
            freq[ele] ++;
        }
        else {
            freq[ele] = 1
        }
    })

    return freq
}

console.log(countElements([1,3,4,2,1,3,6,9,4]))


// 16 -------------------------------------------------------------------------------------------------------------------------

function shuffleArr(arr){

    var arrlength = arr.length;

    while(arrlength > 0){


        var indexToExchange = Math.floor(Math.random()*(arrlength - 1))


        var temp = arr[arrlength - 1]
    
        
        arr[arrlength - 1] = arr[indexToExchange]
        arr[indexToExchange] = temp

        arrlength--;


    }

    return arr

}

console.log(shuffleArr([1,2,3,4,5,6,7]))


// 17 -------------------------------------------------------------------------------------------------------------------------

function unionArray(arr,arr2) {

    return [... new Set(arr.concat(arr2))].sort((a, b) => a - b);
}

console.log(unionArray([40,23,100,23,1,5], [100, 76, 9]))