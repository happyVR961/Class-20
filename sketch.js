var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600,300,30,30);
}

function draw() {
  background("white");  
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2){
      fixedRect.shapeColor = "purple";
      movingRect.shapeColor = "purple";
    }
    else {
      fixedRect.shapeColor = "blue";
      movingRect.shapeColor = "blue";
    }
  drawSprites();
}