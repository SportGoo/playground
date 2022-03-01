

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
    if (exp === 0) return 1;
    if (exp === 1) return base;
    var total = 1;
    for (let i = 1; i <= exp; i++) {
        total = total * base;

    }
    return total;

}

