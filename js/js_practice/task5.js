// build a countdown timer that starts when a button is clicked and updates the display in real time.

var btn = document.querySelector("#btn");
var counter = document.querySelector("h2");
var timer;
var isTimerRunning = false;

btn.addEventListener("click", function () {
  var count = 0;

  if (isTimerRunning) {
    clearInterval(timer);
    btn.textContent = "Start";
    isTimerRunning = false;
  } else {
    btn.textContent = "Stop";
    isTimerRunning = true;
    timer = setInterval(function () {
      counter.textContent = count;
      count++;
    }, 50);
  }
});
