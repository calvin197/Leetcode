// normal recursion

const fib = function(k) {
  let result;
  if (k === 1 || k === 2) {
    result = 1;
  } else {
    result = fib(k - 1) + fib(k - 2);
  }
  return result;
};

// memoize

const fibMem = function(k, mem = new Array(k)) {
  mem[1] = 1;
  mem[2] = 1;
  if (mem[k] !== undefined) {
    return mem[k];
  } else {
    mem[k] = fibMem(k - 1, mem) + fibMem(k - 2, mem);
  }
  return mem[k];
};

//bottomUp

const fibMemBotUp = function(k) {
  let mem = new Array(k)  
  mem[1] = 1;
  mem[2] = 1;
  for (let i = 3; i <= k; i++) {
    mem[i] = mem[i-1] + mem[i-2]
  }
    return mem[k];
};

//-----------------------------------------

var factorial = function(k) {
  if (k === 0) {
    return 1;
  } else {
    return factorial(k - 1) * k;
  }
};

var factorialBotUp = function(k) {
  let mem = new Array(k + 1);
  mem[0] = 1;
  for (var i = 1; i <= k; i++) {
    mem[i] = mem[i - 1] * i;
  }
  return mem[k];
};


//normal recursion
var uglyNumber = function(k) {
  let mem = []; 
  let results = []; 
  const checker = function(num){
    if (num === 0) return false
    if (num === 1) return true
    if (num%2 === 0) return checker(num/2)
    if (num%3 === 0) return checker(num/3)
    if (num%5 === 0) return checker(num/5)
    return false;
  }
  for (var i=0; results.length < k; i++){
    mem[i] = checker(i)
    if (checker(i)){
      results.push(i)
    }
  }
  return results[results.length-1];
};

//memoize
var uglyNumber1 = function(k) {
  let mem = []; 
  let count = 0; 
  const checker = function(num){
    if (mem[num]!==undefined) return mem[num]
    if (num === 0) return false
    if (num === 1) return true
    if (num%2 === 0) return checker(num/2)
    if (num%3 === 0) return checker(num/3)
    if (num%5 === 0) return checker(num/5)
    return false;
  }
  for (var i=0; count < k; i++){
    let sup = checker(i)
    mem.push(sup)
    if (sup){
      count++
    }
  }
  return i-1;
};

//dunno how to do bottom up 

const checker = function(num){
  // if (mem[num]!==undefined) return mem[num]
  // if (num === 0) return false
  // if (num === 1) return true
  // if (num%2 === 0) return checker(num/2)
  // if (num%3 === 0) return checker(num/3)
  // if (num%5 === 0) return checker(num/5)
  // return false;


}

