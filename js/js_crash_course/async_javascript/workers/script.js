

var nums = Array.from({length:10000000}, function(_,b){
    return b+1;
})


let worker = new Worker('web_workers.js');

worker.postMessage(nums);

worker.onmessage = function(data){
    console.log(data.data);
    worker.terminate();
}

