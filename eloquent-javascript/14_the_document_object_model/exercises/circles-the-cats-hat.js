
let redDot = document.querySelector("#redDot");
let blackDot = document.querySelector("#blackDot");
let angle = Math.PI / 2;
function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    redDot.style.top = (Math.sin(angle) * 100) + "px";
    redDot.style.left = (Math.cos(angle) * 100) + "px";

    blackDot.style.top = 200 + (Math.sin(angle) * - 100) + "px";
    blackDot.style.left = 250 + (Math.cos(angle) * - 100) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);

// go to 08 - positioning