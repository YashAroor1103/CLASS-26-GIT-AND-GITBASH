class BaseClass{
  //constructing the objects
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        //giving the positions to the obstacle
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
       //to restrict a particular object
        push();
        translate(this.body.position.x, this.body.position.y);
        //using rotate to change the position of an object 
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //to restrict a particular object
        pop();
      }
}