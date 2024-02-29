let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

function loadImage() {
  dinoImage = new Image(), dinoImage.src = "dino.png";
  dinoImage2 = new Image(), dinoImage2.src = "dino2.png";
  obstacleImage1 = new Image(), obstacleImage1.src = "cactus1.png";
  obstacleImage2 = new Image(), obstacleImage2.src = "cactus2.png";
  obstacleImage3 = new Image(), obstacleImage3.src = "cactus3.png";
  obstacleImage4 = new Image(), obstacleImage4.src = "bird.png"
}

loadImage();

let currentDinoImage = dinoImage;

let timer = 0;
let many_obstacle = [];
let jump_switch = false;
let animation;
let space_press = 0;
var ScoreTimer = 0;
var Score = 0;

function frame_execute() {
  animation = requestAnimationFrame(frame_execute);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  timer += Random(-5, 25);
  ScoreTimer+=2;
  if (ScoreTimer >= 60) {
    Score++;
    ScoreTimer = 0;
  }

  ctx.font = "25px Ariel";
  ctx.fillText(`Score:${Score}`, 50, 50);

  if (timer > 500) {
    let obstacle = new Obstacle(Random(1, 4));
    many_obstacle.push(obstacle);

    timer = 0;
  }

  draw();
  
  many_obstacle.forEach((a, i, o) => {
    if (a.x < -100) {
      o.splice(i, 1);
    }

    a.x -= 7;

    a.draw();
    
    crash_check(dino, a);
  });


  // Dino Jump
  if (jump_switch === true) {
    dino.y -= dino.MoveY;
    dino.MoveY -= dino.gravity;

    if (dino.MoveY < -dinoFirstMoveY) {
      dino.MoveY = -dinoFirstMoveY;
    }
  }

  if (dino.y > dinoSpawnY&&jump_switch===true) {
    dino.y = dinoSpawnY;
    dino.MoveY = 0;
    jump_switch = false;
  }


  // draw();
  // console.log(dino.y);
}




frame_execute();

function crash_check(dino, cactus) {
  let dinoLeft = dino.x;
  let dinoRight = dino.x + dino.width;
  let dinoTop = dino.y;
  let dinoBottom = dino.y + dino.height;

  let cactusLeft = cactus.x;
  let cactusRight = cactus.x + cactus.width;
  let cactusTop = cactus.y;
  let cactusBottom = cactus.y + cactus.height;

  if (
    dinoLeft < cactusRight &&
    dinoRight > cactusLeft &&
    dinoTop < cactusBottom &&
    dinoBottom > cactusTop
  ) {
    cancelAnimationFrame(animation);
    many_obstacle.length=0;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.font = "50px Ariel";
    ctx.fillText(`Score:${Score}`, 200, 200);
    
  }

}

document.addEventListener('keydown', function(e) {
  if (e.code === "Space" && !jump_switch && dino.y == dinoSpawnY) {
    jump_switch = true;
    dino.MoveY = dinoFirstMoveY;
    currentDinoImage = dinoImage;
  }
});
