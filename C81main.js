var lpx, lpy;

Canvas = document.getElementById('myCanvas');
ctx = Canvas.getContext('2d');
color = 'red';
width = 4;

var n = screen.width;
var n_width = n - 200;
var n_height = screen.height - 400;

if(n<=992)
{
document.getElementById('myCanvas').width = n_width;
document.getElementById('myCanvas').height = n_height;
document.body.overflow = 'hidden';
}

Canvas.addEventListener('touchstart', my_touchstart);
function my_touchstart(e) {

lpx = e.touches[0].clientX-Canvas.offsetLeft;
lpy = e.touches[0].clientY-Canvas.offsetTop;
}


Canvas.addEventListener('touchmove', my_touchmove);
function my_touchmove(e) {

    current_position_x = e.touches[0].clientX-Canvas.offsetLeft;
    current_position_y = e.touches[0].clientY-Canvas.offsetTop;

    

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lpx, lpy)
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    
lpx = current_position_x;
lpy = current_position_y;

}