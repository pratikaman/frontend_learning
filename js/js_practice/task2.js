// create a paeg with 2 images and a button. When you click the button, swap the src attribute of the 2 images.

var img1 = document.querySelector('#first-im')
var img2 = document.querySelector('#second-im')

var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    var temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
});