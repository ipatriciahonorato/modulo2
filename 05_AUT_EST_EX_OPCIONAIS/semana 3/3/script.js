var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores= input.split("\n");

var A= parseInt(valores.shift());
var B= parseInt(valores.shift());

var X= A + B;

console.log("X = " + X);