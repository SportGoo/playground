const reverseList1 = (head) => {
    let current = null;
    while (head != null) {
        let temp = head.next;
        head.next = current;
        current = head;
        head = temp;
    }
    return current;
};

const reverseList = (head) => {
    if (!head || !head.next) return head;
    let current = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return current;
};