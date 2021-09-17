
const img = document.getElementById("rotating_img");

function rotate() {
    const today = new Date();
    let time = 1000*today.getSeconds() + today.getMilliseconds();
    let angle = 2*time/166;
    img.setAttribute("style", "transform: rotate(" + angle + "deg)");
    setTimeout(rotate, 10);
}

rotate();