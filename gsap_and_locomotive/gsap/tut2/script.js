// refer docs for more info: https://gsap.com/docs

// gsap.to('#box1', {
//     x: 1200,
//     duration: 2,
//     rotate: 360,
//     scale: 0.5,
//     delay: 1

// })

// gsap.to('#box2', {
//     x: 1200,
//     duration: 2,
//     rotate: 360,
//     scale: 0.5,
//     delay: 2

// }) 

// gsap.to('#box3', {
//     x: 1200,
//     duration: 2,
//     rotate: 360,
//     scale: 0.5,
//     delay: 3

// }) 

// OR
// using timeline

var tl = gsap.timeline();


tl.to('#box1', {
    x: 1200,
    duration: 2,
    rotate: 360,
    scale: 0.5,
    delay: 1

})

tl.to('#box2', {
    x: 1200,
    duration: 2,
    rotate: 360,
    scale: 0.5,

}) 

tl.to('#box3', {
    x: 1200,
    duration: 2,
    rotate: 360,
    scale: 0.5,

}) 
