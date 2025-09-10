const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const A = { x: 200, y: 150 };
const B = { x: 150, y: 250 };
const C = { x: 50, y: 150 };
const D = { x: 250, y: 200 };

const ctx = canvas.getContext("2d");

// Animation
let t = -1;
animate();

function animate() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
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

  // Getting the middle points
  const M = {
    x: lerp(A.x, B.x, t),
    y: lerp(A.y, B.y, t),
  };

  const N = {
    x: lerp(C.x, D.x, t),
    y: lerp(C.y, D.y, t),
  };

  drawDot(M, "M", t < 0 || t > 1);
  drawDot(N, "N", t < 0 || t > 1);

  const I = getIntersection(A, B, C, D);
  drawDot(I, "I");
  
  t += 0.005;

  requestAnimationFrame(animate);
}

function getIntersection(A, B, C, D) {
  /*
    Ix = Ax + (Bx-Ax)t = Cx+(Dx-Cx)u
    Iy = Ay + (By-Ay)t = Cy+(Dy-Cy)u

    Make t the subject
    t = (Dx-Cx)(Ay-Cy) - (Dy-Cy)(Ax-Cx) / (Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay)
  */

  const top = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
  const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

  const t = top / bottom;

  return {
    x: lerp(A.x, B.x, t),
    y: lerp(C.y, D.y, t),
  };
}

function lerp(A, B, t) {
  return A + (B - A) * t;
}

function drawDot(point, label, isRed) {
  ctx.beginPath();
  ctx.fillStyle = isRed ? "red" : "white";
  ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.font = "bold 14px Arial";
  ctx.fillText(label, point.x, point.y);
}
