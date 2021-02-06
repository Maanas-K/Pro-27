class ball{
    constructor(x,y,diameter){
     var options={
      
         restitution:0.6,
         friction:0.5,
         density:1
     }
  
  
      this.body= Bodies.circle (x,y,diameter,options);
      this.body.position.x=x;
      this.body.position.y=y;
      this.diameter=diameter;
  
      
  
      World.add(world,this.body);
  }
  display(){
     
     
      
      fill ("red")
      ellipse(this.x,this.y,this.diameter,this.diameter)
    
      
  }
  
  };