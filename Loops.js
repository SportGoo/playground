var iter = 8;
var base = 4;


function foo(base, iter) {

    var total = 0;
    for (let i = 1; i <= iter; i++) {
        total = total + base
    }
    return total
}

// array 
// [2,4,5,6]
// avarage: 2+4+5+6 = 17/4 = 4