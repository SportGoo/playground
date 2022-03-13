var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

  for (var i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
