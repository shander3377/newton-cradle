var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	blob1 = new blob(140, 350, 20)
	blob2 = new blob(160, 350, 20)
	blob3 = new blob(180, 350, 20)
	blob4 = new blob(200, 350, 20)
	blob5 = new blob(220, 350, 20)
	ground1 = new ground(width / 2, 50, 800, 20)
	rope1 = new rope(blob1.body, ground1.body, -200, 10);
	rope2 = new rope(blob2.body, ground1.body, -180, 10);
	rope3 = new rope(blob3.body, ground1.body, -160, 10);
	rope4 = new rope(blob4.body, ground1.body,   -140, 10);
	rope5 = new rope(blob5.body, ground1.body, -120, 10);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);


	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(250);

	drawSprites();
	blob1.display()
	blob2.display()
	blob3.display()
	blob4.display()
	blob5.display()
	ground1.display()
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
}
function keyPressed(){
	if(keyCode=== UP_ARROW){

	  Matter.Body.applyForce(blob1.body,blob1.body.position,{x:-50,y:-100});
	}
  }