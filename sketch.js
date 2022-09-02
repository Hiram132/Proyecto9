var box;
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,50,50);
}

function draw() 
{
  background("white");
  if (keyDown("a")){
   // box.x=box.x-5;
    background("green");
  }
  if (keyDown("d")){
   // box.x=box.x+5;
    background("yellow");
  }
  if (keyDown("w")){
    // box.y=box.y-5;
     background("blue");
   }
   if (keyDown("s")){
    // box.y=box.y+5;
     background("gray");
   }
drawSprites();
}

