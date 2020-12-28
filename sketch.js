
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);
  
  var survivaltime=0;
  
 monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
  
 score=0;
}


function draw() {
  background(255);
  
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-30;
  }
   
  monkey.velocityY= monkey.velocityY+03;   
  
  
  monkey.collide(ground);

  
  spawnfruit();
  spawnobstacle();
 drawSprites();
  
  stroke("white");
  textSize(20);
  fill("20");
  text("score"+score,500,50);
   
 if(obstacleGroup.isTouching(monkey)){
   monkey.velocityX=0;
   ground.velocityX=0;
   obstacleGroup.setVelocityXEach(0); 
   FoodGroup.setVelocityXEach(0);
   obstacleGroup.setLifetimeEach(-1); 
   FoodGroup.setLifetimeEach(-1);

 }
   
   stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("survivaltime:"+survivaltime,200,50)
  
}

function spawnfruit(){
  if(frameCount%50===0){
    banana= createSprite(280,160,20,20);
    banana.y=Math.round(random(120,200))
    banana.velocityX=-5;
  
    banana.lifetime=110;
    monkey.depth=banana.depth
    
    banana.addImage(bananaImage);
    banana.scale=0.1
    
  
    FoodGroup.add(banana);
  }
}

function spawnobstacle(){
  if(frameCount%300===0){
    rock= createSprite(800,320,20,20);
    rock.velocityX=-6;
    
    rock.addImage(obstaceImage);
    rock.scale=0.15;

    rock.lifetime=300;
    
    obstacleGroup.add(rock);
  }
}


