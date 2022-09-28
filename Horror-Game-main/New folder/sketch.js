var player;
var standing;
var pl_backWalking;
var bg,bgImg_0,bgImg_1;
var leverTile_1;
var border,border_1,border_2,border_3,border_4,borderGroup;
var gameState = 0;
//var SERVE = 0
//var PLAY = 1;
//var END = 2;


function preload(){
  bgImg_0=loadImage("assets/background/sprite_1.png");
  bgImg_1=loadImage("assets/background/sprite_0.png");
  
  standing=loadAnimation("assets/walking/back walking/sprite_3.png");
  
  pl_backWalking=loadAnimation("assets/walking/back walking/sprite_3.png","assets/walking/back walking/sprite_4.png", "assets/walking/back walking/sprite_5.png ")
  pl_frontWalking=loadAnimation("assets/walking/front walking/sprite_0.png","assets/walking/front walking/sprite_1.png", "assets/walking/front walking/sprite_2.png ")
  pl_leftWalking=loadAnimation("assets/walking/left walking/sprite_0.png","assets/walking/left walking/sprite_1.png", "assets/walking/left walking/sprite_2.png",  "assets/walking/left walking/sprite_3.png")
  pl_rightWalking=loadAnimation("assets/walking/right walking/sprite_0.png","assets/walking/right walking/sprite_1.png", "assets/walking/right walking/sprite_3.png", "asset/walking/right walking/sprite_3.png")

}

function setup(){
  createCanvas(1000,500);
  rectMode(CENTER);
  
  player=createSprite(200,200,50,50);
  player.addAnimation("backWalking", pl_backWalking )
  player.addAnimation("frontWalking", pl_frontWalking )
  player.addAnimation("leftWalking", pl_leftWalking )
  player.addAnimation("rightWalking", pl_rightWalking )
  player.addAnimation("standing", standing)
  player.scale=0.2;

  bg=createSprite(200,200,30,30);
  bg.addImage("open", bgImg_0)
  bg.scale =4.5

  leverTile_1=createSprite(110,-300,150,150);
  leverTile_1.scale=1
  leverTile_1.visible = false
  
//  startScreen=createSprite 

  
  border_1=createSprite(400,-400,1750,50)
  border_1.visible = false

  border_2=createSprite(-400,400,50,1750)
  border_2.visible = false

  border_3=createSprite(800,400,50,1750)
  border_3.visible = false

  border_4=createSprite(400,800,1750,50)
  border_4.visible = false

  player.changeAnimation("standing", standing)
}

function draw() 
{

background(225);
camera.x=player.x;
camera.y=player.y;
player.depth=bg.depth+1;

//if(gameState === SERVE) {
//  if(keycode===32) {
//    gameState===PLAY
//  }


//if(gameState === PLAY) {

if(keyCode===39){
  player.x+=5;
} 
if(keyCode===38){
  player.y-=5;
}
if(keyCode===37){
  player.x-=5;
}
if(keyCode===40){
  player.y+=5;
}

if(player.isTouching(leverTile_1) && keyCode===32){
  bg.addImage("open", bgImg_1)
  console.log("hi")
}

//if(keyDown("down")){
  //player.changeAnimation("standing", standing)
  //}
  
if(keyIsDown("down")){
player.changeAnimation("backWalking", pl_backWalking)
}

if(keyIsDown("up")){
  player.changeAnimation("frontWalking", pl_frontWalking)
  }

if(keyIsDown("left")){
  player.changeAnimation("leftWalking", pl_leftWalking)
  }

if(keyIsDown("right")){
  player.changeAnimation("rightWalking", pl_rightWalking)
  }
            

if(player.isTouching(border_1)) {
  player.bounceOff(border_1)
}

if(player.isTouching(border_2)) {
  player.bounceOff(border_2)
}

if(player.isTouching(border_3)) {
 player.bounceOff(border_3)
}

if(player.isTouching(border_4)) {
  player.bounceOff(border_4)
}

//}
drawSprites();  
}



