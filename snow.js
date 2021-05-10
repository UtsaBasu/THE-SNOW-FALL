class snow{
	constructor(x,y)
	{
		var space={
			isStatic:false,
			restitution :0,
            friction :1
			}

        this.body = Bodies.circle(x,y,20, space);
		this.image=loadImage("snow4.webp");
		World.add(world, this.body);
	}

	display()
	{
		var Pos2=this.body.position;
        if(Pos2.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)});
        }	
		push()
		translate(Pos2.x,Pos2.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,30,30)
		pop()
 }
}