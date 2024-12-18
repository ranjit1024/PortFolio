const timeLine = gsap.timeline();
const timeLine2 = gsap.timeline();
const touch = document.querySelector(".get-in-touch button");

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



timeLine.to(".sub-title span", {
    duration:0.77,
    x:1000,
    opacity:1,
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

timeLine2.from(".tech-image", {
    duration:15,
    opacity:0,
    x:12,
    scale:1.2,
    rotate:6,
    stagger:3,
    overflow:"hidden",
    scrollTrigger:{
        trigger:".tech-stack",
        scroller:"body",
        // markers:true,
        start:"-90% start",
        end:"+=100",
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
    overflow:"hidden",
    scrollTrigger:{
        trigger:".projects",
        scroller:"body",
        start:"-50% start",
        end:"+=200",
        // markers:true,
        scrub:2,
        pin:true,
    }
})