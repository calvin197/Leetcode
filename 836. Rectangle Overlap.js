var isRectangleOverlap = function(rec1, rec2) {
    return intersectDist(rec1[0],rec1[2],rec2[0],rec2[2]) * intersectDist(rec1[1],rec1[3],rec2[1],rec2[3]);
};

var computeArea = function(A, B, C, D, E, F, G, H) {
  return intersectDist(A,C,E,G) * intersectDist(B,D,F,H);
};

var intersectDist = function(a1, a2, b1, b2){
  let min = Math.max(a1, b1); 
  let max = Math.min(a2, b2);
  if (min<=max) return max-min; 
  else return 0; 
}
