function sum(array) {
    if (array.length < 1) return 0;
    return array.pop() + sum(array)

}
