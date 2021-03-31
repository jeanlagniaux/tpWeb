
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = 800
canvas.height = 600

var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);
