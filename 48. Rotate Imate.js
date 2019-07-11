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