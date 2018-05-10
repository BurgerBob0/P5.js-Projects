let grid = [];
let cols, rows;
let w = 40;


function setup() {
    createCanvas(400, 400);
    cols = height / w;
    rows = width / w;
    for (let i = 0; i < cols; i++) {
        let temp = []
        for (let j = 0; j < rows; j++) {
            temp.push(new Cell(j, i, w))
        }
        grid.push(temp);
    }
    let bombs = 0;
    while (bombs !== 10) {
        indexY = floor(random(0, grid.length));
        indexX = floor(random(0, grid[0].length));
        if (grid[indexY][indexX].bomb) {
            continue;
        }
        bombs++;
        grid[indexY][indexX].bomb = true;

    }
}

function draw() {
    background(127);
    grid.forEach(array => array.forEach(cell => cell.countNeighbours()));
    grid.forEach(array => array.forEach(cell => cell.show()));
    bombRevealed = !(grid.every(array => array.every(cell => !(cell.bomb && cell.revealed))))
    if(bombRevealed){
        noLoop();
    }
}

function mousePressed() {
    test:
    for (array of grid) {
        for (cell of array) {
            if (mouseX > cell.x && mouseX < cell.x + cell.w && mouseY > cell.y && mouseY < cell.y + cell.w) {
                cell.reveal();
                break test;
            }
        }
    }
}
