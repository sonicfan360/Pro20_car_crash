var car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = blue;
  wall = createSprite(1200,200,60,height/2);
}

function draw() {
  background(255,220,255);  
  var deformation = 0.5 * weight * speed * speed/22509
  text("deformation " + deformation, 800,50)
  if(deformation < 100)
  {
   car.shapeColor = "green" 
  }

  else if(deformation < 180 && deformation > 100)
  {

   car.shapeColor = "yellow"

  }

  else if(deformation > 180)
  {
    car.shapeColor = "red"
  }
  drawSprites();
  car.x = wall.x-(car.width*1+wall.width);
}