// build a character counter for a textarea or input field, which updates in realtime as the user types. and enforce a char limit.

var textArea = document.querySelector('textarea');
var counter = document.querySelector('h3');

textArea.addEventListener('input', function (e) {
    counter.textContent = `Text count: ${e.target.value.length}`;
});
 