var oddEvenList = function (head) {
    if (!head) return head;
    let currentOdd = head;
    let evenHead = head.next;
    let currentEven = evenHead;
    while (currentEven && currentEven.next) {
        currentOdd.next = currentEven.next;
        currentOdd = currentOdd.next;
        currentEven.next = currentOdd.next;
        currentEven = currentEven.next;
    }
    currentOdd.next = evenHead;
    return head;
};