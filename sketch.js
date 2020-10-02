var bullets, wall;
var speed, weight , thickness , bulletr, wall1;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

 bullets=createSprite(50,200,50,10);
  bullets.velocityX=speed;
  bullets.shapeColor="white";

  wall=createSprite(1500,200,thickness,height/2  );
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(0);
  


  if(deformation<100){
    car.shapeColor=(0,255,0);
  }
  else
  if(deformation<180 && deformation>100){
    car.shapeColor=(230,230,0);
  }
  else{car.shapeColor=(255,0,0);
  }




  drawSprites();
}


function collided (bullets, wall){
  bulletr=bullets.x+bullets.width
  wall1=wall.x
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
   if(bulletr>=wall1){
    return true;
}
return false;
}