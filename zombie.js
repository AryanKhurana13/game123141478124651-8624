function createZombies(){
    zombie1=createSprite(90,130,50,50);
  zombie1.addAnimation("front",zombieFront);
  zombie1.addAnimation("right",zombieRight);
  zombie1.addAnimation("left",zombieLeft); 
  
  zombie1.addAnimation("standBack",zombieStandBack);
  zombie1.addAnimation("standfront",zombieStandFront);
  zombie1.addAnimation("standRight",zombieStandRight);
  zombie1.addAnimation("standLeft",zombieStandLeft);

  zombie1.scale = 0.8;
  zombie1.velocityY = 1;

  zombie1.debug=true;
  zombie1.setCollider("rectangle",-50,30,200,200);
  
  
  zombie2=createSprite(90,530,50,50);
  zombie2.addAnimation("front",zombieFront);
  zombie2.addAnimation("right",zombieRight);
  zombie2.addAnimation("left",zombieLeft); 
  
  zombie2.addAnimation("standBack",zombieStandBack);
  zombie2.addAnimation("standfront",zombieStandFront);
  zombie2.addAnimation("standRight",zombieStandRight);
  zombie2.addAnimation("standLeft",zombieStandLeft);

  zombie2.scale = 0.8;
  zombie2.velocityY = 1;

  zombie3=createSprite(700,130,50,50);
  zombie3.addAnimation("front",zombieFront);
  zombie3.addAnimation("right",zombieRight);
  zombie3.addAnimation("left",zombieLeft); 
  
  zombie3.addAnimation("standBack",zombieStandBack);
  zombie3.addAnimation("standfront",zombieStandFront);
  zombie3.addAnimation("standRight",zombieStandRight);
  zombie3.addAnimation("standLeft",zombieStandLeft);

  zombie3.scale = 0.8;
  zombie3.velocityY = 1;
  

 
  zombie4=createSprite(1450,130,50,50);
  zombie4.addAnimation("front",zombieFront);
  zombie4.addAnimation("right",zombieRight);
  zombie4.addAnimation("left",zombieLeft); 
  
  zombie4.addAnimation("standBack",zombieStandBack);
  zombie4.addAnimation("standfront",zombieStandFront);
  zombie4.addAnimation("standRight",zombieStandRight);
  zombie4.addAnimation("standLeft",zombieStandLeft);

  zombie4.scale = 0.8;
  zombie4.velocityY = 1;

  zombie5=createSprite(1450,560,50,50);
  zombie5.addAnimation("front",zombieFront);
  zombie5.addAnimation("right",zombieRight);
  zombie5.addAnimation("left",zombieLeft); 
  
  zombie5.addAnimation("standBack",zombieStandBack);
  zombie5.addAnimation("standfront",zombieStandFront);
  zombie5.addAnimation("standRight",zombieStandRight);
  zombie5.addAnimation("standLeft",zombieStandLeft);

  zombie5.scale = 0.8;
  zombie5.velocityY = 1;
  
  zombie6=createSprite(1800,120,50,50);
  zombie6.addAnimation("front",zombieFront);
  zombie6.addAnimation("right",zombieRight);
  zombie6.addAnimation("left",zombieLeft); 
 
  zombie6.addAnimation("standBack",zombieStandBack);
  zombie6.addAnimation("standfront",zombieStandFront);
  zombie6.addAnimation("standRight",zombieStandRight);
  zombie6.addAnimation("standLeft",zombieStandLeft);

  zombie6.scale = 0.8;
  zombie6.velocityY = 1;

  zombie7=createSprite(610,620,50,50);
  zombie7.addAnimation("front",zombieFront);
  zombie7.addAnimation("right",zombieRight);
  zombie7.addAnimation("left",zombieLeft); 
  
  zombie7.addAnimation("standBack",zombieStandBack);
  zombie7.addAnimation("standfront",zombieStandFront);
  zombie7.addAnimation("standRight",zombieStandRight);
  zombie7.addAnimation("standLeft",zombieStandLeft);

  zombie7.scale = 0.8;
  zombie7.velocityY = 1;

  zombie8=createSprite(500,30,50,50);
  zombie8.addAnimation("right",zombieRight);
  zombie8.addAnimation("front",zombieFront);
  zombie8.addAnimation("left",zombieLeft); 
  
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
  zombie10.addAnimation("front",zombieFront);
  zombie10.addAnimation("right",zombieRight);
  zombie10.addAnimation("left",zombieLeft); 
  
  zombie10.addAnimation("standBack",zombieStandBack);
  zombie10.addAnimation("standfront",zombieStandFront);
  zombie10.addAnimation("standRight",zombieStandRight);
  zombie10.addAnimation("standLeft",zombieStandLeft);

  zombie10.scale = 0.8;
  zombie10.velocityY = 1;
}

