/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function(head) {
    
    let mainList;
    let minorList;
    
var hasCycle = function(head) {
    if (head === null) return false;
    let slowRunner = head;
    let fastRunner = head; 
    while(slowRunner.next !== null && fastRunner.next !== null && fastRunner.next.next !== null){
        slowRunner = slowRunner.next
        fastRunner = fastRunner.next.next
        if (slowRunner === fastRunner) {
            if (slowRunner.next === slowRunner){
                minorList = slowRunner
                mainList = slowRunner
                return true
            }
            minorList = slowRunner.next;
            slowRunner.next = null; 
            mainList = head
            return true
        }
    }
    return false; 
};
    
var getIntersectionNode = function(headA, headB) {
    if (headA === headB) return headA
  let curr1 = headA;
  let curr2 = headB;
  while (curr1 && curr2){
    if (curr1 === curr2) return curr1
    if (curr1.next === null && curr1.next === curr2.next) return null
    if (curr1.next === null) curr1 = headB;
    else curr1 = curr1.next
    if (curr2.next === null) curr2 = headA;
    else curr2 = curr2.next
  }
  return null;
};

    
    if (hasCycle(head)){
        console.log(getIntersectionNode(mainList, minorList))
        return getIntersectionNode(mainList, minorList)
    } else {
        return null;
    }

};