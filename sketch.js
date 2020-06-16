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

	blob1 = new blob(350, 450, 20)
	blob2 = new blob(370, 450, 20)
	blob3 = new blob(390, 450, 20)
	blob4 = new blob(410, 450, 20)
	blob5 = new blob(460, 450, 20)
	ground1 = new ground(width / 2, 50, 800, 20)
	rope1 = new rope(blob1.body, ground1.body, -80, -0);
	rope2 = new rope(blob2.body, ground1.body, -60, 0);
	rope3 = new rope(blob3.body, ground1.body, -40, 0);
	rope4 = new rope(blob4.body, ground1.body,   -20, 0);
	rope5 = new rope(blob5.body, ground1.body, 0, 0);

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