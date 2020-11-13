
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    boy1 = new Boy(100,100,100,100)
	ground1 = new Ground(400,680,800,20)
	tree1 = new Tree(400,500,100,200)
	mango1 = new Mango(420,520,20,20)
	mango2 = new Mango(460,520,20,20)
	mango3 = new Mango(420,560,20,20)
	mango4 = new Mango(430,530,20,20)
	mango5 = new Mango(412,560,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy1.display();
  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}



