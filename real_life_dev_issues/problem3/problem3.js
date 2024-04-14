// blocking scroll untill something happens

document.querySelector('#hide').addEventListener('click', () =>{
    document.body.classList.toggle("overflow-hidden");
    if (document.body.classList.contains("overflow-hidden")) {
        document.querySelector('#hide').textContent = "start scroll";
    }
    else {
        document.querySelector('#hide').textContent = "stop scroll";
    }
});