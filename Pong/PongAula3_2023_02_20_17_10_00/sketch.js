let xBolinha = 100;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;


let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100);
  circle(xBolinha,yBolinha,diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
  
  // se estiver tocando a borda
  
  if (xBolinha + raio  > width || xBolinha - raio  < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

