function performActionNTimes(action, n) {
  var actionCount = 0;
  while(actionCount < n) {
    action();
    actionCount = actionCount + 1;
  }
}

performActionNTimes(down, 4);
right();
var savedColor = getColor();
down();
setColor(savedColor);
performActionNTimes(right, 3);
up();
savedColor = getColor();
down();
setColor(savedColor);
performActionNTimes(right, 2);
