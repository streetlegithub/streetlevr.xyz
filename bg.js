const background = document.querySelector('.background');
const main = document.querySelector('main');

let mouseX = 0;
let mouseY = 0;

main.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    updateBackgroundPosition();
});

function updateBackgroundPosition() {
    const xAxis = (window.innerWidth / 2 - mouseX) / 40;
    const yAxis = (window.innerHeight / 2 - mouseY) / 40;

    background.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
}
