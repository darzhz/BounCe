class Obj{
  constructor(posX,posY,velocityX,velocityY,color, radius){
    this.x = posX;
    this.y = posY;
    this.xVel = velocityX;
    this.yVel = velocityY;
    this.color = color;
    this.radius = radius;
    this.gravityX = 0;
    this.gravityY = 0;
    this.friction = 1;
  }
  spawnRandom(x,balls){
    for(let i=0;i<x;i++){
    let colr = color(random(0,255),random(0,255),random(0,255));
  let ball = new Obj(floor(random(20,width-20)),floor(random(20,height-20)),random(5,5),random(5,5),colr,random(20,30));
    balls.push(ball);
    }
  }
  mov(){
    if(this.x >= width-this.radius || this.x <=this.radius){
      this.xVel *= -1;
    this.xVel *= this.friction;
    }
    if(this.y > height-this.radius || this.y <= this.radius){
      this.yVel *= -1
    this.yVel *= this.friction;
    }
    
    this.x += (this.xVel+this.gravityX);
    this.y += (this.yVel+this.gravityY);
  }
  applyGravity(){
    this.friction= 0.9;
    if(this.y <=height){
    this.yVel +=0.4;
    }
      
  }
  show(){
   // console.log(this.x+" and "+this.y);
    fill(this.color);
    circle(this.x,this.y,this.radius);
    this.mov();
  }
}