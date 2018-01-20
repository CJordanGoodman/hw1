function performActionNTimes(action, n) {
  var actionCount = 0;
  while(actionCount < n) {
    action();
    actionCount = actionCount + 1;
  }
}

performActionNTimes(down, 7);
performActionNTimes(right, 5);
performActionNTimes(up, 2);
performActionNTimes(right, 2);
