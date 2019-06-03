// In progress... making it O(n) since O(n^2) isn't fast enough

var lengthOfLongestSubstring = function(s) {
  let hash = {};
  let counter = 0;
  let max = 0;
  let startIndex = 0;

    for (let i = 0; i < s.length; i++) {
      if (typeof hash[s[i]] === 'number') {
        startIndex = hash[s[i]] + 1;
        counter = i - startIndex + 1
        hash[s[startIndex]] = undefined;
        hash[s[i]] = i;
        // i = s.length;
      } else {
        hash[s[i]] = i;
        counter++;
        if (counter > max) max = counter;
      }
    }
  
  return max;
};

// O(n^2), still too slow. need to do O(1)

// var lengthOfLongestSubstring = function(s) {
//   let hash = {};
//   let counter = 0;
//   let max = 0;
//   for (let j = 0; j < s.length; j++) {
//     for (let i = j; i < s.length; i++) {
//       if (s[i] in hash) {
//         counter = 0;
//         hash = {};
//         i = s.length;
//       } else {
//         hash[s[i]] = true;
//         counter++;
//         if (counter > max) max = counter;
//       }
//     }
//   }
//   return max;
// };

//too slow

// var lengthOfLongestSubstring = function(s) {
//   var arr=[];
//   var resultArr=[]
//   if(s.length===0){
//       return 0;
//   }
//  for(var i=0; i<s.length;i++){
//      for(var j=i; j<s.length; j++){
//          if(!(arr.includes(s[j]))){
//              arr.push(s[j]);
//          }
//          else {
//              j=s.length;
//          }
//      }
//      resultArr.push(arr.length);
//        arr=[];
//  }
//   return Math.max(...resultArr);
// };
