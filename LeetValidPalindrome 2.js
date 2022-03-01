/**
 * @param {string} s
 * @return {boolean}
 */
//s = "A man, a plan, a canal: Panama"

var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    let start = s[i];
    let end = s[s.length - 1 - i];
    if (start !== end) {
      return false;
    }
  }
  return true;
};

//TimeComplexity O(n)
// We treaverse string two times one is to make it alphanumertic charecter
// Another one is looping through //if the both pointer is in the same charecter
// Space Complexity 0(1)
//Its because 0(n)because we dnt need to use additioanl space

/// 2. Solution
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");
  let left = 0;
  let right = s.length - 1 - i;
  while (left < right) {
    if ((s[left] = s[right])) {
      left++;
      right--;
      return true;
    } else {
      return false;
    }
  }
};

// I would put a print statement after the statement s = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '') to verify that it's doing what it's supposed to.
// let right = s.length -1 - i; is incorrect. There is no i you have initialized here. I would change it to let right = s.length -1; which is index of the last character in your string.
// if(s[left] = s[right]){ there should be a triple equal sign in the middle. Single = sign is for assigning === sign is for checking if two things are equal
// Don't return true inside the while loop, return true aftfer the while loop ends. You are essentially saying if at any point the two characters are not equal then return false, if they are equal you keep going on by changing your pointers.
