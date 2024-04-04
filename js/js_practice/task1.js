// create a html page with a btn. when clicked change the text of a paragraph element.

var btn = document.querySelector('button');
var para = document.querySelector('p');


btn.addEventListener('click', function(){
    para.textContent = 'This is a new text';
});