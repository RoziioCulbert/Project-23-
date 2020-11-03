var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var holder1,holder2,holder3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	keyPressed();
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	holder1=createSprite(360,664.5,245,10.2);
	holder1.shapeColor=color("red");

	holder2=createSprite(240,610,10.5,120.2);
	holder2.shapeColor=color("red");

	holder3=createSprite(488,610,10.5,120.2);
	holder3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
       Matter.Body.setStatic(packageBody,false);

	 }
  
    
  }





