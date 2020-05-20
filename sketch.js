const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,ground,roof1,roof2,roof3,roof4,windo,windo2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,100,50,100);
    box2 = new Box(150,100,50,100);
    box3 = new Box(200,100,50,100);
    box4 = new Box(250,100,50,100);

    ground = new Ground(200,390,400,20);

    roof1 = new Box(300,100,50,200);
    roof2 = new Box(50,10,50,200);
    //roof3 = new Box(350,200,3,50);
    //roof4 = new Box(350,200,3,50);

    gate = createSprite(175,360,40,40)
    windo = createSprite(300,300,20,20);
    windo2 = createSprite(50,300,20,20);

    //gate.Shapecolour("black");
    //windo.Shapecolour("black");
    //windo.Shapecolour("black");
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    ground.display();

    roof1.display();
    roof2.display();
    //rect.display();
    //roof4.display();

    drawSprites();
}

