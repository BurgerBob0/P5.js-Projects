class Cell {
    constructor(x, y, w) {
        this.x = x * w;
        this.y = y * w;
        this.w = w;
        this.visited = false;
        this.current = false;
        // if (this.y === 0) {
        //     this.north = true
        // } else {
        //     this.north = false;
        // }
        // if (this.x + this.w === width) {
        //     this.east = true
        // } else {
        //     this.east = false;
        // }
        // if (this.y + this.w === height) {
        //     this.south = true
        // } else {
        //     this.south = false;
        // }
        // if (this.x === 0) {
        //     this.west = true
        // } else {
        //     this.west = false;
        // }
        this.north = true
        this.east = true
        this.south = true
        this.west = true
    }
    show() {
        fill(0, 0, 0);
        if (this.visited) {
            fill(127);
        }
        if(this.current){
            fill(0,0,255);
        }
        noStroke();
        rect(this.x, this.y, this.w, this.w);
        if (this.north) {
            //closed wall
            stroke(255, 0, 0);
            strokeWeight(4);
            line(this.x, this.y, this.x + this.w, this.y);
        }
        if (this.east) {
            //closed wall
            stroke(255, 0, 0);
            strokeWeight(4);
            line(this.x + this.w, this.y, this.x + this.w, this.y + this.w);
        }
        if (this.south) {
            //closed wall
            stroke(255, 0, 0);
            strokeWeight(4);
            line(this.x, this.y + this.w, this.x + this.w, this.y + this.w);
        }
        if (this.west) {
            //closed wall
            stroke(255, 0, 0);
            strokeWeight(4);
            line(this.x, this.y, this.x, this.y + this.w);
        }
    }
    getNeighbours(cells) {
        let neighbours = [];
        //up
        if (!(this.y === 0)) {
            if (cells[this.y / this.w - 1][this.x / this.w].visited === false) {
                neighbours.push(cells[this.y / this.w - 1][this.x / this.w]);
            }
        }
        //right
        if (!(this.x + this.w === width)) {
            if (cells[this.y / this.w][this.x / this.w + 1].visited === false) {
                neighbours.push(cells[this.y / this.w][this.x / this.w + 1]);
            }
        }
        //down
        if (!(this.y + this.w === height)) {
            if (cells[this.y / this.w + 1][this.x / this.w].visited === false) {
                neighbours.push(cells[this.y / this.w + 1][this.x / this.w]);
            }
        }
        //left
        if (!(this.x === 0)) {
            if (cells[this.y / this.w][this.x / this.w - 1].visited === false) {
                neighbours.push(cells[this.y / this.w][this.x / this.w - 1]);
            }
        }
        return neighbours;
    }
}
