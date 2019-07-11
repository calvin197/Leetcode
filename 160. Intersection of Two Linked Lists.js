var getIntersectionNode = function(headA, headB) {
  let curr1 = headA;
  let curr2 = headB;
  while (curr1 && curr2) {
    if (curr1 === curr2) return curr1;
    if (curr1.next === null && curr1.next === curr2.next) return null;
    if (curr1.next === null) curr1 = headB;
    else curr1 = curr1.next;
    if (curr2.next === null) curr2 = headA;
    else curr2 = curr2.next;
  }
  return null;
};
