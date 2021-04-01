
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stand;
var standimg;

function preload()
{
	standimg=loadImage("stand.png");
}

function setup() {
	createCanvas(1520,750);


	engine = Engine.create();
	world = engine.world;
 

	  //Create the Bodies Here.
    ground1 = new Ground(550,180,100,20);
    bob1 = new Bob(550,400);
    chain1 = new Chain(ground1.body,bob1.body);
    ground2 = new Ground(600,180,100,20);
    bob2 = new Bob(600,430);
    chain2 = new Chain(ground2.body,bob2.body);
    ground3 = new Ground(650,180,100,20);
    bob3 = new Bob(650,430);
    chain3 = new Chain(ground3.body,bob3.body);
    ground4 = new Ground(700,180,100,20);
    bob4 = new Bob(700,430);
    chain4 = new Chain(ground4.body,bob4.body);
    ground5 = new Ground(750,180,100,20);
    bob5 = new Bob(750,186);
    chain5 = new Chain(ground5.body,bob5.body);
    
    box = new Box(100,100);
    box.debug="true";
	  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  
  background("peachpuff");
  drawSprites();
  //text("X"+mouseX+","+"Y"+mouseY,500,500);
  
  bob1.display();
  ground1.display();
  chain1.display();
  bob2.display();
  ground2.display();
  chain2.display();
  bob3.display();
  ground3.display();
  chain3.display();
  bob4.display();
  ground4.display();
  chain4.display();
  bob5.display();
  ground5.display();
  chain5.display();
 // box.display();
 rectMode(CENTER);
 var stand=createSprite(590,345,50,50);
 stand.addImage("right",standimg);
 stand.scale=0.60;
 fill("blue");
  strokeWeight(6);
  textSize(100);
  stroke("yellow");
  text("Newton's Cradle",300,650);
  
}
function keyPressed(){
if(keyCode===(LEFT_ARROW)){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:0});    
}
}
