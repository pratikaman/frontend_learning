// display a progress bar that updates in real time. showing a progress of a task, download or form submission.

var progress = document.querySelector('#progress');
var count = 0

let downloading = setInterval(function(){
    if (count > 100) {
        clearInterval(downloading);
    }
    progress.style.width = count + '%';
    // count += 0.2;
    count++;
}, 
// 20
100
)


// you can make count step smaller and keeo the interval time small to make the progress bar smoother.
// or you can user transition in css to make the progress bar smoother.