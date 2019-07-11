/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) return false;
  let slowRunner = head;
  let fastRunner = head;
  while (
    slowRunner.next !== null &&
    fastRunner.next !== null &&
    fastRunner.next.next !== null
  ) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
    if (slowRunner === fastRunner) return true;
  }
  return false;
};
