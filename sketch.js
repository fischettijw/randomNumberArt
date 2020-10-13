function setup() {
    createCanvas(500, 500);
    frameRate(1 / 3);
}

function draw() {
    background('black');
    generatePoints(width * height);
}

function generatePoints(n) {
    let x;
    let y;
    let c = ['red', 'green', 'blue', 'cyan', 'yellow', 'magenta', 'white'];
    strokeWeight(1);
    for (i = 0; i < n; i++) {
        x = floor(random(0, width));
        y = floor(random(0, height));
        stroke(random(c));
        point(x, y);
    }
}