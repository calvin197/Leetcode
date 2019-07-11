var rotate = function(matrix){
  for (let i = 0; i < Math.floor(matrix.length/2); i++){
    let startIdx = i;
    let endIdx = matrix.length-1-i;
    for (let j = 0; j < endIdx-startIdx; j++){
      // swap top left and top right
      swap(matrix, startIdx, startIdx+j, startIdx+j, endIdx);
      // swap top left and bottom right
      swap(matrix, startIdx, startIdx+j, endIdx, endIdx-j);
      // swap top left and bottom left
      swap(matrix, startIdx, startIdx+j, endIdx-j, startIdx)
    }
  }
}

var swap = function(matrix, a1, a2, b1, b2){
  [matrix[a1][a2], matrix[b1][b2]] = [ matrix[b1][b2], matrix[a1][a2]];
}




var rotate = function(matrix){
  let total = Math.floor(matrix.length / 2);
  let start = 0; 
  while (total > 0){
    let end = matrix.length-start-1; 
    for (let i = 0; i < end-start ; i++){
      // swap first and second
      [matrix[start][start+i], matrix[start+i][end]] = [matrix[start+i][end],matrix[start][start+i]];
      // swap first and third
      [matrix[start][start+i], matrix[end][end-i]] = [matrix[end][end-i],matrix[start][start+i]];
      // swap first and forth
      [matrix[start][start+i], matrix[end-i][start]] = [matrix[end-i][start],matrix[start][start+i]];
    }
    start ++
    total --;
  }
}

// build a helper function to swap might be a good idea

// let first = matrix[start][start+i];
// let second = matrix[start+i][end];
// let third = matrix[end][end-i];
// let forth = matrix[end-i][start];