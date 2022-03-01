var removeNthFromEnd = function (head, n) {
    const arr = [head];
    for (let cur = head; cur.next; cur = cur.next) {
        arr.push(cur.next);
    }
    if (arr.length === 1) return null;
    if (n > 1) {
        arr[arr.length - n].val = arr[arr.length - n].next.val;
        arr[arr.length - n].next = arr[arr.length - n].next.next;
    } else arr[arr.length - n - 1].next = null;
    return arr[0];
};