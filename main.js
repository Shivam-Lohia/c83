canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastx,lasty;
color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("Last Position of MouseX="+lastx+"Last Position of MouseY"+lasty);
        ctx.moveTo(lastx,lasty);
        console.log("Current Position of MouseX="+currentx+"Current Position of MouseY"+currenty);
        ctx.lineTo(lastx,lasty);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}









