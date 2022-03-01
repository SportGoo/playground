/**
 * @param {number[]} bits
 * @return {boolean}
 */

var isOneBitCharacter = function (bits) {
    var i = 0;
    while (i < bits.length - 1) {
        i += bits[i] + 1;

    }
    return i == bits.length - 1;

};


// Solution Explanation 


// When reading from the i-th position, if bits[i] == 0,
//  the next character must have 1 bit; else if bits[i] == 1, 
// the next character must have 2 bits. We increment our read-pointer i to the start of the next character appropriately.
//  At the end, if our pointer is at bits.length - 1, then the last character must have a size of 1 bit.