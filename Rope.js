class Rope{
    constructor(body1, body2, offsetX, offsetY)
    {
  
      this.offsetX = offsetX;
      this.offsetY = offsetY;
     var options={
       bodyA: body1,
       bodyB: body2,
       pointB:{x:this.offsetX, y:this.offsetY}
     }
     this.rope = Constraint.create(options);
     World.add(world, this.rope);
   }
  display(){
   var pointA = this.rope.bodyA.position;
   var pointB = this.rope.bodyB.position;
  
   strokeWeight(5);
   stroke("lightblue");
  
   var lineX = pointA.x;
   var lineY = pointA.y;
  
   var line2X = pointB.x + this.offsetX;
   var line2Y = pointB.y + this.offsetY;
   line(lineX, lineY, line2X, line2Y); 
   }
  }