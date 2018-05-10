let x = 0;
let y = 0;
let w = 5;

function setup() {
    createCanvas(400, 400);
    background(50, 50, 255);
}

function draw() {
    stroke(0);
    if (floor(random() * 2) === 1) {
        line(x, y, x + w, y + w);
    } else {
        line(x + w, y, x, y + w);
    }
    x += w
    if (x >= width) {
        x = 0;
        y += w;
    }
    if(y>=height){
        noLoop();
    }
}
