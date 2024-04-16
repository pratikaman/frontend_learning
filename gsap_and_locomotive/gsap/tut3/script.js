// Scroll Trigger


gsap.from("#circle1",{
    duration:2,
    delay:1,
    scale:0,
    rotate:720,
})

gsap.from("#circle2",{
    duration:2,
    scale:0,
    rotate:720,
    // scrollTrigger: "#circle2"
    scrollTrigger: {
        trigger: "#circle2",
        scroller: "body",
        markers:true, // used for debugging
        start: "top 50%",
        end: "top 30%",
        scrub: true,
    }
})

gsap.from("#circle3",{
    duration:2,
    scale:0,
    rotate:720,
    // scrollTrigger: "#circle3"
    scrollTrigger: {
        trigger: "#circle3",
        scroller: "body",
        // markers:true, // used for debugging
        start: "top 50%",
    }
})




