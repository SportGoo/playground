var reverseString = function (s) {
    let result = [];
    for (let i = s.length - 1; i >= 0; i--) {

        result.push(s[i]);
        console.log(s[i])
    }
    return result


};

     // time complexicty o(N)
        // space complexity o(N)