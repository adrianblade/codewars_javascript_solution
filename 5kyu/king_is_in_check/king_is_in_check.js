exports.addTested = function kingIsInCheck (chessboard) {
    for(var i = 0; i < chessboard.length; i++) {
      var line = chessboard[i];
      for(var j = 0; j < line.length; j++) {
          //console.log("[" + i + "][" + j + "] = " + line[j]);
      }
    }
    return false ; // do your magic :)
  }

  exports.printChessboard = function printChessboard(chessboard) {
    appendString='\n';
    for(var i = 0; i < chessboard.length; i++) {
      appendString += "|---|---|---|---|---|---|---|---|\n";
      var line = chessboard[i];
      for(var j = 0; j < line.length; j++) {
        appendString += "| " + line[j] + " ";
      }
      appendString += "|\n";
    }
    return appendString;
  }