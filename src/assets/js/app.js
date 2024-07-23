console.log('file 1');
import { gsap } from 'gsap'


const cursor = document.getElementById('cursor');
const aura = document.getElementById('aura');
let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;
//const [mouseX,mouseY, posX, posY] = 0;

function mouse (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
}
function animate() {
    posX = (mouseX - 10);
    posY = (mouseY + 10);

    gsap.set(aura, {
        css: {
            left: posX,
            top: posY
        }
    });

    requestAnimationFrame(animate);
}


document.body.addEventListener("mousemove", mouse);
animate();
console.log(aura)


