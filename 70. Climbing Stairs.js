// DP

var climbStairs = function(n) {
    let curr = 1; 
    let pre = 0; 
    for (let i = 1; i <= n; i++){
        let holder = curr; 
        curr = curr + pre; 
        pre = holder; 
    }
    return curr; 
};