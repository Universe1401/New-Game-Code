var player;
var target;
var edges;
function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites()
 player=createSprite(40,550,30,30)
 target=createSprite(550,40,30,30)
 target.shapeColor="red"
 obs1=createSprite(300,120,100,20)
 obs2=createSprite(300,320,100,20)
 obs1.shapeColor="blue"
 obs2.shapeColor="blue"
 obs1.velocityX=5
 obs2.velocityX=-5

}

function draw() {
  
  background("black");
  if(keyDown("up"))
  {
    player.y=player.y-3
  }
  if(keyDown("down"))
  {
    player.y=player.y+3
  }
  if(keyDown("left"))
  {
    player.x=player.x-3
  }
  if(keyDown("right"))
  {
    player.x=player.x+3
  
  }
  obs1.bounceOff(edges[1])
  obs1.bounceOff(edges[0])
  obs2.bounceOff(edges[1])
  obs2.bounceOff(edges[0])
  player.bounceOff(edges[0])
  player.bounceOff(edges[1])
  player.bounceOff(edges[2])
  player.bounceOff(edges[3])
if(player.isTouching(obs1))
{
  obs1.velocityX=0
  text("You Lose!",300,300)
}
if(player.isTouching(obs2))
{
  obs2.velocityX=0
  text("You Lose!",300,300)
}
if(player.isTouching(target))
{
text("You Won!",300,300)
}
  drawSprites()
}
