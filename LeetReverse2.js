var reverseString = function (s) { //in-place solution thats mean we dont use another data type
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        var temp = s[start];
        s[start] = s[end]
        s[end] = temp
        start++
        end--
    }
    return s
};

//Time complexity 0(N) Linear time
//space complexity 0(1);
