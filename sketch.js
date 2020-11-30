const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var P1,P2,P3,P4,P5,sling2,sling3,sling4,sling5,sling1;
function preload(){

}

function setup(){
    createCanvas=windowWidth/2,windowHeight/2;
    engine = Engine.create();
    world = engine.world;
    P1=new Pendulum(120,200,"black");
    P2=new Pendulum(160,200,"black");
    P3=new Pendulum(200,200,"black");
    P4=new Pendulum(240,200,"black");
    P5=new Pendulum(280,200,"black");

    sling1=new Sling(this.P1,{x:120,y:140})
    sling2=new Sling(this.P2,{x:160,y:140});
    sling3=new Sling(this.P3,{x:200,y:140});
    sling4=new Sling(this.P4,{x:240,y:140});
    sling5=new Sling(this.P5,{x:280,y:140});

}
function draw(){
    P1.display();
    P2.display();
    P3.display();
    P4.display();
    P5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}
function mouseDragged(){
    Matter.Body.setPosition(P1.body,{x:mouseX,y:mouseY});
       
  }
  function mouseReleased(){
    sling5.fly();
  }