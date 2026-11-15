/* CREDIT for the particle effect: learned a lot by watching NPC Codes' Video: https://www.youtube.com/watch?v=9ki-V5NvSRo&t=879s */




const particleCanvas = document.getElementById('particle-canvas');
const ctx = particleCanvas.getContext("2d");
const amountOfParticles = 16;





const heading = document.getElementById('heading');
const glow1 = document.getElementById('glow-purple');
var rect = heading.getBoundingClientRect();


const testbtn = document.getElementById('testbutton');
testbtn.addEventListener("click", () =>{
    animate();
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
ctx.fillStyle = "#8CFFDA";


/* TODO: Color Variable */
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



let particles = [];


for (let i = 0; i < amountOfParticles; i++){
    /*Draw the particles randomly here */
    particles.push(new Particle);
    
}


function animate(){
    const xTitle = rect.right - rect.left;
    console.log(xTitle); 
    particle.draw(xTitle, 100, 50, 50, 4, 4);
}





console.log(rect.top, rect.right, rect.bottom, rect.left);





