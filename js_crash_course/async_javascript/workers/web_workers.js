// web workers are a way to run javascript in the background without blocking the main thread.

onmessage = function(data){
    // console.log(data.data);

    let sum = data.data.reduce((acc, item) => acc+item, 0);
    // console.log(sum);
    postMessage(sum);
}