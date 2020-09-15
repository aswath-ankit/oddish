class Ball{
    constructor(x,y,s){
 
        var options ={
            isStatic:false,
            restitution:1,
			friction:0,
			density:8.0
        }

        this.x=x;
		this.y=y;
		this.s=s;
        this.body=Bodies.circle(this.x, this.y, this.s/2, options);
        

        World.add(world, this.body);
    }
    display(){       
		
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			
			fill(255,0,255)
			ellipse(0,0,this.s, this.s);
			pop()
			
	}





}









