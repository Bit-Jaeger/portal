/* CREDIT for the particle effect: learned a lot by watching NPC Codes' Video: https://www.youtube.com/watch?v=9ki-V5NvSRo&t=879s */

/* #TODO: onMouseOver event -> something should follow the mouse or particles get animated, 
        when hovering a link or something like that! */


/* #### getting elements #### */ 
const particleCanvas = document.getElementById('particle-canvas');
const ctx = particleCanvas.getContext("2d");
const gradientCanvas = document.getElementById('gradient-canvas');
const ctxGrad = gradientCanvas.getContext('2d');
const glow1 = document.getElementById('glow-purple');
const glow2 = document.getElementById('glow-aquamarine');


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
        /* only switch direction after so many updates! 
        if (Math.random() < 0.01){    
            if (Math.random() < 0.5){
                this.boolDirection = true;
            } else {
                this.boolDirection = false;
            }
        }
      ---- switching x direction movement randomly ----
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
    /* create particles with random values */
    const xLocationRandom = (Math.random() * currentHeadingX) + (rect.left);
    const yLocationRandom = (Math.random() * currentHeadingY) + (rect.top)
    const xSpeedRandom = (Math.random() -0.5)* maxSpeedParticle;
    const ySpeedRandom = (Math.random() -0.5)* maxSpeedParticle;
    const boolDir = (Math.random() < 0.5);
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







/* Resize #### watch out: wipes the canvas clean on resize! */
addEventListener("resize", (event)=> {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height= document.body.scrollHeight;

    gradientCanvas.width = window.innerWidth;
    gradientCanvas.height = document.body.scrollHeight;

    /* update heading location for spawning */
    currentHeadingX = (Math.random() * get_heading_x() + rect.left);
    currentHeadingY = get_heading_y();

})









