class Obstacle { 
  constructor(type){
    switch (type) {
      case 1:
        this.x = 500;
        this.y = 200;
        this.width = 25;
        this.height = 50;
        this.obstacleImage = obstacleImage1;

        break;

      case 2:
        this.x = 500;
        this.y = 200;
        this.width = 49;
        this.height = 50;
        this.obstacleImage = obstacleImage2;

        break;
      
      case 3:
        this.x = 500;
        this.y = 200;
        this.width = 51;
        this.height = 50;
        this.obstacleImage = obstacleImage3;

        break;

      case 4:
        this.x=500;
        this.y=Random(230,150);
        this.width = 50;
        this.height = 35;
        this.obstacleImage = obstacleImage4;

        break;
    }
  }
  
  draw() {
    ctx.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height);
  }
  
}