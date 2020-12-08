var adlez;
var zombie1,zombie2,zombie3,zombie4,zombie5,zombie6,zombie7,zombie8,zombie9,zombie10;
var zombieRight, zombieLeft, zombieFront, zombieBack, zombieStandLeft,zombieStandRight,zombieStandFront, zombieStandBack;
var adlezRight, adlezLeft, adlezFront, adlezBack, adlezStandRight, adlezStandLeft, adlezStandFront, adlezStandBack;
var objects;
var wallGroup;


function preload(){
  zombieRight=loadAnimation("images/zombieRight1.png","images/zombieRight2.png","images/zombieRight3.png");
  zombieLeft=loadAnimation("images/zombieLeft1.png", "images/zombieLeft2.png");
  zombieFront=loadAnimation("images/zombieFront1.png", "images/zombieFront2.png");

  zombieStandRight=loadAnimation("images/zombieRight1.png");
  zombieStandLeft=loadAnimation("images/zombieLeft1.png");
  zombieStandFront=loadAnimation("images/zombieFront1.png");
  zombieStandBack=loadAnimation("images/zombieBack1.png");


  
  adlezBack = loadAnimation("images/adlezBack1.png", "images/adlezBack2.png", "images/adlezBack3.png", "images/adlezBack4.png", "images/adlezBack5.png");
  adlezFront = loadAnimation("images/adlezFront1.png", "images/adlezFront2.png", "images/adlezFront3.png", "images/adlezFront4.png", "images/adlezFront5.png");
  adlezRight = loadAnimation("images/adlezRight1.png", "images/adlezRight2.png", "images/adlezRight3.png", "images/adlezRight4.png", "images/adlezRight5.png", "images/adlezRight6.png", "images/adlezRight7.png", "images/adlezRight8.png");
  adlezLeft = loadAnimation("images/adlezLeft1.png", "images/adlezLeft2.png", "images/adlezLeft3.png", "images/adlezLeft4.png", "images/adlezLeft5.png", "images/adlezLeft6.png");

  adlezStandBack = loadAnimation("images/adlezBack1.png");
  adlezStandFront = loadAnimation("images/adlezFront1.png");
  adlezStandRight = loadAnimation("images/adlezRight1.png");
  adlezStandLeft = loadAnimation("images/adlezLeft1.png");

}

