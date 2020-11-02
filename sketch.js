const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var ground , division;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var particle;
var turn = 0;
var gameState=0;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

  

   


  

ground = new Ground (240,780,480,20);



}

function draw() {
  background("black");  
  ground.display();
  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
     
   plinkos[i].display();
   
 }

//if (frameCount%60===0){
//particles.push(new Particle(random(width/2-10, width/2+10 ),10,10 ));
//}
for (var j = 0; j< particles.length; j++ ){

  particles[j].display();
 }
 for (var k = 0; k< divisions.length; k++ ){

   divisions[k].display();
  }

  if (gameState ==="end"){

   textSize(30);
text("Game Over" ,240,400 )
} 

if (turn<=5){
   gameState = "end";
   
   }
   

drawSprites();
  
textSize(20)
 text("Score : "+score,20,30);


 textSize(20)
 fill("white");
text("100",265,500);

textSize(20)
 fill("white");
text("100",175,500);

textSize(20)
 fill("white");
text("200",105,500);

textSize(20)
 fill("white");
text("200",345,500);

textSize(20)
 fill("white");
text("300",30,500);


textSize(20)
 fill("white");
text("300",415,500);


if (particle.body.position.x<300){
   score=score+300;
   particle=null;
}

if (particle.body.position.x>301 && particle.body.position.x<600){
   score=score+100;
   particle=null;
}

if (particle.body.position.x>601 && particle.body.position.x<900){
   score=score+200;
   particle=null;



}

particle.display();




}



function mousePressed(){
if (gameState!=="end"){
turn++;
particle = new Particle(mouseX,10,10,10);


}





}