var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
   fixedrect=createSprite(600, 400, 50, 80);
   fixedrect.shapeColor="green";
   fixedrect.velocityY=+5;

   movingrect=createSprite(800,300,20,90);
   movingrect.shapeColor="green";
   movingrect.velocityY=-5;
}

function draw() {
  background("black");  
  movingrect.x= World.mouseX;
movingrect.y= World.mouseY;
bounceOff(movingrect,fixedrect)

  drawSprites();
}


