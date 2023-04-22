import { drawClockBase, drawClock } from "./lib/clock.js";

// Create a canvas object (canvas) from the HTML canvas element:
const canvas = document.getElementById("canvas-clock");

// Create a 2d drawing object (ctx) for the canvas object:
const ctx = canvas.getContext("2d");

// Calculate the clock radius, using the height of the canvas:
let radius = canvas.height / 2;

// Remap the (0,0) position (of the drawing object) to the center of the canvas:
ctx.translate(radius, radius);

// Reduce the clock radius (to 90%) to draw the clock well inside the canvas:
radius = radius * 0.90;

drawClockBase(ctx, radius);
// drawClock(ctx, radius);

// To start the clock, call the drawClock function at intervals:
// The interval is in milliseconds. drawClock will be called for each 1000 milliseconds.
setInterval(drawClock, 1000, ctx, radius);