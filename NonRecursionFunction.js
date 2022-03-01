// factorial 4 = 4!
//its means 4*3*2*1(four times 3 four times 2 four times1)
// factorial 10;(ten times)
// *9*8*7*6*5*4*3*2*1

// how to Visualize 
function factorial(num) {
    var total = 1
    for (let i = num; i > 1; i--) {
        total *= i;

    }
    return total;
}

console.log(factorial(4))
