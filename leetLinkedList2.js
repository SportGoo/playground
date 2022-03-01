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
//Array solution 
var hasCycle = function (head) {

    let list = [];
    // we created an array 
    let current = head;
    // created a variable to set to head 
    while (current) {
        if (list.includes(current)) {
            return true
            //while the current second time in the  array 
            //its mean there is a cricle in the node 
            //return the true 

        }
        list.push(current)
        // otherwise add the node in list array  array
        current = current.next
        //Keep iterating 
    }
    return false

};