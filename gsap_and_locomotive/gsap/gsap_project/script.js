var tl = gsap.timeline();

tl.from('.nav-anim', {
     y: -50,
     duration: 0.8,
     opacity: 0,
     delay: 0.5,
     stagger: 0.2 ,
}); 

tl.from('#intro h1', {
        x: -500,
        duration: 0.8,
        opacity: 0,
        stagger: 0.8
});

tl.from('#portfolio img', {
    x: 500,
    duration: 0.8,
    opacity: 0,
    rotate: 90,
    stagger: 0.8,
})