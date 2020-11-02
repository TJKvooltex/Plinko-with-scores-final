class Plinko{
    constructor(x,y,r){
        var options={isStatic:true,
        restitution:1,
        friction:0.5,
     density:1.2 }

     this.x=x;

this.y=y;
this.r=10;

this.body=Bodies.circle(x,y,this.r,options)
World.add(world,this.body);
    }
display(){
var pos = this.body.position;

push();
translate(pos.x,pos.y);
rectMode(CENTER);
strokeWeight(3);
fill ("white");
ellipse (0,0,this.r,this.r);
pop ();

}



}

