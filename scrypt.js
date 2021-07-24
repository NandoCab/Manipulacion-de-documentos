const div = document.querySelector("div");
let winwidth = window.innerWidth;
let winHeigth = window.innerHeight;
console.log("winwidth: ", winwidth);
console.log("winHeigth", winHeigth);
console.log(winHeigth);

div.style.width = winwidth + "px";
div.style.width = winHeigth + "px";

window.onresize = function() {
    winwidth = window.innerWidth;
    winHeigth = window.innerHeight;
    div.style.width = winwidth + "px";
    div.style.height = winHeigth + "px";
    console.log("winwidth: ", winwidth);
    console.log("winHeigth", winHeigth);
    console.log(winHeigth);

    winwidth < 800 && alert(winwidth);
}