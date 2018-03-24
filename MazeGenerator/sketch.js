let w = 40;
let col, row;
let cells = [];

function setup() {
    createCanvas(400, 400);
    row = width / w;
    col = height / w;
    for (let i = 0; i < col; i++) {
        let temp = []
        for (let j = 0; j < row; j++) {
            temp.push(new Cell(j, i, w))
        }
        cells.push(temp);
    }
    cells[0][0].visited = true;
}

//cell[y][x]

function draw() {
    background(0);
    for (rows of cells) {
        for (cell of rows) {
            cell.show();
        }
    }
}
