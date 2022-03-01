/**
 * @param {string} s
 * @return {boolean}
 */
//s = "A man, a plan, a canal: Panama"

var isPalindrome = function (s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    for (let i = 0; i < s.length / 2; i++) {
        let start = s[i]
        let end = s[s.length - 1 - i];
        if (start !== end) {
            return false
        }
    }
    return true

};

  //TimeComplexity O(n) 
 // We treaverse string two times one is to make it alphanumertic charecter 
 // Another one is looping through //if the both pointer is in the same charecter
 // Space Complexity 0(1)  
 //Its because 0(n)because we dnt need to use additioanl space