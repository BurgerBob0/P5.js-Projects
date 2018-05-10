let w = 40;
let col, row;
let grid = [];
let current;
let stack = [];
let start = false;
let startButton,wSlider,wText;

function setup() {
    createCanvas(400, 400);
    wSlider = createSlider(10,50,40,5);
    wText = createP(40);
    startButton = createButton("Start");
    startButton.mousePressed(buttonPressed)
}

function buttonPressed(){
    grid[0][0].visited = true;
    current = grid[0][0];
    start = true;
}

//cell[y][x]

function draw() {
    background(0);
    w = wSlider.value();
    row = width / w;
    col = height / w;
    for (let i = 0; i < col; i++) {
        let temp = []
        for (let j = 0; j < row; j++) {
            temp.push(new Cell(j, i, w))
        }
        grid.push(temp);
    }
    grid.forEach(array => array.forEach(cell => cell.show()));
    wText.value = wSlider.value();
    if (start) {
        if (grid.every(array => array.every(cell => cell.visited))) {
            start = false;
            noLoop();
        }
        let neighbours = current.getNeighbours(grid);
        if (neighbours.length > 0) {
            let next = random(neighbours);
            stack.push(current);
            xoffset = current.x / current.w - next.x / current.w;
            yoffset = current.y / current.w - next.y / current.w;
            if (yoffset === 1) {
                //up
                current.north = false;
                next.south = false;
            } else if (xoffset === -1) {
                //right
                current.east = false;
                next.west = false;
            } else if (yoffset === -1) {
                //down
                current.south = false;
                next.north = false;
            } else if (xoffset === 1) {
                //left
                current.west = false;
                next.east = false;
            }
            current.current = false;
            current = next;
            current.visited = true;
            current.current = true;
        } else {
            current.current = false;
            current = stack[stack.length - 1]
            current.current = true;
            stack.splice(-1, 1);
        }
    }
}
