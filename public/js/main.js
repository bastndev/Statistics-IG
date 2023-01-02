let canvas = document.getElementById('analytics');
let ctx = canvas.getContext('2d');

drawShape(ctx, 0, 0);

function drawShape(ctx, xoff, yoff) {
  ctx.beginPath();
  ctx.moveTo(0 + xoff, 74 + yoff);
  ctx.bezierCurveTo(-11 + xoff, 84 + yoff, 27 + xoff, 32 + yoff, 56 + xoff, 31 + yoff);
  ctx.bezierCurveTo(71 + xoff, 30 + yoff, 81 + xoff, 56 + yoff, 96 + xoff, 56 + yoff);
  ctx.bezierCurveTo(111 + xoff, 56 + yoff, 131 + xoff, 3 + yoff, 152 + xoff, 8 + yoff);
  ctx.bezierCurveTo(167 + xoff, 11 + yoff, 188 + xoff, 35 + yoff, 212 + xoff, 35 + yoff);
  ctx.bezierCurveTo(225 + xoff, 35 + yoff, 243 + xoff, 16 + yoff, 258 + xoff, 18 + yoff);
  ctx.bezierCurveTo(273 + xoff, 20 + yoff, 295 + xoff, 43 + yoff, 327 + xoff, 4 + yoff);
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}
