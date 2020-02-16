var bishopThreats = [true,  false,  true,   false,  false,  true,   false,  true]; // ALFIL
var rookThreats =   [false, true,   false,  true,   true,   false,  true,   false]; // TORRE
var queenThreats =  [true,  true,   true,   true,   true,   true,   true,   true];
var kingThreats =   [true,  true,   true,   true,   true,   true,   true,   true];

exports.addTested = function kingIsInCheck (chessboard) {
    for(var i = 0; i < chessboard.length; i++) {
      var line = chessboard[i];
      for(var j = 0; j < line.length; j++) {
        if (chessboard[i][j] === '♔') {
          console.log("King is localted on:" + "i: " + i +" j: " + j);
          return checkHorse(chessboard, i, j) 
                || checkHorizontalAndVertical(chessboard, i, j, '♜')
                || checkDiagonal(chessboard, i, j, '♝')
                || checkPeon(chessboard, i, j)
                || checkHorizontalAndVertical(chessboard, i, j, '♛') 
                || checkDiagonal(chessboard, i, j, '♛');
        }
      }
    }
    return false ; // do your magic :)
  }

  function checkHorse(chessboard, i, j) {
    return (chessboard[i-1] !== undefined && chessboard[i-1][j+2] === '♞')
        || (chessboard[i-1] !== undefined && chessboard[i-1][j-2] === '♞')
        || (chessboard[i-2] !== undefined && chessboard[i-2][j+1] === '♞')
        || (chessboard[i-2] !== undefined && chessboard[i-2][j-1] === '♞')
        || (chessboard[i+1] !== undefined && chessboard[i+1][j+2] === '♞')
        || (chessboard[i+1] !== undefined && chessboard[i+1][j-2] === '♞')
        || (chessboard[i+2] !== undefined && chessboard[i+2][j+1] === '♞')
        || (chessboard[i+2] !== undefined && chessboard[i+2][j-1] === '♞');
  }

  function checkPeon(chessboard, i, j) {
    return (chessboard[i-1] !== undefined && chessboard[i-1][j-1] === '♟')
        || (chessboard[i-1] !== undefined && chessboard[i-1][j+1] === '♟');
  }

  function checkHorizontalAndVertical(chessboard, i, j, figure) {
    var check = false;
    // Figure should be up
    var auxI=i;
    while (auxI > 0) {
      check = check || (chessboard[auxI-1] !== undefined && chessboard[auxI-1][j] === figure);
      auxI--;
    }
    // Figure should be down
    auxI=i;
    while (auxI < 7) {
      check = check || (chessboard[auxI+1] !== undefined && chessboard[auxI+1][j] === figure);
      auxI++;
    }
    // Figure should be left
    var auxJ=j;
    while (auxJ > 0) {
      check = check || (chessboard[i] !== undefined && chessboard[i][auxJ-1] === figure);
      auxJ--;
    }
    // Figure should be right right
    auxJ=j;
    while (auxJ < 7) {
      check = check || (chessboard[i] !== undefined && chessboard[i][auxJ+1] === figure);
      auxJ++;
    }
    return check;
  }

  function checkDiagonal(chessboard, i, j, figure) {
    var check = false;
    // Figure should be left up
    var auxI=i;
    var auxJ=j;
    while (auxI > 0 || auxJ > 0) {
      check = check || (chessboard[auxI-1] !== undefined && chessboard[auxI-1][auxJ-1] === figure);
      auxI--;
      auxJ--;
    }
    // Figure should be left down
    auxI=i;
    auxJ=j;
    while (auxI < 7 || auxJ > 0) {
      check = check || (chessboard[auxI+1] !== undefined && chessboard[auxI+1][auxJ-1] === figure);
      auxI++;
      auxJ--;
    }
    // Figure should be right up
    auxI=i;
    auxJ=j;
    while (auxI> 0 || auxJ < 7) {
      check = check || (chessboard[auxI-1] !== undefined && chessboard[auxI-1][auxJ+1] === figure);
      auxI--;
      auxJ++;
    }
    // Figure should be right down
    auxI=i;
    auxJ=j;
    while (auxI < 7 || auxJ < 7) {
      check = check || (chessboard[auxI+1] !== undefined && chessboard[auxI+1][auxJ+1] === figure);
      auxI++;
      auxJ++;
    }
    return check;
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