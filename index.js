/* CREDIT for the particle effect: learned a lot by watching NPC Codes' Video: https://www.youtube.com/watch?v=9ki-V5NvSRo&t=879s */

/* #TODO: onMouseOver event -> something should follow the mouse or particles get animated, 
        when hovering a link or something like that! */


/* #### getting elements #### */ 
const particleCanvas = document.getElementById('particle-canvas');
const ctx = particleCanvas.getContext("2d");

const gradientCanvas = document.getElementById('gradient-canvas');
const ctxGrad = gradientCanvas.getContext('2d');


const glow1 = document.getElementById('glow-purple');



/* #### getting heading location #### */
const heading = document.getElementById('heading');

var rect = heading.getBoundingClientRect();
var currentHeadingX = get_heading_x();
var currentHeadingY = get_heading_y();

console.log("currentHeadingX currentHeadingY")


function get_heading_x()
{
    console.log(rect.right - rect.left)
    return (
        rect.right - rect.left
    );
}
function get_heading_y()
{
    return (
        rect.top
    );
    
}


const testbtn = document.getElementById('testbutton');
testbtn.addEventListener("click", () =>{
    animate();
})



/* Resize #### watch out: wipes the canvas clean on resize! */
addEventListener("resize", (event)=> {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height= window.innerHeight;

    gradientCanvas.height = window.innerWidth;
    gradientCanvas.height = window.innerHeight;

    /* update heading location for spawning */
    currentHeadingX = (Math.random() * get_heading_x() + rect.left);
    currentHeadingY = get_heading_y();

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
ctxGrad.fillRect(200, 200, 800, 750);







/* ##### Canvas & Particles ##### */
const amountOfParticles = 128;
const maxSpeedParticle = 3;
particleCanvas.width = window.innerWidth;
particleCanvas.height= window.innerHeight;



class Particle {
    constructor(x, y, w, h, dx, dy, boolDir) {
        this.x = x;
        this.originX = this.x;
        this.y = y;
        this.originY = this.y;
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
            this.x = ((Math.random() * currentHeadingX) + rect.left);
            this.y = currentHeadingY;
            this.alpha = Math.random() * 1.0;   
        }

        this.x += this.dx;
        /* update y and alpha anyway */
        this.y += this.dy;
        this.alpha -= (this.decay / 20);
    }

}

/* ####### init for all of the particles ####### */
let particles = [];


for (let i = 0; i < amountOfParticles; i++){
    /* create particles with random values */
    const xLocationRandom = (Math.random() * currentHeadingX) + (rect.left);
    const yLocationRandom = (Math.random() * currentHeadingY) + (rect.top)
    const xSpeedRandom = (Math.random() -0.5)* maxSpeedParticle;
    const ySpeedRandom = (Math.random() -0.5)* maxSpeedParticle;
    particles.push(new Particle(xLocationRandom, yLocationRandom, 10, 10, xSpeedRandom, ySpeedRandom));
    
}


/* ### frames -> animating particles ### */


const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(particle => {
    particle.draw();
    particle.update();}
    )
}







/* ########################################################## */
/* Beginning to track mouse movement - for particles*/
// Source - https://stackoverflow.com/a/34348306
// Posted by RegarBoy, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-27, License - CC BY-SA 4.0

onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
const cards [] = document.getElementsByClassName('card');











