var minPathSum = function(grid) {
    
    let storage = {}; 
    
    for( let j=0; j< grid[0].length; j++){
        for (let i=0; i < grid.length;i++){
            if (i===0 && j===0) storage[[i,j]] = grid[i][j];
            else {
            storage[[i,j]] = Math.min((typeof storage[[i-1,j]] === 'number'? storage[[i-1,j]] : Infinity), (typeof storage[[i,j-1]] === 'number'? storage[[i,j-1]] : Infinity)) + grid[i][j];
            }
        }
    }
    return storage[[grid.length-1,grid[0].length-1]];
    // return storage
};