/*
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

 

Example 1:

Input: "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

GG: "abbaca"
           ^
           result = []
           
           loop {
             if [].last === S[i]
           
           }
   stack = [c,a] LIFO 
           "ca"
   
    stack in JS
    push: at the end of the array
    pop: remove the last element of the array
var temp = s[i]
for(let i = 0; i < s.length' i ++){

if (temp == a){
if ()
}
}
          ^
  
*/
//AA: "mc"

/**
 * @param {string} S
 * @return {string}
 */



var removeDuplicates = function (S) {
    let result = [] //stack push, pop

    for (let i = 0; i < S.length; i++) { //"abbaca"
        if (result[result.length - 1] === S[i]) { //[]   "c" === "a" result[0]
            result.pop() // []
        } else {
            result.push(S[i]) //["c", "a"]
        }
    }
    // ["c", "a"]
    return result.join('')
};