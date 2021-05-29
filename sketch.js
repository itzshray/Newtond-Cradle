
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var roof, bob1, bob2, bob3, bob4, bob5, r1, re2, r3, r4, r5
var engine, world
function preload()
{
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	engine = Engine.create();
	world = engine.world;
roof = new Ground(displayWidth/2, displayHeight/3,400,20)
bob1=new Drops(displayWidth/2-60, displayHeight/3+300,25)
bob2=new Drops(displayWidth/2-30, displayHeight/3+300,25)
bob3=new Drops(displayWidth/2, displayHeight/3+300,25)
bob4=new Drops(displayWidth/2+30, displayHeight/3+300,25)
bob5=new Drops(displayWidth/2+60, displayHeight/3+300,25)
r1=new Rope(bob1.body,roof.body,-100,0)
r2=new Rope(bob2.body,roof.body,-50,0)
r3=new Rope(bob3.body,roof.body,0,0)
r4=new Rope(bob4.body,roof.body,50,0)
r5=new Rope(bob5.body,roof.body,100,0)



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
r1.display();
r2.display();
r3.display();
r4.display();
r5.display(); 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
}



