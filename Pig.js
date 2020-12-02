class Pig extends BaseClass{
  constructor(x, y) {
    
    super(x, y, 50, 50);  //transfers the properties from base to the sub class
    this.image = loadImage("sprites/enemy.png");
    
  };
  
};
