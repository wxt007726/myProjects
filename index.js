var ctx = cvs.getContext("2d");
var originX = 300;
var originY = 300;
var radius = 100;

window.setInterval(function() {
  //画圆
ctx.beginPath();
ctx.lineWidth = 10;
ctx.fillStyle = "white";
ctx.arc(originX, originY, radius, 0, Math.PI * 2, false);
ctx.stroke();
ctx.fill();

//刻度
for(var i = 0; i < 60; i++) {
  var angle = i * 6 * Math.PI / 180;
  var markRadius = radius - 6;
  var markWidth = 2;
  var markColor = "black";

  if(i % 5 === 0) {
    markRadius = radius - 10;
    markWidth = 4;
    markColor = "red";
  }

  ctx.lineWidth = markWidth;
  ctx.strokeStyle = markColor;
  ctx.beginPath();
  ctx.moveTo(originX + markRadius * Math.cos(angle), originY + markRadius * Math.sin(angle));
  ctx.lineTo(originX + radius * Math.cos(angle), originY + radius * Math.sin(angle));
  ctx.stroke();
}

var now = new Date();
var hour = now.getHours() * 30 + now.getMinutes() * 6 / 12 - 90;
var min = now.getMinutes() * 6 - 90;
var second = now.getSeconds() * 6 - 90;

drawPoint(60, 6, "red", hour);
drawPoint(70, 4, "blue", min);
drawPoint(80, 2, "black", second);
//指针drawPoint
function drawPoint(radius, width, color, angle) {
  angle = angle * Math.PI / 180;
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.moveTo(originX, originY);
  ctx.lineTo(originX + Math.cos(angle) * radius, originY + Math.sin(angle) * radius);
  ctx.stroke();
}
}, 1000);
