/* CREDIT for the particle effect: learned a lot by watching NPC Codes' Video: https://www.youtube.com/watch?v=9ki-V5NvSRo&t=879s */

/* #TODO: onMouseOver event -> something should follow the mouse or particles get animated, 
        when hovering a link or something like that! */

/* #### getting elements #### */ 
const particleCanvas = document.getElementById('particle-canvas');
const ctx = particleCanvas.getContext("2d");

const gradientCanvas = document.getElementById('gradient-canvas');
const ctxGrad = gradientCanvas.getContext('2d');


const heading = document.getElementById('heading');
const glow1 = document.getElementById('glow-purple');


const isFired = false;

/* #### getting heading location #### */
var rect = heading.getBoundingClientRect();

    const xTitleHeight = (rect.right - rect.left)
    const yTitleHeight = (rect.top);


console.log(rect.top, rect.right, rect.bottom, rect.left);
console.log(xTitleHeight); 
console.log(yTitleHeight);


const testbtn = document.getElementById('testbutton');
testbtn.addEventListener("click", () =>{
    isFired= false;
    animate();
})



/* Resize #### watch out: wipes the canvas clean on resize! */
addEventListener("resize", (event)=> {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height= window.innerHeight;
    gradientCanvas.height = window.innerWidth;
    gradientCanvas.height = window.innerHeight;


    /* Restart animation to adjust to resizing */
    isFired = false;
    animate();
})


/* ##### Canvas - Gradients ##### */

let gradients = [];

const grad1 = ctxGrad.createRadialGradient(150,75,15,150,75,150);
grad1.addColorStop(0,"lightblue");
grad1.addColorStop(1,"darkblue");

// Fill rectangle with gradient
ctxGrad.width = window.innerWidth;
ctxGrad.height = window.innerHeight;
ctxGrad.fillStyle = grad1;
ctxGrad.fillRect(10,10,window.innerWidth,window.innerHeight);








/* ##### Canvas & Particles ##### */
const amountOfParticles = 128;
const maxSpeedParticle = 2;
particleCanvas.width = window.innerWidth;
particleCanvas.height= window.innerHeight;


/* TODO: Color Variable */
class Particle {
    constructor(x, y, w, h, dx, dy, boolDir) {
        this.x = x;
        this.originX = x;
        this.y = y;
        this.originY = y;
        this.w = w;
        this.h = h; 
        this.dx = dx;
        this.dy = dy;

        this.alpha = 1.0;
        this.decay = (Math.random() *0.1);
        this.boolDirection = boolDir;
    }

    draw(){
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = "#8CFFDA";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.restore();
    }

    update(){
        if (this.x > particleCanvas.width || this.x < 0 || this.y > particleCanvas.height){
            this.x = this.originX;
            this.y = this.originY;
            this.alpha = Math.random() * 1.0;   
        }
        /* only switch direction after so many updates! */
        if (Math.random() < 0.01){    
            if (Math.random() < 0.5){
                this.boolDirection = true;
            } else {
                this.boolDirection = false;
            }
        }
/*      ---- switching x direction movement randomly ----
        if(this.boolDirection){
            this.x -= this.dx;
        }else {
            this.x += this.dx;
        }*/


        this.x += this.dx;
        /* update y and alpha anyway */
        this.y += this.dy;
        this.alpha -= (this.decay / 20);
    }

}

/* ####### init for all of the particles ####### */
let particles = [];


for (let i = 0; i < amountOfParticles; i++){
    /*Draw the particles randomly here */
    const xLocationRandom = (Math.random() * xTitleHeight) + (rect.left);
    const yLocationRandom = (Math.random() * yTitleHeight) + (rect.top)
    const xSpeedRandom = (Math.random() -0.5)* maxSpeedParticle;
    const ySpeedRandom = (Math.random() -0.5)* maxSpeedParticle;
    const boolDir = (Math.random() < 0.5);
    console.log(xLocationRandom);
    console.log(boolDir);
    particles.push(new Particle(xLocationRandom, yLocationRandom, 10, 10, xSpeedRandom, ySpeedRandom));
    
}


/* ### drawing each particle ### */


const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    if(isFired){
        return;
    }
    else{
    const isFired = true;
    particles.forEach(particle => {
    particle.draw();
    particle.update();}
    )}

}














