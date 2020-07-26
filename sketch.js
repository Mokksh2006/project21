var bullet, wall, thickness, speed, weight ;

function setup() {
  createCanvas(1600,400);
 bullet = createSprite(200, 200, 100, 50);
 wall = createSprite(1200, 200, thickness, height/2);
speed = random (223, 321);              
weight = random (30, 52);
thickness = random (22,83);
damage = (0.5 * speed * speed * weight)/(thickness*thickness*thickness);
bullet.velocityX = speed;

}

function draw() {
  background(0,0,0);  

if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    
  if (damage > 10){
  wall.shapeColor = color(255,0,0);
} 
  else{
    wall.shapeColor = color(0, 255, 0);
  }
 
  } 
  
  drawSprites();
}