
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	ball1 = new ball(300,300,50);
	ball2 = new ball(350,300,50);
	ball3 = new ball(400,300,50);
	ball4 = new ball(450,300,50);
	ball5 = new ball(500,300,50);

	rope1=new Rope(roof1,ball1);
	rope2=new Rope(roof1,ball2);
	rope3=new Rope(roof1,ball3);
	rope4=new Rope(roof1,ball4);
	rope5=new Rope(roof1,ball5);

	roof1=new Roof(400,200,600,50);


	


	Engine.run(engine);
  
}


function draw() {
  
  background(255);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof1.display();



  
if(keyDown("space")){
	Matter.Body.applyForce(ball1.body,{x: ball1.body.position.x, y: ball1.body.position.y},{x: -120,y: 0})
  }	
  
  drawSprites();
 
}



