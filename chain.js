class Chain{
  constructor(b1,b2){

  var options={
      bodyA:b1,
      bodyB:b2,
      length:40,
      stiffness:0.04
  }

  this.chain=constraint.create(options);
  World.add(world,this.chain);
  }

  display(){
      var posA=this.chain.bodyA.position;
      var posB=this.chain.bodyB.position;
      strokeWeight(4)
      line(posA.x,posA.y,posB.x,posB.y);
  }
}