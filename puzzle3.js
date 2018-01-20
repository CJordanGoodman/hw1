function performActionNTimes(action, n) {
  var actionCount = 0;
  while(actionCount < n) {
    action();
    actionCount = actionCount + 1;
  }
}

performActionNTimes(down, 2);
var savedColor = getColor();
performActionNTimes(down, 3);
performActionNTimes(right, 2);
setColor(savedColor);
performActionNTimes(right, 2);
up();
