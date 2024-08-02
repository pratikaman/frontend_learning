// custom events


// create a custom event

//      js                  for html
//      |                    |
//      |                    |
const myevent = new Event('smash');

let greet = document.querySelector('h1');

// add event listener
greet.addEventListener('smash', function(){
    console.log('smash event fired');
});

// dispatch the event
greet.dispatchEvent(myevent);



