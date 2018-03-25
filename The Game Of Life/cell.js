class Cell {
    constructor(x, y, w) {
        this.x = x * w;
        this.y = y * w;
        this.w = w;
        this.alive = boolean(floor(random(0, 1.1)));
    }
    show() {
        if (this.alive) {
            fill(0);
        } else {
            fill(255);
        }
        stroke(127);
        strokeWeight(3);
        rect(this.x, this.y, this.w, this.w);
    }
    livingNeighbours() {
        let neighbours = 0;
        //upLeft
        if (!(this.x === 0 || this.y === 0)) {
            if (grid[this.y / this.w - 1][this.x / this.w - 1].alive) {
                neighbours++;
            }
        }
        //up
        if (!(this.y === 0)) {
            if (grid[this.y / this.w - 1][this.x / this.w].alive) {
                neighbours++;
            }
        }
        //upRight
        if (!(this.x + this.w === width || this.y === 0)) {
            if (grid[this.y / this.w - 1][this.x / this.w + 1].alive) {
                neighbours++;
            }
        }
        //left
        if (!(this.x === 0)) {
            if (grid[this.y / this.w][this.x / this.w - 1].alive) {
                neighbours++;
            }
        }
        //right
        if (!(this.x + this.w === width)) {
            if (grid[this.y / this.w][this.x / this.w + 1].alive) {
                neighbours++;
            }
        }
        //downLeft
        if (!(this.x === 0 || this.y + this.w === height)) {
            if (grid[this.y / this.w + 1][this.x / this.w - 1].alive) {
                neighbours++;
            }
        }
        //down
        if (!(this.y + this.w === height)) {
            if (grid[this.y / this.w + 1][this.x / this.w].alive) {
                neighbours++;
            }
        }
        //downRight
        if (!(this.x + this.w === width || this.y + this.w === height)) {
            if (grid[this.y / this.w + 1][this.x / this.w + 1].alive) {
                neighbours++;
            }
        }
        this.neighbours = neighbours;
    }
    update() {
        return this.alive ? (!(this.neighbours < 2 || this.neighbours > 3)) : (this.neighbours === 3)
    }
}
