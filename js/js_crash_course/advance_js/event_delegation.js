// event delegation -  jab app event listener se kai sare different elements ke events ko handle kr ske.
// event listener ko parent pr lagao aur unko id, class ya tag ke basis pe differentiate krke different task karao.




var parent = document.querySelector("#parent");

parent.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'play'){
        console.log('play song');
    
    }
    else if(e.target.id === 'pause'){
        console.log('pause song');
    }

});


// document.addEventListener("DOMContentLoaded", function() {
//     var parent = document.querySelector("#parent");

//     parent.addEventListener("click", function () {
//         console.log('worked');
//     });
// });