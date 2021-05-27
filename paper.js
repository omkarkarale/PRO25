class Paper {
    constructor(x,y){
        var options = {
            'density':1.2,
            'friction':0,
            'restitution':0.3
        }
        this.body = Bodies.rectangle(x,y,50,50);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("paper.png")
        this.image
        World.add(world,this.body);
    }
    display()
    {
        var angle = this.body.angle;
        var pos = this.body.position;
        console.log(this.body);
        push();
        translate(pos.x, pos.y);
        rotate(angle);        
        imageMode(CENTER)
        image(this.image,0,0,50,50)
        pop();
        
    }
}