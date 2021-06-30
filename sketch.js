const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxSprite1, boxSprite2, boxSprite3;
var ballSprite;
var groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	ballSprite= new Paper(200,450,40);
	
	
	boxSprite1=createSprite(width-150, 630, 20);
	boxSprite1.shapeColor=color(255,0,0)

	boxSprite2=createSprite(width-350, 630, 20);
	boxSprite2.shapeColor=color(255,0,0)

	boxSprite3=createSprite(width-250, 670, 200, 20);
	boxSprite3.shapeColor=color(255,0,0)
	
	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)



	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ballSprite.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ballSprite.body, ballSprite.body.position,{x:85,y:-85});
	}
}

