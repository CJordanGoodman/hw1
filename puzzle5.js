function performActionNTimes(action, n) {
  var actionCount = 0;
  while(actionCount < n) {
    action();
    actionCount = actionCount + 1;
  }
}

function advanceOneObstacle() {
  performActionNTimes(right, 2);
  if(getColor() == "blue") {
    down();
  } else {
    up();
  }
}

performActionNTimes(advanceOneObstacle, 3);
performActionNTimes(right, 3);
