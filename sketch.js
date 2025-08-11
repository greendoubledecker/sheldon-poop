let poopWidth = 800;
let poopHeight = 80;
let widthDecrease = 160;

function setup() {
  createCanvas(800, 800);
  background(0, 255, 175);
  //noStroke();
  fill(50, 30, 0);
  poop();
}

function poop() {
  let currentWidth = poopWidth;
  let currentHeight = poopHeight;
  while (currentWidth > 0) {
    ellipse(
      width / 2,
      currentHeight + height - 2 * poopHeight,
      currentWidth,
      poopHeight * 2
    );
    currentWidth -= widthDecrease;
    currentHeight -= poopHeight;
  }
  //fill(0, 255, 175);
  //rect(width / 2 - poopWidth / 2, height - poopHeight, poopWidth, poopHeight);
  return;
}
