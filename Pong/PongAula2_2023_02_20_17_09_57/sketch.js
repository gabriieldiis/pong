let xBolinha = 100;
let yBolinha = 200;
let diametro = 15;


let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100);
  circle(xBolinha,yBolinha,diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
}