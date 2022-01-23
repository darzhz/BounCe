let balls = [];
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(175);
  let ball = new Obj();
  ball.spawnRandom(12,balls);
 // console.log(ball)
  frameRate(60);
}
function draw(){
  background(0);
  for(let i = 0;i<balls.length;i++){
   balls[i].applyGravity();
   balls[i].show();
  // console.log(balls[0].gravityY);
  }
  checkCollision(balls);
}
  function checkCollision(balls){
     for(let i = 0;i<=balls.length;i++){
      for(let j = i+1;j<balls.length;j++){
        let dist = Calcdist(balls,i,j);
       //console.log(Math.abs(dist));
        if(dist<= balls[i].radius && dist <=balls[j].radius){
         let m1 = balls[i].radius;
         let m2 = balls[j].radius;
         let u1x = balls[i].xVel;
         let u2x = balls[j].xVel

         let u1y = balls[i].yVel
         let u2y = balls[j].yVel

         let nvx = CalcVal(m1,m2,u1x,u2x,true);
         let nvy = CalcVal(m1,m2,u1y,u2y,true);
         let mvx = CalcVal(m1,m2,u1x,u2x,false);
         let mvy = CalcVal(m1,m2,u1y,u2y,false);
         
         
          balls[i].xVel = nvx;
          balls[i].yVel = nvy;
          balls[j].xVel = mvx;
          balls[j].yVel = mvy;
        }
      }
    }
  }
  function CalcVal(m1,m2,u1,u2,or){
         let v1 = (((m1-m2)/(m1+m2))*u1)+(((2*m2)/(m1+m2))*u2);
         let v2 = (((2*m1)/(m1+m2))*u1)+(((m2-m1)/(m1+m2))*u2);
         if(or==true){
           return v1;
         }else{
           return v2;
         }
         
  }
  function Calcdist(balls,i,j){
       let ax = balls[i].x-20;
        let ay = balls[i].y-20;
        let bx = balls[j].x-20;
        let by = balls[j].y-20;
       // console.log(ax+" "+ay+" "+bx+" "+by);
        let dist = sqrt(Math.pow((bx-ax),2) + Math.pow((by-ay),2));
        return dist;
  }
  //gravity sensr
/*
let gravitySensor = new GravitySensor({frequency: 60});

gravitySensor.addEventListener("reading", e => {
 // console.log(`Gravity along the X-axis ${gravitySensor.x}, ${gravitySensor.y}`);
});

gravitySensor.start();
*/
