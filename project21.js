
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ground = new Ground(200,390,400,20);
var ball_options = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(wirth/2,670,wirth,20);
ground = new Ground(1100,600,120,20);

	Engine.run(engine);
  ground.show();
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  drawSprites();
 
}



