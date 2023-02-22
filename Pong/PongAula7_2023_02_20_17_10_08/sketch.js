//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Colisão
let colisao = false;

// variaveis do oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let velocidadeYOponente;

//fim  variaveis

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  // Raquete
  mostrarRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  //   Verifica colisao Raquete
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  // Colisão
  // colisaoMinhaRaqueteBiblioteca();
  // Raquete Oponente
  mostrarRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente()
  // colisaoMinhaRaqueteBibliotecaOponente()
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

// function verificacolisaoRaquete() {
//   if (
//     xBolinha - raio < xRaquete + raqueteComprimento &&
//     yBolinha - raio < yRaquete + raqueteAltura &&
//     yBolinha + raio > yRaquete
//   ) {
//     velocidadeXBolinha *= -1;
//   }
// }

// Colisão

function verificaColisaoRaquete(x, y) {
  colisao = 
  collideRectCircle(
    x,
    y,
    raqueteComprimento,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio
  );
  if (colisao) {
    velocidadeXBolinha *= -1;
  }
}

function mostrarRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}
function movimentaRaqueteOponente(){
 velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30
  yRaqueteOponente += velocidadeYOponente
}

function colisaoMinhaRaqueteBibliotecaOponente(x, y) {
  colisao = 
  collideRectCircle(
    xRaqueteOponente,
    yRaqueteOponente,
    raqueteComprimento,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio
  );
  if (colisao) {
    velocidadeXBolinha *= -1;
  }
}