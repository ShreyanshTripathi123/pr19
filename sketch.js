var cool_towerImg, tower;
var spiderdoorImg, spiderdoor, spiderdoorsGroup;
var climberImg, climber, climbersGroup;
var  spidermanImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  cool_towerImg = loadImage("cool_tower.png");
  spiderdoorImg = loadImage("spiderdoor.png");
  climberImg = loadImage("climber.png");
  spidermanImg = loadImage("spiderman.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  spookySound.loop();
  cool_tower = createSprite(300,300);
  cool_tower.addImage("tower",towerImg);
  cool_tower.velocityY = 1;
  
  spiderdoorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup=new Group();

  spiderman= createSprite(200,200,50,50);
  spiderman.addImage("ghost",ghostImg);
  spiderman.scale  = 0.3;

}

function draw() {
  background(200);

  if(gameState ==="play"){
    if(keyDown("left_arrow")){
      spiderman.x =spiderman.x-3;
    }
    if(keyDown("right_arrow")){
      spiderman.x =spiderman.x+3;
    }
    if(keyDown("space")){
      spiderman.velocityY = -10; 
    }
    spiderman.velocityY=spiderman.velocityY+0.8;

    if(cool_tower.y > 400){
      cool_tower.y = 300
    }

    spawnDoors();

    if(climbersGroup.isTouching(ghost)){
      spiderman.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(spiderman)|| spiderman.y > 600){
      spiderman.destroy;
      gameState = "end";
    }
    drawSprites();
}

if(gameState ==="end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("gameOver",230,250);
}
}

function spawnDoors(){
  if(frameCount%240 ===0){
    var spiderdoor = createSprite(200,-50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;


    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;

    spiderdoor.addImage(doorImg);
    climber.addImage(climberImg);

    spiderdoor.velocityY = 1;
    climber.velocityY = 1;
     invisibleBlock.velocityY = 1;

     spiderman.depth = door.depth;
     spiderman.depth +=1;

    spiderdoor.lifetime = 800;
    climber.lifetime = 800;
     invisibleBlock.lifetime = 800;

    spiderdoorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
    
 }


}

