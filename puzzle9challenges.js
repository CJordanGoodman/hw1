// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match


// Rudy's coordinates, with the origin defined as the top left corner, 
// with x increasing to the right, and y increasing downward.
globX = 0;
globY = 0;

function moveRight() {
	right();
  globX++;
}

function moveLeft() {
	left();
  globX--;
}

function moveUp() {
	up();
  globY--;
}

function moveDown() {
	down();
  globY++;
}

function drawRectangle(height, width) {
  drawNLongLine(moveRight, width);
  drawNLongLine(moveDown, height);
  drawNLongLine(moveLeft, width);
  drawNLongLine(moveUp, height);
}

function drawFilledRectangle(height, width) {
  drawFilledRectangleWithColor(height, width, "red");
}

function drawFilledRectangleWithColor(height, width, color) {
  var column = 0;
  while (column < width) {
  	drawNLongLineWithColor(moveDown, height, color);
    moveRight();
    performActionNTimes(moveUp, height - 1);
    column++;
  }
}

function drawNLongLine(direction, n) {
  drawNLongLineWithColor(direction, n, "red");
}


function drawNLongLineWithColor(direction, n, color) {
  var actionCount = 0;
  while(actionCount < (n - 1)) {
    setColor(color);
    direction();
    actionCount = actionCount + 1;
  }
  setColor(color);
}

function performActionNTimes(action, n) {
  var actionCount = 0;
  while(actionCount < n) {
    action();
    actionCount = actionCount + 1;
  }
}

function drawTwoParallelLinesAndAdvance() {
  drawNLongLine(moveDown, 20);
	performActionNTimes(moveRight, 3);
  drawNLongLine(moveUp, 20);
	performActionNTimes(moveRight, 3);
}

function moveToCoordinates(x, y) {
	while (globX < x) {
    moveRight();
  }
  while (globX > x) {
    moveLeft();
  }
  while (globY < y) {
    moveDown();
  }
  while (globY > y) {
    moveUp();
  }
}



// Puzzle 9: Draw Rectangle (Golden Ratio)
//drawRectangle(89, 55);

// Challenge 1: Draw 4 Rectangles
//drawRectangle(8, 13);
//performActionNTimes(moveRight, 15);
//performActionNTimes(moveDown, 3);
//drawRectangle(21, 13);
//performActionNTimes(moveDown, 27);
//performActionNTimes(moveLeft, 5);
//drawRectangle(5, 8);
//performActionNTimes(moveLeft, 10);
//performActionNTimes(moveUp, 4);
//drawRectangle(13, 8);

// Challenge 2: Draw 10 Parallel Vertical Lines, 20 Squares Long, 3 Squares Apart
// performActionNTimes(drawTwoParallelLinesAndAdvance, 5);

// Challenge 3: Create Function Rect that Draws Rect of Width And Height at Coords x, y
//function rect(x, y, width, height) {
//  moveToCoordinates(x, y);
//  drawRectangle(height, width);
//}
// rect(10, 20, 3, 8);
// rect(14, 20, 3, 8);

// Challenge 4: Modify the Rect Function so that it Fills the Rectangle
// function rect(x, y, width, height) {
//  moveToCoordinates(x, y);
//  drawFilledRectangle(height, width);
// }

// rect(10, 20, 3, 8);

// Challenge 5: Modify the Rect Function to take a Color
//function rect(x, y, width, height, color) {
//  moveToCoordinates(x, y);
//  drawFilledRectangleWithColor(height, width, color);
//}

//rect(10, 20, 3, 8, "blue");

// Challenge 6: Draw with Randomness

//var n = 0;
//var direction = moveRight;
//while (n < 200) {
//  if (Math.random() >= 0.9) {
//    var dirDecider = Math.random();
//    if (dirDecider <= 0.25) {
//      direction = moveRight;
//   } else if (dirDecider <= 0.5) {
//      direction = moveUp;
//    } else if (dirDecider <= 0.75) {
//      direction = moveLeft;
//    } else{
//      direction = moveDown;
//    }
//  }
//  if (Math.random() >= 0.98) {
//    moveToCoordinates(Math.floor(70 * Math.random()), Math.floor(140 * Math.random()));
//  }
//  var colorDecider = Math.random();
//  if (colorDecider <= 0.2) {
//    continue;
//  } else if (colorDecider <= 0.6) {
//    setColor("red");
//  } else {
//   setColor("blue");
//  }
//  direction();
//  n++;
//}

// Challenge 7: Randomly determine velocity
//var px = 0;
//var py = 0;
//var vx = 1;
//var vy = 1;
//var time = 0;
//while (time < 200) {
// 	moveToCoordinates(px + vx, py + vy);
//  var signDecider = Math.random();
//  if (signDecider <= 0.7) {
//  	vx += 3 * Math.random();
//  } else {
//    vx -= 3 * Math.random();
//  }
//  signDecider = Math.random();
//  if (signDecider <= 0.7) {
//  	vy += 3 * Math.random();
//  } else {
//   	vy -= 3 * Math.random(); 
//  }
// setColor("red")
//  time++;
//}

// Challenge 8: Draw a line between (x1, y1), and (x2, y2)
//function line(x1, y1, x2, y2) {
//  px = x1;
//  py = y1;
//  dx = x2 - x1;
//  dy = y2 - y1;
//  increment = 0.005;
//  while (px < x2 || py < y2) {
//    moveToCoordinates(px, py);
//    setColor("red");
//    px += dx * increment;
//    py += dy * increment;
//  }
//  moveToCoordinates(px, py);
//  setColor("red");
//}

//line(0, 0, 35, 70);

// Challenge 9: Draw a circle of radius r centered at x, y
function circle(x, y, r) {
	degree = 0;
  moveToCoordinates(x, y);
  setColor("blue");
  while (degree < 360) {
    moveToCoordinates(x + r * Math.cos(degree * Math.PI/180), y + r * Math.sin(degree * Math.PI/180));
    setColor("red");
    degree += 1;
  }
}

circle(35, 35, 30);



