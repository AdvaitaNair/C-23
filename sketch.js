const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200, height, 400, 30);

    box1 = new Box(230, 100, 50, 50);
    box2 = new Box(200, 200, 50, 100);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
}