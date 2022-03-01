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
    // create an empty array 
    let list = [];
    // create a condition that pushes the head parameter into the List
    while (head) {
        list.push(head)
        head = head.next
        //assign the head variable to head.next, which iterates thorugh list
    }
    //create anotehr variable called index that takes the lenght of the list and divides it by 2 
    let index = Math.floor(list.length / 2)
    console.log(list[index])
    return list[index]

};