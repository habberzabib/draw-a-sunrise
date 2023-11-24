//setup canvas (cnv) and 2d graphics context
let cnv = document.getElementById("sunrise");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//water
ctx.fillStyle = "";
ctx.fillRect(0, 300, 500, 100);

//sun reflection
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 50, 0, Math.PI);
ctx.fill();

ctx.fillStyle = "red";
ctx.fillRect(225, 300, 50, 5);

ctx.fillStyle = "red";
ctx.fillRect(215, 310, 50, 10);

ctx.fillStyle = "red";
ctx.fillRect(185, 340, 50, 10);

ctx.fillStyle = "red";
ctx.fillRect(125, 300, 50, 10);

ctx.fillStyle = "red";
ctx.fillRect(145, 320, 50, 5);

ctx.fillStyle = "red";
ctx.fillRect(185, 350, 25, 10);

ctx.fillStyle = "red";
ctx.fillRect(190, 355, 15, 10);

ctx.fillStyle = "red";
ctx.fillRect(190, 355, 15, 10);

ctx.fillStyle = "red";
ctx.fillRect(205, 360, 10, 10);

ctx.fillStyle = "red";
ctx.fillRect(195, 370, 10, 10);

ctx.fillStyle = "red";
ctx.fillRect(205, 380, 5, 5);

ctx.fillStyle = "red";
ctx.fillRect(205, 385, 5, 5);

ctx.fillStyle = "red";
ctx.fillRect(200, 385, 5, 5);

ctx.fillStyle = "red";
ctx.fillRect(195, 390, 5, 5);

//sun
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 40, 0, 2 * Math.PI);
// x, y, r, start angle (in radians) dip, end angle
//(x, y) = center of the circle
ctx.fill();
