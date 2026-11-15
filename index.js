
const particleCanvas = document.getElementById('particle-canvas');
const ctx = particleCanvas.getContext("2d");

const heading = document.getElementById('heading');
const glow1 = document.getElementById('glow-purple');
var rect = heading.getBoundingClientRect();


const testbtn = document.getElementById('testbutton');
testbtn.addEventListener("click", () =>{
    alert("Button was clicked!");
})



/* watch out: wipes the canvas clean on resize! */
addEventListener("resize", (event)=> {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height= window.innerHeight;
})




/* ##### Canvas & Particles ##### */
particleCanvas.width = window.innerWidth;
particleCanvas.height= window.innerHeight;
ctx.fillStyle = "white";
ctx.fillRect(10, 10, 100, 100);

class Particle {
    constructor(x, y, w, h, dx, dy) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
        this.dx = dx;
        this.dy = dy;
    }

    draw(){
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.stroke();
    }
}
const particle = new Particle(100, 400, 50, 100, 4, 4);
particle.draw();




console.log(rect.top, rect.right, rect.left, rect.bottom);





