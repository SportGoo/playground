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
var middleNode = function (head) {
    let array = [];
    let current = head;
    while (current) {
        array.push(current)
        current = current.next
    }

    let index = Math.floor(array.length / 2)
    return array[index]

}
