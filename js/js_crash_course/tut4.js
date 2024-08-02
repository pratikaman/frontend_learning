var arr = [1,3,5,2,56,67];


// 1. forEach

arr.forEach(function(e){
    console.log(e);
});


// 2. map

var newArr = arr.map(function(e){
    return e * 2;
});
console.log(newArr);


// 3. filter

var filteredArr = arr.filter(function(e){
    return e % 2 === 0;
});
console.log(filteredArr);


// 4. reduce

var sum = arr.reduce(function(acc, curr){
    return acc + curr;
}, 0);
console.log(sum);

var product = arr.reduce((acc, curr) => {

    return acc * curr;
});

console.log(product)


// 5. find

var found = arr.find(function(e){
    return e > 50;
});
console.log(found);