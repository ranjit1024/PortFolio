const timeLine = gsap.timeline();
const timeLine2 = gsap.timeline();

function breakEachText(){
    const textNode = document.querySelector('.title')
    const text = document.querySelector(".title").textContent;
    const splitedText = text.split("");
    let clutter = "";
    splitedText.forEach((item)=>{
        if(item == " "){
            clutter += `<span>&nbsp</span>`
        }
        else{

            clutter += `<span> ${item} </span>`
        }
    })
    textNode.innerHTML = clutter;
}

function breakTextAccordingToSpace(){
    const textNode = document.querySelector(".sub-title");
    const textNodeText = textNode.innerText;
    const splitTextNodeText = textNodeText.split(" ");
    
    let spanArray = [];
    splitTextNodeText.forEach(item => {
        spanArray += `<span> ${item} </span>`
    });
    textNode.innerHTML = spanArray
}


breakTextAccordingToSpace()
gsap.from(".nav-button", {
    y:-100,
    duration:1,
    opacity:0,
    stagger:1
})
gsap.from("ul button", {
    x:100,
})
gsap.from("nav img", {
    x:-100,
})

timeLine.from("main .greeting", {
    duration:0.77,
    opacity:0,
    transform:"rotate(-7deg)",
    y:10,
    color:"white"
})



timeLine.from(".sub-title span", {
    duration:0.77,
    x:1000,
    opacity:0,
    stagger:0.3,
})

timeLine.to(".overlay", {
    duration:0.5,
    opacity:0.3,
    width:"100%"
});

timeLine.from(".about", {
    duration:0.77,
    opacity:0,
    y:100,
})

timeLine.from("main button", {
    scale:1.2,
    opacity:0,
    Color:"red",
})

gsap.from(".icon img", {
    y:-10,
    duration:0.44,
    opacity:0,
    stagger:0.77,
})

timeLine2.from(".tech-stack ul .tech-image", {
    duration:15,
    opacity:0,
    x:25,
    scale:1.2,
    rotate:6,
    stagger:3,
    scrollTrigger:{
        trigger:".tech-stack",
        scroller:"body",
        // markers:true,
        start:"-20% start",
        end:"+=1000",
        scrub:2,
        pin:true,
    }
    
})
timeLine2.from(".project1", {
    duration:15,
    opacity:0,
    y:100,
    scale:2,
    rotate:10,
    scrollTrigger:{
        trigger:".projects",
        scroller:"body",
        start:" start",
        // end:"+=1000",
        // markers:true,
        scrub:2,
        pin:true,
    }
})

window.addEventListener("mousemove", (e)=>{
    gsap.to(".mouse", {
        
    })
})