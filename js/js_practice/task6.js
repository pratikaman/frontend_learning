// create a tabbed interface. clicking on the tabs display different content sections without page relaod.

// var home = document.querySelector('#home');
// var about = document.querySelector('#about');
// var contact = document.querySelector('#contact');

// var homeContent = document.querySelector('#home-content');
// var aboutContent = document.querySelector('#about-content');
// var contactContent = document.querySelector('#contact-content');

// home.addEventListener('click', function(e){
//     homeContent.style.display = 'block';
//     aboutContent.style.display = 'none';
//     contactContent.style.display = 'none';
// });

// about.addEventListener('click', function(e){
//     homeContent.style.display = 'none';
//     aboutContent.style.display = 'block';
//     contactContent.style.display = 'none';
// });

// contact.addEventListener('click', function(e){
//     homeContent.style.display = 'none';
//     aboutContent.style.display = 'none';
//     contactContent.style.display = 'block';
// });


// Or more dynamic way

var tabs = document.querySelectorAll('.tab');
var tabContents = document.querySelectorAll('h3');

tabContents[0].style.display = 'block';

tabs.forEach(function (ele, index){
    ele.addEventListener('click', function (){
        hideAllText();
        tabContents[index].style.display = 'block';
    });
});


function hideAllText(){
    tabContents.forEach(function(ele){
        ele.style.display = 'none';
    });
}
