
gsap.to("#page2 h1", {
    transform: "translateX(-120%)",
    scrollTrigger: {
        trigger: "#page2", // trigger parent when using pin.
        scroller: "body",
        pin: true,
        scrub: true,
        // markers: true,
        start: "top 0",
        end: "top -100%",
    }
}) 