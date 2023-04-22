export function drawClock(ctx, radius) {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
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

function drawTime(ctx, radius){
  const now = new Date();

  // Use Date to get hour, minute, second:
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  // hour
  // Calculate the angle of the hour hand, and draw it a length (50% of radius), and a width (7% of radius):
  hour = hour % 12;
  hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07);
  
  // minute
  // Calculate the angle of the minute hand, and draw it a length (80% of radius), and a width (7% of radius):
  minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07);
  
  // second
  // Calculate the angle of the hour hand, and draw it a length (90% of radius), and a width (7% of radius):
  second = (second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}