var knightTour = function (num) {
  //--------build board--------
  var board = [];
  for (var i = 0; i < num; i++) {
    board.push([])
    for (var j = 0; j < num; j++) {
      board[i].push('O');
    }
  }
  //-------define violation-------

  var hasConflict = function (r, c) {
    if (r < 0 || c < 0 || r > num - 1 || c > num - 1){
      return true; 
    } else if (board[r][c] !== 'O') {
      return true;
    } else {
      return false;
    }
  }
  //--------define move---------
  var move = [[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];
  // var move = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
  //----recursive function(backtracking)----
  var counter = 0; 
  var solver = function (r,c){
    counter++; 
    if (counter === num*num + 1){
      return; 
    } else if (hasConflict(r,c)){
      counter--; 
      return; 
    } else {
      board[r][c] = counter; 
      for (var i=0; i< move.length; i++){
        solver(r+move[i][0],c+move[i][1]); 
        if (counter === num*num + 1){
          return; 
        } 
      }
      board[r][c]='O'; 
      counter--; 
    }
  }
solver(0,0);
return board; 
}

