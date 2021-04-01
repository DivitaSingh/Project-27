class Bob{
  constructor(x,y){
  var options = {
   restitution:1,
   friction:0,
   density:3
  }  
   this.body=Bodies.circle(x,y,25,options);
   this.radius=25;
   this.image=loadImage("circle.png");
   World.add(world,this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 55, 55);
    pop();
}
}