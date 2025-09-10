const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const A = { x: 200, y: 150 };
const B = { x: 150, y: 250 };
const C = { x: 50, y: 150 };
const D = { x: 250, y: 200 };

const ctx = canvas.getContext("2d");

// Drawing Lines for the points
ctx.beginPath();
ctx.moveTo(A.x, A.y);
ctx.lineTo(B.x, B.y);
ctx.moveTo(C.x, C.y);
ctx.lineTo(D.x, D.y);
ctx.stroke();

drawDot(A, "A");
drawDot(B, "B");
drawDot(C, "C");
drawDot(D, "D");

function drawDot(point, label) {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.font = "bold 14px Arial";
  ctx.fillText(label, point.x, point.y);
}
