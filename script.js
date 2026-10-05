const root=document.documentElement;const hero=document.querySelector(".hero");const header=document.querySelector(".site-header");const menuToggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");let targetX=innerWidth*.5,targetY=innerHeight*.5,currentX=targetX,currentY=targetY,raf=0;
function setSpotlight(x,y){targetX=x;targetY=y;if(!raf)raf=requestAnimationFrame(animate)}
function animate(){currentX+=(targetX-currentX)*.68;currentY+=(targetY-currentY)*.68;root.style.setProperty("--x",currentX+"px");root.style.setProperty("--y",currentY+"px");if(Math.abs(targetX-currentX)>.15||Math.abs(targetY-currentY)>.15)raf=requestAnimationFrame(animate);else raf=0}
window.addEventListener("pointermove",e=>setSpotlight(e.clientX,e.clientY),{passive:true});
window.addEventListener("pointerdown",e=>setSpotlight(e.clientX,e.clientY),{passive:true});
window.addEventListener("scroll",()=>{header.classList.toggle("scrolled",scrollY>20);updateActiveNav()},{passive:true});
menuToggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open))});
nav?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false")}));
const sections=[...document.querySelectorAll("main section[id]")],links=[...document.querySelectorAll(".nav-link")];
function updateActiveNav(){const y=scrollY+120;let id="home";for(const s of sections)if(s.offsetTop<=y)id=s.id;links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+id))}
setSpotlight(targetX,targetY);