function controlZombies(){
  /**** ZOMBIES ****/
  //90, 225 (130, 320) 130 ==> 1 || 320 ==> -1

  if(zombie1.y===130 || zombie1.y===320){
    zombie1.velocityY = zombie1.velocityY * (-1);
    if(zombie1.velocityY<0){
      zombie1.changeAnimation("standBack");
    }
    else{
      zombie1.changeAnimation("front");
    }
  }
 
  if(zombie2.y===520 || zombie2.y===870){
    zombie2.velocityY = zombie2.velocityY * (-1);
    if(zombie2.velocityY<0){
      zombie2.changeAnimation("standBack");
    }
    else{
      zombie2.changeAnimation("front");
    }
  }

  if(zombie3.y===130 || zombie3.y===500){
    zombie3.velocityY = zombie3.velocityY * (-1);
    if(zombie3.velocityY<0){
      zombie3.changeAnimation("standBack");
    }
    else{
      zombie3.changeAnimation("front");
    }
  }
  
  if(zombie4.y===130 || zombie4.y===400){
    zombie4.velocityY = zombie4.velocityY * (-1);
    if(zombie4.velocityY<0){
      zombie4.changeAnimation("standBack");
    }
    else{
      zombie4.changeAnimation("front");
    }

  }

  if(zombie5.y===560 || zombie5.y===770){
    zombie5.velocityY = zombie5.velocityY * (-1);
    if(zombie5.velocityY<0){
      zombie5.changeAnimation("standBack");
    }
    else{
      zombie5.changeAnimation("front");
    }

  }

  if(zombie6.y===120 || zombie6.y===500){
    zombie6.velocityY = zombie6.velocityY *(-1)
    if(zombie6.velocityY<0){
      zombie6.changeAnimation("standBack");
    }
    else{
      zombie6.changeAnimation("front");
    }

  }

  if(zombie7.y===620 || zombie7.y===850){
    zombie7.velocityY = zombie7.velocityY *(-1)
    if(zombie7.velocityY<0){
      zombie7.changeAnimation("standBack");
    }
    else{
      zombie7.changeAnimation("front");
    }

  }

  if(zombie8.x===500 || zombie8.x===1100){
    zombie8.velocityX = zombie8.velocityX *(-1);
    if(zombie8.velocityX<0){
      zombie8.changeAnimation("left");
    }
    else{
      zombie8.changeAnimation("right");
    }

  }

  if(zombie9.x===1000 || zombie9.x===1250){
    zombie9.velocityX = zombie9.velocityX *(-1);
    if(zombie9.velocityX<0){
      zombie9.changeAnimation("left");
    }
    else{
      zombie9.changeAnimation("right");
    }

  }

  if(zombie10.y===140 || zombie10.y===350){
    zombie10.velocityY = zombie10.velocityY *(-1);
    if(zombie10.velocityY<0){
      zombie10.changeAnimation("standBack");
    }
    else{
      zombie10.changeAnimation("front");
    }
  }
}

function createWalls(){
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
  
}