function setup() {
  createCanvas(displayWidth-80, displayHeight-110);
  
  adlez=createSprite(30, 35, 50, 50);
  adlez.addAnimation("standRight",adlezStandRight);
  adlez.addAnimation("standLeft",adlezStandLeft);
  adlez.addAnimation("standBack",adlezStandBack);
  adlez.addAnimation("standFront",adlezStandFront);
  
  adlez.addAnimation("left",adlezLeft);
  adlez.addAnimation("right",adlezRight);
  adlez.addAnimation("front",adlezFront);
  adlez.addAnimation("back",adlezBack);

  zombie1=createSprite(90,130,50,50);
  zombie1.addAnimation("right",zombieRight);
  zombie1.addAnimation("left",zombieLeft); 
  zombie1.addAnimation("front",zombieFront);
  
  zombie1.addAnimation("standBack",zombieStandBack);
  zombie1.addAnimation("standfront",zombieStandFront);
  zombie1.addAnimation("standRight",zombieStandRight);
  zombie1.addAnimation("standLeft",zombieStandLeft);

  zombie1.scale = 0.8;
  zombie1.velocityY = 1;
  
  
  zombie2=createSprite(90,530,50,50);
  zombie2.addAnimation("right",zombieRight);
  zombie2.addAnimation("left",zombieLeft); 
  zombie2.addAnimation("front",zombieFront);
  
  zombie2.addAnimation("standBack",zombieStandBack);
  zombie2.addAnimation("standfront",zombieStandFront);
  zombie2.addAnimation("standRight",zombieStandRight);
  zombie2.addAnimation("standLeft",zombieStandLeft);

  zombie2.scale = 0.8;
  zombie2.velocityY = 1;

  zombie3=createSprite(700,130,50,50);
  zombie3.addAnimation("right",zombieRight);
  zombie3.addAnimation("left",zombieLeft); 
  zombie3.addAnimation("front",zombieFront);
  
  zombie3.addAnimation("standBack",zombieStandBack);
  zombie3.addAnimation("standfront",zombieStandFront);
  zombie3.addAnimation("standRight",zombieStandRight);
  zombie3.addAnimation("standLeft",zombieStandLeft);

  zombie3.scale = 0.8;
  zombie3.velocityY = 1;
  

 
  zombie4=createSprite(1450,130,50,50);
  zombie4.addAnimation("right",zombieRight);
  zombie4.addAnimation("left",zombieLeft); 
  zombie4.addAnimation("front",zombieFront);
  
  zombie4.addAnimation("standBack",zombieStandBack);
  zombie4.addAnimation("standfront",zombieStandFront);
  zombie4.addAnimation("standRight",zombieStandRight);
  zombie4.addAnimation("standLeft",zombieStandLeft);

  zombie4.scale = 0.8;
  zombie4.velocityY = 1;

  zombie5=createSprite(1450,560,50,50);
  zombie5.addAnimation("right",zombieRight);
  zombie5.addAnimation("left",zombieLeft); 
  zombie5.addAnimation("front",zombieFront);
  
  zombie5.addAnimation("standBack",zombieStandBack);
  zombie5.addAnimation("standfront",zombieStandFront);
  zombie5.addAnimation("standRight",zombieStandRight);
  zombie5.addAnimation("standLeft",zombieStandLeft);

  zombie5.scale = 0.8;
  zombie5.velocityY = 1;
  
  zombie6=createSprite(1800,120,50,50);
  zombie6.addAnimation("right",zombieRight);
  zombie6.addAnimation("left",zombieLeft); 
  zombie6.addAnimation("front",zombieFront);
 
  zombie6.addAnimation("standBack",zombieStandBack);
  zombie6.addAnimation("standfront",zombieStandFront);
  zombie6.addAnimation("standRight",zombieStandRight);
  zombie6.addAnimation("standLeft",zombieStandLeft);

  zombie6.scale = 0.8;
  zombie6.velocityY = 1;

  zombie7=createSprite(610,620,50,50);
  zombie7.addAnimation("right",zombieRight);
  zombie7.addAnimation("left",zombieLeft); 
  zombie7.addAnimation("front",zombieFront);
  
  zombie7.addAnimation("standBack",zombieStandBack);
  zombie7.addAnimation("standfront",zombieStandFront);
  zombie7.addAnimation("standRight",zombieStandRight);
  zombie7.addAnimation("standLeft",zombieStandLeft);

  zombie7.scale = 0.8;
  zombie7.velocityY = 1;

  zombie8=createSprite(500,30,50,50);
  zombie8.addAnimation("right",zombieRight);
  zombie8.addAnimation("left",zombieLeft); 
  zombie8.addAnimation("front",zombieFront);
  
  zombie8.addAnimation("standBack",zombieStandBack);
  zombie8.addAnimation("standfront",zombieStandFront);
  zombie8.addAnimation("standRight",zombieStandRight);
  zombie8.addAnimation("standLeft",zombieStandLeft);

  zombie8.scale = 0.8;
  zombie8.velocityX = 1;

  zombie9=createSprite(1000,590,50,50);
  zombie9.addAnimation("right",zombieRight);
  zombie9.addAnimation("left",zombieLeft); 
  zombie9.addAnimation("front",zombieFront);
  
  zombie9.addAnimation("standBack",zombieStandBack);
  zombie9.addAnimation("standfront",zombieStandFront);
  zombie9.addAnimation("standRight",zombieStandRight);
  zombie9.addAnimation("standLeft",zombieStandLeft);

  zombie9.scale = 0.8;
  zombie9.velocityX = 1;

  zombie10=createSprite(1050,140,50,50);
  zombie10.addAnimation("right",zombieRight);
  zombie10.addAnimation("left",zombieLeft); 
  zombie10.addAnimation("front",zombieFront);
  
  zombie10.addAnimation("standBack",zombieStandBack);
  zombie10.addAnimation("standfront",zombieStandFront);
  zombie10.addAnimation("standRight",zombieStandRight);
  zombie10.addAnimation("standLeft",zombieStandLeft);

  zombie10.scale = 0.8;
  zombie10.velocityY = 1;

  wallGroup = new Group();
  objects = new Objects();

  objects.Wall(50,80,100,20, "brown");
  objects.Wall(100,80,100,20, "brown");
  objects.Wall(140,125,20,100, "brown");
  objects.Wall(250,125,20,100, "brown");
  objects.Wall(290,80,100,20, "brown");
  objects.Wall(140,225,20,100, "brown");
  objects.Wall(250,320,20,100, "brown");
  objects.Wall(290,180,100,20, "brown");
  objects.Wall(290,270,100,20, "brown");
  objects.Wall(140,325,20,100, "brown");
  objects.Wall(100,375,100,20, "brown");
  objects.Wall(100,470,100,20, "brown");
  objects.Wall(740,80,800,20, "brown");
  objects.Wall(1130,140,20,100, "brown");
  objects.Wall(390,270,100,20, "brown");
  objects.Wall(450,310,20,100, "brown");
  objects.Wall(490,370,100,20, "brown");
  objects.Wall(550,330,20,100, "brown");
  objects.Wall(550,230,20,100, "brown");
  objects.Wall(410,180,300,20, "brown");
  objects.Wall(1250,130,20,120, "brown");
  objects.Wall(1190,180,100,20, "brown");
  objects.Wall(1490,80,500,20,  "brown");
  objects.Wall(1750,320,20,500, "brown");
  objects.Wall(1750,695,20,250, "brown");
  objects.Wall(1410,830,700,20, "brown");
  objects.Wall(1050,790,20,100, "brown");
  objects.Wall(1000,750,100,20, "brown");
  objects.Wall(960,700,20,100, "brown");
  objects.Wall(1100,640,300,20, "brown");
  objects.Wall(1250,680,20,100, "brown");
  objects.Wall(850,700,20,100, "brown");
  objects.Wall(850,800,20,100, "brown");
  objects.Wall(890,850,100,20, "brown");
  objects.Wall(930,900,20,100, "brown");
  objects.Wall(850,600,20,100, "brown");
  objects.Wall(1040,540,400,20, "brown");
  objects.Wall(1290,540,100,20, "brown");
  objects.Wall(1350,630,20,200, "brown");
  objects.Wall(1300,730,120,20, "brown");
  objects.Wall(250,420,20,100, "brown");
  objects.Wall(440,460,400,20, "brown");
  objects.Wall(505,560,540,20, "brown");
  objects.Wall(765,370,20,400, "brown");
  objects.Wall(650,270,20,400, "brown");
  objects.Wall(805,160,100,20, "brown");
  objects.Wall(850,340,20,380, "brown" );
  objects.Wall(970,260,20,350, "brown");
  objects.Wall(1180,425,400,20, "brown");
  objects.Wall(1370,300,20,240, "brown");
  objects.Wall(1200,300,20,100, "brown");
  objects.Wall(1160,240,100,20, "brown");
  objects.Wall(1160,360,100,20, "brown");
  objects.Wall(1500,450,20,750, "brown");
  objects.Wall(140,700,20,450, "brown");
  objects.Wall(240,700,20,300, "brown");
  objects.Wall(400,840,300,20, "brown");
  objects.Wall(560,700,20,300, "brown");
  objects.Wall(660,800,20,300, "brown");

  edges=createEdgeSprites();

}

