/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);

    let lastStart = intervals[0][0]
    let lastEnd = intervals[0][1]

    const result = [];

    for (let i = 1; i < intervals.length; i++) {
        const curInterval = intervals[i];

        // overlapping
        if (curInterval[0] <= lastEnd) {
            lastEnd = Math.max(curInterval[1], lastEnd);
            // non-overlapping
        } else {
            result.push([lastStart, lastEnd]);
            lastStart = curInterval[0];
            lastEnd = curInterval[1];
        }
    }

    result.push([lastStart, lastEnd]);
    return result;
}