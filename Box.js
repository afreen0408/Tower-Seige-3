class Box
{
	constructor(x,y,w,h)
	{
		
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.Visibility=255
		this.body=Bodies.rectangle(x, y, w, h);
 		World.add(world, this.body);

	}
	display()
	{
			if(this.body.speed<3){
			var groundPos=this.body.position;		
            var angle=this.body.angle;
			push()
            translate(groundPos.x, groundPos.y);
            rotate (angle)
			rectMode(CENTER)
			strokeWeight(1);
			//fill("lightblue")
			rect(0,0,this.w, this.h);
			pop()
			}
			else{
				World.remove(world,this.body)
				push();
				this.Visibility-=5
				//tint(255,this.Visibility)
				pop();

			}
	}
score(){

	if(this.Visibility<0 && this.Visibility>-105)
	score++;
}
}