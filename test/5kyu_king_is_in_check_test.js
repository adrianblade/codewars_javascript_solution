var kingIsInCheck = require('../5kyu/king_is_in_check/king_is_in_check');

const assert = require("chai").assert;

describe("sample tests", function() {
  let chessboard;

  it("should work with a check by pawn", function() {
  
  chessboard=[[' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ','♟',' ',' ',' ',' '],
              [' ',' ','♔',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' ']];
 console.log("<pre>"+kingIsInCheck.printChessboard(chessboard)+"</pre>");           
 assert.equal(kingIsInCheck.addTested (chessboard),true);
  });

  it("should work with a check by pawn in square", function() {
  
    chessboard=[[' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' '],
                ['♟',' ',' ',' ',' ',' ',' ',' '],
                [' ','♔',' ',' ',' ',' ',' ',' ']];
   console.log("<pre>"+kingIsInCheck.printChessboard(chessboard)+"</pre>");           
   assert.equal(kingIsInCheck.addTested (chessboard),true);
    });
 
    it("should work with a check by bishop", function() {

  chessboard=[[' ',' ',' ',' ',' ',' ',' ','♝'],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              ['♔',' ',' ',' ',' ',' ',' ',' ']];
  console.log("<pre>"+ kingIsInCheck.printChessboard(chessboard)+"</pre>");
  assert.equal(kingIsInCheck.addTested (chessboard),true);
  });
  
    it("should work with a check by rook", function() {
  chessboard=[[' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ','♔',' ',' ','♜',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' ']]; 
  console.log("<pre>"+ kingIsInCheck.printChessboard(chessboard)+"</pre>");
  assert.equal(kingIsInCheck.addTested (chessboard),true);
  });
    it("should work with a check by knight", function() {
  chessboard=[[' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ','♔',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              ['♞',' ',' ',' ',' ',' ',' ',' ']];     
  console.log("<pre>"+ kingIsInCheck.printChessboard(chessboard)+"</pre>");        
  assert.equal(kingIsInCheck.addTested (chessboard),true);
  });
    it("should work with a check by queen", function() {
  chessboard=[[' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ','♛',' ','♔',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' ']]; 
     console.log("<pre>"+ kingIsInCheck.printChessboard(chessboard)+"</pre>");
     assert.equal(kingIsInCheck.addTested (chessboard),true);
  });
    it("should work with a king alone", function() {
  chessboard=[[' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ','♔',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' ']]; 
     console.log("<pre>"+ kingIsInCheck.printChessboard(chessboard)+"</pre>");
     assert.equal(kingIsInCheck.addTested (chessboard),false);
  });

    it("should work with no check", function() {
  chessboard=[[' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              ['♛',' ',' ','♞',' ',' ',' ','♛'],
              [' ',' ',' ','♔',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' ']]; 
     console.log("<pre>"+ kingIsInCheck.printChessboard(chessboard)+"</pre>");
     assert.equal(kingIsInCheck.addTested (chessboard),false);
  });

    it("should work with a piece blocking another's line of sight", function() {
  chessboard=[[' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              ['♜',' ','♝','♔',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' ']]; 
     console.log("<pre>"+ kingIsInCheck.printChessboard(chessboard)+"</pre>");
     assert.equal(kingIsInCheck.addTested (chessboard),false);
  });
});