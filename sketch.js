var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bot,lsid,rsid
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);

	bot=createSprite(400,660,200,20 )
	bot.shapeColor=color(230)

	lsid=createSprite(490,620,20,100)
	lsid.shapeColor=color(230)

	rsid=createSprite(310,620,20,100)
	rsid.shapeColor=color(230)
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	//create box
	bot = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, bot);
	 
	 lsid = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, lsid);
	 
	 rsid = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, rsid);
	 
	 Engine.run(engine)
  
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
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, packageBody);
    
  }
  bounce(packageSprite,bot)
}



