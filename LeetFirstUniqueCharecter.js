var firstUniqChar = function (s) { //"leetcode"
    var map = {};


    for (char of s) {
        if (map[char] === undefined) {
            map[char] = 1;
        } else {
            map[char]++;

        }
    }



    for (let i = 0; i < s.length; i++) {

        if (map[s[i]] === 1) {
            return i;
        }
    }

    return -1
};