class Ground {
  //constructing ground
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //adding the object to the world
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);

      //adding colour to the ground
      fill("brown");

      //shape of our ground
      rect(pos.x, pos.y, this.width, this.height);
    }
  };