function drawNLongLine(direction, n) {
  var actionCount = 0;
  while(actionCount < (n - 1)) {
    setColor("red");
    direction();
    actionCount = actionCount + 1;
  }
  setColor("red");
}

drawNLongLine(right, 5);
drawNLongLine(down, 3);
drawNLongLine(left, 5);
drawNLongLine(up, 3);
