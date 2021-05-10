const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg1;
var boy;
var sn1 , sn2 , sn3 , sn4 , sn5, sn6 , sn7 , sn8  , sn9


function preload(){
bg1=loadImage("snow1.jpg");
boyimg=loadImage("download.jpg");


}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;


  boy=createSprite(400, 320, 50, 50);
  boy.addImage(boyimg);
  boy.scale=0.5;

  sn1=new snow(700,100,10);
	sn2=new snow(100,50,10);
	sn3=new snow(200,120,10);
	sn4=new snow(300,100,10);
	sn5=new snow(400,150,10);
	sn6=new snow(500,80,10);
	sn7=new snow(600,150,10);
	sn8=new snow(560,60,10);
	sn9=new snow(760,160,10);


}

function draw() {
  background(bg1);  
  Engine.update(engine);

  if(keyDown("right_arrow")){
    boy.x=boy.x+3;
  }
  
  if(keyDown("left_arrow")){
    boy.x=boy.x-3;
  }

  sn1.display();
  sn2.display();
  sn3.display();
  sn4.display();
  sn5.display();
  sn6.display();
  sn7.display();
  sn8.display();
  sn9.display();
  drawSprites();
}