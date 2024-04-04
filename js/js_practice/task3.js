// create a form with input fields and submit button.
// use js to validate the form and show error if form is invalid.

// on clicking submit in form it reloads the page. and the js will not run.

var form = document.querySelector('form');
// var user_name = document.querySelector('#user_name')
// var user_email = document.querySelector('#user_email')

// Or
var inputs = document.querySelectorAll('input[type="text"]');

form.addEventListener('submit', function (e){
    e.preventDefault();
    // if (user_name.value.trim() === '' || user_email.value.trim() === ''){
    //     alert('blank');
    // }

    // Or

    // inputs.forEach(function(ele){
    //     if (ele.value.trim() === ''){
    //         alert('blank');
    //     }
    // });

    for (var i = 0; i < inputs.length; i++){
        if (inputs[i].value.trim() === '') {
            alert('blank');
            break;
        }
    }


});

