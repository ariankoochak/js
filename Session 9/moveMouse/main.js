
const circle = document.getElementById("circle");
function moveCircle(e) {
    let mouseX = -(window.innerWidth - e.clientX) / 10;
    let mouseY = -(window.innerHeight - e.clientY) / 10;
    circle.style.transform = `translate(${mouseX}px,${mouseY}px)`
}

window.addEventListener("mousemove", moveCircle)