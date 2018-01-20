function performActionNTimes(action, n) {
  var actionCount = 0;
  while(actionCount < n) {
    action();
    actionCount = actionCount + 1;
  }
}

performActionNTimes(down, 8);
performActionNTimes(right, 2);
performActionNTimes(up, 7);
performActionNTimes(right, 2);
performActionNTimes(down, 7);
performActionNTimes(right, 2);
performActionNTimes(up, 7);
performActionNTimes(right, 2);
performActionNTimes(down, 7);
right();
