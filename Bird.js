class Bird extends BaseClass{
    constructor(x, y) {
      
      super(x, y, 50, 50);  //transfers the properties from base to the sub class
      this.image = loadImage("sprites/bird.png");
      
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;  

      super.display();  //transfers the display() for base to the sub class

    };
  };


/*
INHERITANCE
  Parent - Base Class
  Children - Sub-classes --> inherit all the properties & functions from the base class

*/
  