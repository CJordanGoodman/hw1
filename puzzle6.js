function performActionNTimes(action, n) {
  var actionCount = 0;
  while(actionCount < n) {
    action();
    actionCount = actionCount + 1;
  }
}

right();
if(getColor == "red") {
  performActionNTimes(up, 3);
  if(getColor == "red") {
    left();
  } else {
    right();
  }
  up();
} else {
  performActionNTimes(down, 3);
  left();
  down();
}
