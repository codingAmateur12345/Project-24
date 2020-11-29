class Ball{
    constructor(x, y, radius){
     var options = {
        isStatic:false,
       'restitution': 0.3,
       'friction':0.5,
       'density':1.2
    }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
    }

  display(){
    fill("blue");
    circle(50,660,this.radius);
  }

}

