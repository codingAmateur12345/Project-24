
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, binWall1, binWall2, binWall3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Ball(150,600,30);

    ground = new Base(200,680,2000,10);

	binWall1 = new binWall(755,665,270,20);

	binWall2 = new binWall(880,580,20,180);

	binWall3 = new binWall(630,580,20,180);

	 
	
  

	Engine.run(engine);

     
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  paper.display();

  binWall2.display();

  binWall3.display();

  binWall1.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper,paper.position,{x:85,y:-85});
		  Matter.Body.setStatic(paper, false);
	  }
}



