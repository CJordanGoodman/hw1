function performActionNTimes(action, n) {
  var actionCount = 0;
  while(actionCount < n) {
    action();
    actionCount = actionCount + 1;
  }
}

performActionNTimes(down, 6);
performActionNTimes(right, 3);
performActionNTimes(up, 2);
performActionNTimes(right, 2);
performActionNTimes(down, 3);
