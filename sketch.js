
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1300, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground1 =new ground(width/2,height,width,20);
	ground2 = new ground(width/2,0,width,20);
	ground3 = new ground(0,height/2,20,height);
	ground4 = new ground(width,height/2,20,height);
	dustbin=new dustbin(900,380);

	paper = new Paper(100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  dustbin.display();
  paper.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:-0.125});
		console.log("up")
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.130,y:0});
		console.log("up")
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-0.130,y:0});
		console.log("up")
	}
}

