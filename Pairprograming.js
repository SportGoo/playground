// You are given a string containing characters A and B only.
//Your task is to change it into a string such that there are no matching adjacent characters. 
//To do this, you are allowed to delete zero or more characters in the string.
// Your task is to find the minimum number of required deletions.
// Example:
// Remove an  at positions  and  to make  in  deletions.
// Function Description
// Complete the alternatingCharacters function in the editor below.
// alternatingCharacters has the following parameter(s):
// string s: a string
// Returns
// int: the minimum number of deletions required

//THIS IS JUST RETURNED HOW MANY REMOVED ITEM ON THE END
// function alternatingCharacters(s) {
//     let count = 0;

//     for (let i = 0; i < s.length; i++) {         //O(n) time complexity
//         if (s[i] === s[i + 1]) {                 //O(1)  space complexity
//             count++;
//         }
//     }
//     return count;
// }

// let s = "ABAAB"
// alternatingCharacters(s)

// // THIS IS RETURN STRING WITHOUT REMOVED CHARECTER
// function alternatingCharacters2(s) {
//     s = s.split('')
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === s[i + 1]) {
//             s.splice(i, 1)
//         }
//     }
//     return s.join('')
// }

// alternatingCharacters2("AABAAB")



function getHeight() {
    // Enter your code here
}