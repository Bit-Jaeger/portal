
const particleCanvas = document.getElementById('particle-canvas');
const ctx = particleCanvas.getContext("2d");

const heading = document.getElementById('heading');
const glow1 = document.getElementById('glow-purple');
var rect = heading.getBoundingClientRect();


const testbtn = document.getElementById('testbutton');
testbtn.addEventListener("click", () =>{
    alert("Button was clicked!");
})

addEventListener("resize", (event)=> {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height= window.innerHeight;
})







console.log(rect.top, rect.right, rect.left, rect.bottom);





ctx.fillstyle = "white";
ctx.fillRect(10, 10, 1000, 1000);
particleCanvas.width = window.innerWidth;
particleCanvas.height= window.innerHeight;



