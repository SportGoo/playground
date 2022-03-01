var isPalindrome = function (head) {
    let current = head;
    let orig = "";
    let rev = "";
    while (current) {
        orig += current.val;
        rev = current.val + rev
        current = current.next
    }

    return orig === rev
};