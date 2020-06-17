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
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        var anchor1Y = pointA.y
        var anchor1X = pointA.x
        var anchor2Y = pointB.y+this.offsetY
        var anchor2X = pointB.x+this.offsetX
        line(anchor1X, anchor1Y, anchor2X, anchor2Y)
    }
}