let diam;

const pieRandomDigits = 2;
let randomMethod = rndPie; // diam must be 10^pieRandomDigits
// let randomMethod = p5js;

function setup() {
    diam = pow(10, pieRandomDigits);
    createCanvas(diam, diam);
    frameRate(1);
}

function draw() {
    background('black');
    generatePoints(diam * diam);
}

function generatePoints(n) {
    let x;
    let y;
    let c = ['red', 'green', 'blue', 'cyan', 'yellow', 'magenta', 'white'];
    strokeWeight(1);
    for (i = 0; i < n; i++) {
        x = randomMethod();
        y = randomMethod();
        stroke(random(c));
        point(x, y);
    }
}

function p5js() {
    return random(0, diam);
}

function rndPie() {
    return randomPie(pieRandomDigits);
}