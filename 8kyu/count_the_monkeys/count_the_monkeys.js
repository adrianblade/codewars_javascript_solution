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

function monkeyCount2(n) {
  return Array.from({length:n}, (_,i)=>i+1)
}

function monkeyCount3(n) {
  var arr = [];
  for(var i=1; i<n+1; i++){
    arr.push(i);
  }
  return arr;
}