function draw() {
  background(0); 
  
  /***CONTROLS OF THE PLAYER */
  if(keyDown("a")){
    adlez.x=adlez.x-4;
    adlez.changeAnimation("left");
  }
  if(keyDown("w")){
    adlez.y=adlez.y-4;
    adlez.changeAnimation("back");
  }
  if(keyDown("s")){
    adlez.y=adlez.y+4;
    adlez.changeAnimation("front");
  }
  if(keyDown("d")){
    adlez.x=adlez.x+4;
    adlez.changeAnimation("right");
  }


  adlez.collide(wallGroup);
  adlez.collide(edges);


  /**** ZOMBIES ****/
  //90, 225 (130, 320) 130 ==> 1 || 320 ==> -1

  if(zombie1.y===130 || zombie1.y===320){
    zombie1.velocityY = zombie1.velocityY * (-1);
  }

  if(zombie2.y===520 || zombie2.y===870){
    zombie2.velocityY = zombie2.velocityY * (-1);
  }

  if(zombie3.y===130 || zombie3.y===500){
    zombie3.velocityY = zombie3.velocityY * (-1);
  }
  
  if(zombie4.y===130 || zombie4.y===400){
    zombie4.velocityY = zombie4.velocityY * (-1)
  }

  if(zombie5.y===560 || zombie5.y===770){
    zombie5.velocityY = zombie5.velocityY * (-1)
  }

  if(zombie6.y===120 || zombie6.y===500){
    zombie6.velocityY = zombie6.velocityY *(-1)
  }

  if(zombie7.y===620 || zombie7.y===850){
    zombie7.velocityY = zombie7.velocityY *(-1)
  }

  if(zombie8.x===500 || zombie8.x===1100){
    zombie8.velocityX = zombie8.velocityX *(-1)
  }

  if(zombie9.x===1000 || zombie9.x===1250){
    zombie9.velocityX = zombie9.velocityX *(-1)
  }

  if(zombie10.y===140 || zombie10.y===350){
    zombie10.velocityY = zombie10.velocityY *(-1)
  }
  //zombie1.y = 320;


  drawSprites();
}