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

//solution with container 
var hasCycle = function (head) {

    let current = head
    //we create variable and set to head 
    let seen = new Set()
    // we also create a variable and set an new set | or array

    while (current) {

        if (seen.has(current)) {
            return true
            //while the current second time in the container || array 
            //its mean there is a cricle in the node 
            //return the true 

        }
        seen.add(current)
        // otherwise add the node in seen container or array
        current = current.next
        //keep iterate 
    }
    return false
};