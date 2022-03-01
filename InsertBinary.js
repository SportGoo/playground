/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    let newNode = new TreeNode(val);
    let currentNode = this.root
    while (currentNode.val !== null) {
        if (currentNode.val < val) {
            if (currentNode.right === null) {
                currentNode.right = newNode
            }
            currentNode = currentNode.right
        } else if (currentNode.val > val) {
            if (currentNode.left === null) {
                currentNode.left = newNode
            }
            currentNode = currentNode.left
        }

    }
    return root
};