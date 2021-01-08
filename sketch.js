const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5 ;
var sling1, sling2, sling3, sling4, sling5 ;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(1200,500);
	engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity() ;
  let opt = {
    mouse : canvasmouse
  };
  mConstraint = MouseConstraint.create(engine,opt) ;
  World.add(world,mConstraint)
  
  pendulum1 = new Pendulum(240, 400);
  pendulum2 = new Pendulum(300, 400);
  pendulum3 = new Pendulum(360, 400);
  pendulum4 = new Pendulum(420, 400); 
  pendulum5 = new Pendulum(480, 400);
  
  sling1 = new Sling(pendulum1.body, { x: 240, y: 150 }); 
  sling2 = new Sling(pendulum2.body, { x: 300, y: 150 }); 
  sling3 = new Sling(pendulum3.body, { x: 360, y: 150 }); 
  sling4 = new Sling(pendulum4.body, { x: 420, y: 150 }); 
  sling5 = new Sling(pendulum5.body, { x: 480, y: 150 });
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  noStroke();
  fill("violet")
  textFont("Broadway")
  textSize(25)
  text("Newton's Cradle",750,100)

  noStroke();
  fill("lightblue")
  textFont("Comis Sans MS")
  textSize(20)
  text("Newton's cradle is a device that demonstrates conservation of momentum ",600,130)

  noStroke();
  fill("lightgreen")
  textFont("Comis Sans MS")
  textSize(18)
  text ("and energy using a series of swinging spheres. When one sphere at the end is ",600,160)

  noStroke();
  fill("yellow")
  textFont("Comis Sans MS")
  textSize(18)
  text("lifted and released, it strikes the stationary spheres, transmitting a force through ", 600,190)

  noStroke();
  fill("orange")
  textFont("Comis Sans MS")
  textSize(18)
  text("the stationary spheres that pushes the last sphere upward.", 600,220)

  noStroke();
  fill("red")
  textFont("Dancing Script")
  textSize(20)
  text("Drag the first bob to move the cradle",720,250)

}

function mouseDragged(){
  Matter.Body.setPosition (pendulum1.body, {x : mouseX , y : mouseY }) ;
}