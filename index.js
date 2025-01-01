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


// document.querySelector("#proj-1").addEventListener(e =>{
//     window.location.href = "http://www.w3schools.com"
// })


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
    duration:10,
    opacity:0,
    x:12,
    scale:1.2,
    rotate:6,
    stagger:1,
    overflow:"hidden",
    scrollTrigger:{
        trigger:".tech-stack",
        scroller:"body",
        start:"10% 20%",
        end:"150% 10%",
        scrub:2,
        pin:true,
        top:"100%"
    }
    
})

let tl = gsap.timeline({scrollTrigger:{
    trigger:".projects",
    start: "38% 50%",
    end: "200% 40%",
    scrub:3,
    pin:true,
    duration:10,
   
}})

tl
.to(".proj-text",{
    top:"-7%"
},'a')
.to("#proj-1", {
    top:"30%"
},'a')
.to("#proj-2", {
    top:"100%"
}, 'b')
.to("#proj-1",{
    width:"80%",
    height:'80vh'
},'b')
.to('#proj-2', {
    top:"40%",
},'c')
.to('#proj-2', {
    width:"80%",
    height:'80vh'
},'d')
