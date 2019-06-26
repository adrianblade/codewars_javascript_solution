exports.addTested = function monkeyCount(n) {
  var arr = [];
  if (n == 0) {
    return arr;
  } else {
    while (n != 0) {
      arr.push(n);
      --n;
    }
  }
  return arr.reverse();
}
