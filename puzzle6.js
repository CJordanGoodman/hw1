function performActionNTimes(action, n) {
  var actionCount = 0;
  while(actionCount < n) {
    action();
    actionCount = actionCount + 1;
  }
}

right();
var firstColor = getColor();
if(firstColor == "red") {
  performActionNTimes(up, 3);
} else {
  performActionNTimes(down, 3);
}
if (getColor() == "red") {
  left();
} else{
  right();
}
if (firstColor == "red") {
  up();
} else{
  down();
}
