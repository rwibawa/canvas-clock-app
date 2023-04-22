import { drawClock } from "./lib/clock.js";

var canvas = document.getElementById("canvas-clock");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
drawClock(ctx, radius);