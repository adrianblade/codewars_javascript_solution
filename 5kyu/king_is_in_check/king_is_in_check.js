exports.addTested = function kingIsInCheck (chessboard) {
    for(var i = 0; i < chessboard.length; i++) {
      var line = chessboard[i];
      for(var j = 0; j < line.length; j++) {
        if (chessboard[i][j] === '♟') {
          return checkPeon(chessboard, i, j);
        }
        if (chessboard[i][j] === '♝') {
          return checkAlfil(chessboard, i, j);
        }
        if (chessboard[i][j] === '♜') {
          return checkTorre(chessboard, i, j);
        }
        if (chessboard[i][j] === '♞') {
          return checkCaballo(chessboard, i, j);
        }
        if (chessboard[i][j] === '♛') {
          return checkQueen(chessboard, i, j);
        }
          //console.log("[" + i + "][" + j + "] = " + line[j]);
      }
    }
    return false ; // do your magic :)
  }

  function checkCaballo(chessboard, i, j) {

  }

  function checkPeon(chessboard, i, j) {
    return chessboard[i-1][j+1] === '♔' 
        || chessboard[i][j+1] === '♔'
        || chessboard[i+1][j+1] === '♔'
        || chessboard[i-1][j] === '♔'
        || chessboard[i][j] === '♔'
        || chessboard[i+1][j] === '♔'
        || chessboard[i-1][j-1] === '♔'
        || chessboard[i][j-1] === '♔'
        || chessboard[i+1][j-1] === '♔';
  }

  function checkQueen(chessboard, i, j) {

  }

  function checkTorre(chessboard, i, j) {

  }

  function checkAlfil(chessboard, i, j) {
    return chessboard[i-1][j-1] === '♔' 
        || chessboard[i-1][j+1] === '♔'
        || chessboard[i+1][j-1] === '♔'
        || chessboard[i+1][j+1] === '♔';
  }

  // OTHER FUNCTIONS
  exports.printChessboard = function printChessboard(chessboard) {
    appendString='\n';
    for(var i = 0; i < chessboard.length; i++) {
      appendString += "|---|---|---|---|---|---|---|---|\n";
      for(var j = 0; j < chessboard[i].length; j++) {
        appendString += "| " + chessboard[i][j] + " ";
      }
      appendString += "|\n";
    }
    return appendString;
  }