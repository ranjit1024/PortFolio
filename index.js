// nav Animation
gsap.from(".nav-button", {
    y:-100,
    duration:1,
    opacity:0,
    stagger:1
})
gsap.from("ul button", {
    x:100,
})
gsap.from("img", {
    x:-100,
})
gsap.from(".title",{
    y:100,
    opacity:0
})
