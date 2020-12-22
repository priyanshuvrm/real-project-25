
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 

var engine , world;

var ground , boxSprite1 , boxSprite2 , boxSprite3 , ball;

var ballImg , dustbinImg ;

function preload(){
ballImg = loadImage("sprites/paper.png");
dustbinImg = loadImage("sprites/dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

ground = new Ground(400,690,800,20);
paper = new Paper(100,100,70,70);

box1 = new Box(702,620,5,100);
box2 = new Box(620,642,200,5);
box3 = new Box(538,620,5,100);

	Engine.run(engine);
  
}


function draw() {
	background(255,255,255);  
	Engine.update(engine);
imageMode(CENTER)
	image(dustbinImg,620,620,200,300);
	ground.display();
    paper.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body , paper.body.position,{x:200 , y:-200});
	}
}