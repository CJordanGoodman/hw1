function performActionUntilRed(action) {
  while(getColor() != "red") {
    action();
  }
}

performActionUntilRed(down);
right();
right();
performActionUntilRed(up);
right();
right();
performActionUntilRed(down);
right();
right();
performActionUntilRed(up);
right();
right();
performActionUntilRed(down);
right();
