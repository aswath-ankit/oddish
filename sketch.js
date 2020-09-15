

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var ballDiameter; 
var roof;
var rope1, rope2, rope3, rope4,rope5;


function preload(){
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new Ball (200,350,50,50);
	ball2= new Ball (240,350,50,50);
	ball3= new Ball (280,350,50,50);
	ball4= new Ball (320,350,50,50);
	ball5= new Ball (360,350,50,50);

	roof= new Top (280,150,200,20);

	rope1 = new String (ball1.body,top.body,-90,0);
	rope2 = new String (ball2.body,top.body,-40,0);
	rope3 = new String (ball3.body,top.body,+10,0);
	rope4 = new String (ball4.body,top.body,+50,0);
	rope5 = new String (ball5.body,top.body,+90,0);
  

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-730,y:0});
  
	}
}

