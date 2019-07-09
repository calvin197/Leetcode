var uniquePathsWithObstacles = function(obstacleGrid) {
    let storage = []; 
    for (let j = 0; j<obstacleGrid[0].length; j++){
        for (let i = 0; i<obstacleGrid.length; i++){
            if (obstacleGrid[i][j]===0){
                if (i===0 && j===0) storage[i] = 1;
                else{
                    storage[i] = (typeof storage[i] === "number"?storage[i]:0) + (typeof storage[i-1] === "number"?storage[i-1]:0)
                }
            } else {
                storage[i] = 0; 
            }
        }
    }
    return storage[obstacleGrid.length-1];
};