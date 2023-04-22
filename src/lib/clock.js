export function drawClock(ctx, radius) {
  // Remap the (0,0) position (of the drawing object) to the center of the canvas:
  ctx.translate(radius, radius);

  // Remap the (0,0) position (of the drawing object) to the center of the canvas:
  radius = radius * 0.90

  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  const grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var angle;
  var num;

  // Set the font size (of the drawing object) to 15% of the radius:
  ctx.font = radius * 0.15 + "px arial";

  // Set the text alignment to the middle and the center of the print position:
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  
  // Calculate the print position (for 12 numbers) to 85% of the radius, rotated (PI/6) for each number:
  for (num = 1; num < 13; num++) {
    angle = num * Math.PI / 6;
    ctx.rotate(angle);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-angle);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(angle);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-angle);
  }
}