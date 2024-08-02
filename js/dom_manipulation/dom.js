// DOM = document object model
// whole html is controlled by the DOM using javascript
// 
// <html lang="en">
//      <head>
//    
//    
//      </head>
//      <body>
//   
//    
//      </body>
// </html> 


//  ----------------------------------------------------------------------------------------------------------------------------------


//    usee           ye krdo          ye hone pe
//     |                |                |
//     ↓                ↓                ↓
//  Selection        Change            Event

//  ----------------------------------------------------------------------------------------------------------------------------------

// Selection - accessing elements in the DOM
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName


// document.querySelector
// In querySelector, we can use any css selector.
// Examle- document.querySelector('#myId'), 
// document.querySelector('.myClass'). will select the first element with the class name 'myClass'
// document.querySelector('element'). will select the first element of that type
// document.querySelectorAll is used to select all the elements that match the selector. 

var myBtn = document.querySelector('button'); // always use single quotes
var heading = document.querySelector('h1');
var body = document.querySelector('body');


//  ----------------------------------------------------------------------------------------------------------------------------------

// Change - changing the elements in the DOM

// textContent - when we want to change the text of an element

// innerHTML - when we want to add element to an element

// style - when we want to change the style of an element

// className - when we want to change the class of an element
// classList.add('className') - when we want to add a class to an element
// classList.remove('className') - when we want to remove a class from an element
// classList.toggle('className') - when we want to toggle a class on an element
// classList.contains('className') - when we want to check if an element has a class

// setAttribute('href', 'https://www.google.com') - when we want to change the attribute of an element
// element.attribute - when we want to change the attribute of an element

// document.createElement('element') - when we want to create an element
// element.appendChild(element) - when we want to add an element to another element
// element.removeChild(element) - when we want to remove an element from another element
// element.remove() - when we want to remove an element




// heading.textContent += ' is on';
// heading.innerHTML = '<em>Hi</em>';

// body.style.backgroundColor = 'white';
// body.style.color = 'black';


var h1 = document.createElement('h1')
h1.textContent = 'I am a new h1';
h1.classList.add('newClass');
body.appendChild(h1);
// 

//  ----------------------------------------------------------------------------------------------------------------------------------


// Event - listening for events in the DOM

// whenever a action is performed on an element, an event is triggered.
// we can listen for these events and perform some action when the event is triggered.

// event.preventDefault() - to prevent the default action of an event

// event.stopPropagation() - to stop the event from bubbling up

// event.target - to get the element that triggered the event

// element.addEventListener('event', function(){}) - to listen for an event on an element

// element.removeEventListener('event', function(){}) - to stop listening for an event on an element


// Examples of events:
// click, mouseover, mouseout, mouseenter, DOMContentLoaded
// mouseleave, keydown, keyup, keypress, 
// input, change, submit, focus, blur, scroll, 
// resize, load, unload, contextmenu, dblclick,
// mousedown, mouseup, mousemove, select, copy,
// paste, cut, drag, drop, dragstart, dragend, dragover, dragenter

 myBtn.addEventListener('click', function(){
    console.log('Button clicked');
    if (body.classList.contains('darkMode')){
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
        heading.textContent = 'Light Mode';
        myBtn.textContent = 'Dark Mode';
    }
    else{
        body.classList.remove('lightMode');
        body.classList.add('darkMode');
        heading.textContent = 'Dark Mode';
        myBtn.textContent = 'Light Mode';
    }
 });


 var pointer = document.querySelector('#circle');


 body.addEventListener('mousemove', function(e){
    // console.log(e.clientX, e.clientY);
    pointer.style.left = `${e.clientX - 20}` + 'px';
    pointer.style.top = `${e.clientY - 20}` + 'px';
 });








