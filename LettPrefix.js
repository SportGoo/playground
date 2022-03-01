/**
 * @param {string[]} strs
 * @return {string}
 */
////strs = ["flower","flow","flight"]
//                   pref[i]   
//                 j
/// slice the letters from the prefix that doent match 


var longestCommonPrefix = function (strs) {
    //set prefix variable equal to first word
    let prefix = strs[0]
    //iterate ove the array of words 
    for (let i = 1; i < strs.length; i += 1) {
        const word = strs[i];
        //loop for words being shorter than current prefix length
        if (word.length < prefix.length) prefix = prefix.slice(0, word.length)
        for (let j = 0; j < word.length; j += 1) {
            //iterate over the chars in word and compare 
            if (prefix[j] !== word[j]) {
                //chop off en of prefix that doesnt match
                prefix = prefix.slice(0, j)
            }
        }


    }
    return prefix

};