/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {

    var xBase = x.toString(2).split("");
    var yBase = y.toString(2).split("");
    var distance = 0;
    while (xBase.length < yBase.length) {
        xBase.unshift("0");
    }
    while (xBase.length > yBase.length) {
        yBase.unshift("0");
    }

    xBase.forEach((x, i) => {
        if (x !== yBase[i]) {
            distance++
        }
    })
    return distance;
};