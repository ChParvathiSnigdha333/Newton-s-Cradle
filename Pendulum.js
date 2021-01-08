class Pendulum {
    constructor(x,y,color) {
        var opt = {
            'restitution':1,
            'friction' : 0 ,
            'frictionAir' : 0.0 ,
            'slop' : 1 ,
            'inertia' : Infinity
        }
        this.body = Bodies.rectangle(x,y,40,40,opt)
        this.x = x;
        this.y = y;
        this.color = color ;
        World.add(world,this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("white") ;
        fill("black")
        ellipse(0,0,60,60);
        pop();
    }
} 