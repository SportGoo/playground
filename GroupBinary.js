arr = [1, 1, 1, 1, 0, 1, 0, 1]

function minMoves(arr) {
    let n0 = 0, i0 = 0, n1 = 0, i1 = 0;
    for (let p = 0; p < arr.length; ++p) {
        if (arr[p] == 1) {
            n0 += p - i0++;
        } else {
            n1 += p - i1++;
        }
        return Math.min(n0, n1);

    }
}