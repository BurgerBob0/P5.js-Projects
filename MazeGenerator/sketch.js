let w = 40;
let col, row;
let cells = [];

function setup() {
    createCanvas(400, 400);
    row = width / w;
    col = height / w;
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            cells.push(new Cell(i, j, w))
        }
    }
}

function draw() {
    background(0);
    for (cell of cells) {
        cell.show();
    }
}
