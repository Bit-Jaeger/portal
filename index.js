/* CREDIT for the particle effect: learned a lot by watching NPC Codes' Video: https://www.youtube.com/watch?v=9ki-V5NvSRo&t=879s */



/* #### getting elements #### */ 
const particleCanvas = document.getElementById('particle-canvas');
const ctx = particleCanvas.getContext("2d");



const heading = document.getElementById('heading');
const glow1 = document.getElementById('glow-purple');




/* #### getting heading location #### */
var rect = heading.getBoundingClientRect();

    const xTitle = rect.right / 2;
    const yTitle = rect.top;


console.log(rect.top, rect.right, rect.bottom, rect.left);
console.log(xTitle); 






const testbtn = document.getElementById('testbutton');
testbtn.addEventListener("click", () =>{
    animate();
    alert("Button was clicked!");
})



/* Resize #### watch out: wipes the canvas clean on resize! */
addEventListener("resize", (event)=> {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height= window.innerHeight;
})




/* ##### Canvas & Particles ##### */
const amountOfParticles = 16;



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


let particles = [];


for (let i = 0; i < amountOfParticles; i++){
    /*Draw the particles randomly here */
    const xLocationRandom = (Math.random() * 200) + (xTitle / 1.3);
    const xSpeedRandom = (Math.random() * 4);
    const ySpeedRandom = (Math.random() * 2);
    console.log(xLocationRandom);
    particles.push(new Particle(xLocationRandom, yTitle, 10, 10, xSpeedRandom, ySpeedRandom));
    
}


/* ### drawing each particle ### */
particles.forEach(particle => {
    particle.draw();
})


















