// scroll trigger with pin

gsap.to('#page2 img', {
    width: "100%",
    scrollTrigger: {
        trigger: "#page2", // while using pin we target the parent of element
        scroller: "body",
        markers:true,
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        pin: true,
    }
}); 