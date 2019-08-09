const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2,ground;
var pig1,pig2;
var block1,block2,block3,block4,block5;
function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,200,50,50);
  box2 = new Box(225,50,30,30);
  ground = new Ground(400,775,800,50);
  pig1 = new Pig(100,100);
  block1 = new Block(265,100,65,PI/3);
  block2 = new Block(465,100,65,PI/3);
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  block1.display();
  block2.display();
}