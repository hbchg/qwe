var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerHeight - 100;
canvas.height = window.innerHeight - 100;

ctx.fillStyle = 'green';

ctx.fillRect(250,2,2500000,25000000);