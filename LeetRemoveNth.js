/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let fastNode = dummy
    let slowNode = dummy

    for (let i = 0; i < n + 1; i++) {
        fastNode = fastNode.next

    }

    while (fastNode != null) {
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }
    slowNode.next = slowNode.next.next;
    return dummy.next


}