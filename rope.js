class rope {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            isStatic: true,
            stiffness:0.04,
            pointB: {
                x: this.offsetX,
                y: this.offsetY
            }
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }
    display() {
        var pointA = this.rope.bodyA.position
        var pointC = this.rope.bodyB.position;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointC.x, pointC.y)
    }
}