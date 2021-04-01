class Ground {
  constructor(x,y) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,100,10,options);
    this.width = 100;
    this.height = 10;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("black");
    rect(pos.x, pos.y, 100, 10);
  }
};