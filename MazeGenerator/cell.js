class Cell {
    constructor(x, y, w) {
        this.x = x * w;
        this.y = y * w;
        this.w = w;
        this.visited = false;
        if (this.y === 0) {
            this.north = true
        } else {
            this.north = false;
        }
        if (this.x + this.w === width) {
            this.east = true
        } else {
            this.east = false;
        }
        if (this.y + this.w === height) {
            this.south = true
        } else {
            this.south = false;
        }
        if (this.x === 0) {
            this.west = true
        } else {
            this.west = false;
        }
    }
    show() {
        fill(0, 0, 0);
        noStroke();
        rect(this.x, this.y, this.w, this.w);
        if (this.north) {
            //closed wall
            stroke(255, 0, 0);
            strokeWeight(4);
            line(this.x, this.y, this.x + this.w, this.y);
        } else {
            //open wall
            stroke(0, 255, 0);
            strokeWeight(1);
            line(this.x, this.y, this.x + this.w, this.y);
        }
        if (this.east) {
            //closed wall
            stroke(255, 0, 0);
            strokeWeight(4);
            line(this.x + this.w, this.y, this.x + this.w, this.y + this.w);
        } else {
            //open wall
            stroke(0, 255, 0);
            strokeWeight(1);
            line(this.x + this.w, this.y, this.x + this.w, this.y + this.w);
        }
        if (this.south) {
            //closed wall
            stroke(255, 0, 0);
            strokeWeight(4);
            line(this.x, this.y + this.w, this.x + this.w, this.y + this.w);
        } else {
            //open wall
            stroke(0, 255, 0);
            strokeWeight(1);
            line(this.x, this.y + this.w, this.x + this.w, this.y + this.w);
        }
        if (this.west) {
            //closed wall
            stroke(255, 0, 0);
            strokeWeight(4);
            line(this.x, this.y, this.x, this.y + this.w);
        } else {
            //open wall
            stroke(0, 255, 0);
            strokeWeight(1);
            line(this.x, this.y, this.x, this.y + this.w);
        }
    }
}
