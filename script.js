const reveal=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
reveal.forEach(el=>{
const windowHeight=window.innerHeight;
const revealTop=el.getBoundingClientRect().top;

if(revealTop<windowHeight-100){
el.classList.add('active');
}
});
});

const glow=document.querySelector('.cursor-glow');

document.addEventListener('mousemove',(e)=>{
glow.style.left=e.clientX+'px';
glow.style.top=e.clientY+'px';
});

const tilt=document.querySelectorAll('.tilt');

window.addEventListener('mousemove',(e)=>{
const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

 tilt.forEach(card=>{
const rotateX=(y*20)-10;
const rotateY=(x*20)-10;

card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
});

const canvas=document.getElementById('bg');
const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<120;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-.5)*1,
dy:(Math.random()-.5)*1
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle='rgba(0,255,255,.5)';
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;
});

requestAnimationFrame(animate);
}

animate();