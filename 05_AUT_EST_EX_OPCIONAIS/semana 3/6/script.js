
var valores= input.split("\n");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());

var MEDIA = (A * 3.5 + B * 7.5) / 11.0 ;

console.log("MEDIA = " + MEDIA.toFixed(5));