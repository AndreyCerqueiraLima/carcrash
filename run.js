let widthScenario = 500
let heightScenario = 400
let avenue;
let streets
let cars
let player

let somDaTrilha
let somDaColisao
let somDoPonto

let pontosPlayer = 0

function setup() {
  createCanvas(widthScenario, heightScenario);
  somDaTrilha.loop()
}

function preload(){
  somDaTrilha = loadSound("sound/trilha.mp3")
  somDaColisao = loadSound("sound/colidiu.mp3")
  somDoPonto = loadSound("sound/pontos.wav")
  avenue = loadImage('img/avenue.png')
  player = new Player()
  streets = buildStreets()
  cars = buildCars()
  player = new Player(50,382,30,30,'o')
}

function draw() {
  background(avenue);
  
  desenhaPontosNaView()
  player.buildImage()
  player.move()

  for(let i=0;i<streets.length;i++){
    drawCarOnStreet(cars[i%3],streets[i])
    moveCarAroundStreet(streets[i])
    collide(player,cars[i%3],streets[i])
  }
  marcaPonto(player)
  
}

function marcaPonto(player){
   if(player.getCurrentY() < 20){
     player.setCurrentYToInitialY()
     somDoPonto.play()
     pontosPlayer += 1
   }
}

function desenhaPontosNaView(){
  textSize(25)
  fill(color(255,240,60))
  text(pontosPlayer,width/5,27)
}


function collide(player,car,pista){
  if(collided(player,car,pista)){
    player.setCurrentYToInitialY()
    somDaColisao.play()
    if(pontosPlayer > 0){
      pontosPlayer -= 1
    }
  }
}
function collided(player,car,pista) {
  return p5.prototype.collideRectCircle(pista.currentX, pista.currentY,
    car.w, car.h, player.getCurrentX(), player.getCurrentY(), player.w / 2);
}
