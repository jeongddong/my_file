let dinoSpawnY = 200;
let dinoFirstMoveY = 12.5;

let dino = {
  x: 10,
  y: dinoSpawnY,
  MoveY: 0,
  width: 50,
  height: 50,
  gravity: 0.8,


  


  draw() {
    ctx.drawImage(currentDinoImage, this.x, this.y, 50, 50);
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}






document.addEventListener('keydown', function(event) {
  if (event.key === 'Shift') {
    currentDinoImage = dinoImage2;
    jump_switch=false;
    dino.y=220

  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'Shift') {
    currentDinoImage = dinoImage;
    dino.y=200
    // ctx.drawImage(currentDinoImage, this.x, this.y, 50, 50);
  }
}); 

function draw(){
  if (currentDinoImage===dinoImage){
    ctx.drawImage(currentDinoImage, dino.x, dino.y, 50, 50);
  }

  if(currentDinoImage===dinoImage2){
    ctx.drawImage(currentDinoImage, dino.x, dino.y, 60, 30);
    
  }
  
}