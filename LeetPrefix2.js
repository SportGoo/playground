var longestCommonPrefix = function (strs) {
    let prefix = ''
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i++) {
        let charecter = strs[0][i];
        for (let j = 0; j < strs.lenght; j++) {
            if (strs[j][0] !== charecter) return prefix;
        }
        prefix = prefix + charecter;
    }
    return prefix;
};