var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;

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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	


 	box1=createSprite(width/2 -100, 600, 20,100);
 	box1.shapeColor=color(255,0,0);

 	box1_body = Bodies.rectangle(width/2 -100+20, 600, 20,100 , {isStatic:true} );
 	World.add(world, box1_body);

 	box2=createSprite(width/2, 600+40, 200,20);
 	box2.shapeColor=color(255,0,0);

 	box2_body = Bodies.rectangle(width/2, 600+45-20, 200,20 , {isStatic:true} );
    World.add(world, box2_body);

    box3=createSprite(width/2 +100,600, 20,100);
 	box3.shapeColor=color(255,0,0);

 	box3_body = Bodies.rectangle(width/2+200-20 ,600, 20,100 , {isStatic:true} );
 	World.add(world, box3_body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
  
  
 
}
function keyPressed(){
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}