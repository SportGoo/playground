/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return null;
    // First Case 
    if (head.next === null) return head;
    //Secondcase
    // console.log("head1",head)
    //ThirdCase
    const reversedHead = reverseList(head.next)
    console.log("Head2", head.next)
    head.next.next = head;
    head.next = null;

    return reversedHead;
    // console.log("final",reversedHead)
}
