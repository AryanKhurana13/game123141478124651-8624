var adlez;
var zombie;
var zombieRight, zombieLeft, zombieFront, zombieBack, zombieStandLeft,zombieStandRight,zombieStandFront, zombieStandBack;
var adlezRight, adlezLeft, adlezFront, adlezBack, adlezStandRight, adlezStandLeft, adlezStandFront, adlezStandBack;
var wall1, wall2, wall3, wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35;

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
  createCanvas(displayWidth, displayHeight);
  
  adlez=createSprite(400, 200, 50, 50);
  adlez.addAnimation("standRight",adlezStandRight);
  adlez.addAnimation("standLeft",adlezStandLeft);
  adlez.addAnimation("standBack",adlezStandBack);
  adlez.addAnimation("standFront",adlezStandFront);
  
  adlez.addAnimation("left",adlezLeft);
  adlez.addAnimation("right",adlezRight);
  adlez.addAnimation("front",adlezFront);
  adlez.addAnimation("back",adlezBack);

  zombie=createSprite(200,400,50,50);
  zombie.addAnimation("right",zombieRight);
  zombie.addAnimation("left",zombieLeft); 
  zombie.addAnimation("front",zombieFront);
  
  zombie.addAnimation("standBack",zombieStandBack);
  zombie.addAnimation("standfront",zombieStandFront);
  zombie.addAnimation("standRight",zombieStandRight);
  zombie.addAnimation("standLeft",zombieStandLeft);


  wall1=createSprite(50,80,100,20);
  wall2=createSprite(100,80,100,20);
  wall3=createSprite(140,125,20,100);
  wall4=createSprite(250,125,20,100);
  wall5=createSprite(290,80,100,20);
  wall6=createSprite(140,225,20,100);
  wall7=createSprite(250,320,20,100);
  wall8=createSprite(290,180,100,20)
  wall9=createSprite(290,270,100,20)
  wall10=createSprite(140,325,20,100)
  wall11=createSprite(100,375,100,20)
  wall12=createSprite(100,470,100,20)
  wall13=createSprite(740,80,800,20)
  wall14=createSprite(1132,140,20,100)
  wall15=createSprite(390,270,100,20)
  wall16=createSprite(450,310,20,100)
  wall17=createSprite(490,370,100,20)
  wall18=createSprite(550,330,20,100)
  wall19=createSprite(550,230,20,100)
  wall20=createSprite(410,180,300,20)
  wall21=createSprite(1250,130,20,100)
  wall22=createSprite(1190,170,100,20)
  wall23=createSprite(1490,80,500,20)
  wall24=createSprite(1750,320,20,500)
  wall25=createSprite(1750,695,20,250)
  wall26=createSprite(1410,830,700,20)
  wall27=createSprite(1050,790,20,100)
  wall28=createSprite(1000,750,100,20)
  wall29=createSprite(960,700,20,100)
  wall30=createSprite(1100,640,300,20)
  wall31=createSprite(1250,680,20,100)
  wall32=createSprite(850,700,20,100)
  wall33=createSprite(850,800,20,100)
  wall34=createSprite(900,850,100,20)
  wall35=createSprite(950,900,20,100)
  wall36=createSprite(850,600,20,100)
  wall37=createSprite(1040,540,400,20)
  wall38=createSprite(1290,540,100,20)
  wall39=createSprite(1350,630,20,200)
  wall40=createSprite(1300,730,120,20)
  wall41=createSprite(250,420,20,100)
  wall42=createSprite(440,460,400,20)
  wall43=createSprite(505,560,540,20)
  wall44=createSprite(765,370,20,400)
  wall45=createSprite(650,270,20,400)
  wall46=createSprite(805,160,100,20)
  wall47=createSprite(860,340,20,380)
  wall48=createSprite(970,260,20,350)
  wall49=createSprite(1180,425,400,20)
  wall50=createSprite(1370,300,20,240)
  wall51=createSprite(1200,300,20,100)
  wall52=createSprite(1160,240,100,20)
  wall53=createSprite(1160,360,100,20)
  wall54=createSprite(1500,450,20,750)
  wall55=createSprite(140,700,20,450)
  wall56=createSprite(240,700,20,300)
  wall57=createSprite(400,840,300,20)
  wall58=createSprite(560,700,20,300)
  wall59=createSprite(660,800,20,300)

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

  drawSprites();
}