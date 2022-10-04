
function setup() {
  createCanvas(700,600);

  ball = createSprite (350, 300, 80, 80)


}

function draw() 
{
  background("yellow");
  drawSprites () 

if (keyDown ("right")) {
ball.x += 5
}

if (keyDown ("left")) {
ball.x -= 5
}

if (keyDown ("up")) {
ball.y -= 5
}

if (keyDown ("down")){
ball.y += 5
}
}




