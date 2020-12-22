class Paper{
    constructor(x,y,width,height){
     var option = {
        restitution:0.5 , 
		friction:1 , 
		density:1  
     }
     this.image = loadImage("sprites/paper.png");
     this.body = Bodies.rectangle(x,y,width,height,option);
     this.width = width;
     this.height = height;
     World.add(world,this.body)
    }
    display(){
     var pos = this.body.position;
     imageMode(CENTER);
     fill("green");
     image(this.image,pos.x,pos.y,this.width,this.height);
    }
 }
 
 
 
 