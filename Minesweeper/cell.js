class Cell {
    constructor(x, y, w) {
        this.x = x * w;
        this.y = y * w;
        this.w = w;
        this.bomb = false;
        this.neighbours = 0;
        this.revealed = false;
    }
    show() {
        strokeWeight(2);
        stroke(0, 0, 255);
        if (this.bomb) {
            fill(255, 0, 0);
            noStroke();
            rect(this.x, this.y, this.w, this.w);
        } else {
            textSize(16);
            fill(255);
            stroke(255);
            text(this.neighbours, this.x + this.w / 2, this.y + this.w / 2);
        }
        if (!this.revealed) {
            fill(0);
            stroke(127);
            rect(this.x, this.y, this.w, this.w);
        }
    }
    countNeighbours() {
        if (!this.bomb) {
            let neighbours = 0;
            //upLeft
            if (!(this.x === 0 || this.y === 0)) {
                if (grid[this.y / this.w - 1][this.x / this.w - 1].bomb) {
                    neighbours++;
                }
            }
            //up
            if (!(this.y === 0)) {
                if (grid[this.y / this.w - 1][this.x / this.w].bomb) {
                    neighbours++;
                }
            }
            //upRight
            if (!(this.x + this.w === width || this.y === 0)) {
                if (grid[this.y / this.w - 1][this.x / this.w + 1].bomb) {
                    neighbours++;
                }
            }
            //left
            if (!(this.x === 0)) {
                if (grid[this.y / this.w][this.x / this.w - 1].bomb) {
                    neighbours++;
                }
            }
            //right
            if (!(this.x + this.w === width)) {
                if (grid[this.y / this.w][this.x / this.w + 1].bomb) {
                    neighbours++;
                }
            }
            //downLeft
            if (!(this.x === 0 || this.y + this.w === height)) {
                if (grid[this.y / this.w + 1][this.x / this.w - 1].bomb) {
                    neighbours++;
                }
            }
            //down
            if (!(this.y + this.w === height)) {
                if (grid[this.y / this.w + 1][this.x / this.w].bomb) {
                    neighbours++;
                }
            }
            //downRight
            if (!(this.x + this.w === width || this.y + this.w === height)) {
                if (grid[this.y / this.w + 1][this.x / this.w + 1].bomb) {
                    neighbours++;
                }
            }
            this.neighbours = neighbours;
        }else {
            this.neighbours = -1
        }
    }
    reveal() {
        this.revealed = true;
        if(this.neighbours === 0){
            this.revealEmptyNeighbours();
        }
    }
    revealEmptyNeighbours(){
        //up
        if (!(this.y === 0)) {
            if (!(grid[this.y / this.w - 1][this.x / this.w].revealed)) {
                grid[this.y / this.w - 1][this.x / this.w].reveal();
            }
        }
        //left
        if (!(this.x === 0)) {
            if (!(grid[this.y / this.w][this.x / this.w - 1].revealed)) {
                grid[this.y / this.w][this.x / this.w - 1].reveal();
            }
        }
        //right
        if (!(this.x + this.w === width)) {
            if (!(grid[this.y / this.w][this.x / this.w + 1].revealed)) {
                grid[this.y / this.w][this.x / this.w + 1].reveal();
            }
        }
        //down
        if (!(this.y + this.w === height)) {
            if (!(grid[this.y / this.w + 1][this.x / this.w].revealed)) {
                grid[this.y / this.w + 1][this.x / this.w].reveal();
            }
        }
    }
}
