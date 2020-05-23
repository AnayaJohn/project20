var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  weigth=createSprite(1500, 200,60, height/2);

  speed=random(55,90)
  weight=random(400,1500)

  car.velocityX=speed;

}

function draw() {
  background(0); 
  
  wall.shapeColor="white";

  if(car.x<100){
    car.shapeColor="green";
    //car.velocityX=0;
  }
  if(car.x<180 && car.x>100){
    car.shapeColor="yellow";
    //car.velocityX=0;
  }
  if(car.x>180){
    car.shapeColor="red";
    //car.velocityX=0;
  }
  //car.display();
  //wall.display();
  drawSprites();
}