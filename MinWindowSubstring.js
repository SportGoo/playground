/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */


//BRUTAL SOLUTION

const minWindow = (searchString, t) => {
    var n = searchString.length;

    // It contains the min length seen so far
    var minWindowLengthSeenSoFar = Number.MAX_VALUE;

    // It contains the minimum length substring
    var minWindow = "";

    // The nested for loop help us generate all the substrings
    for (var left = 0; left < n; left++) {
        for (var right = left; right < n; right++) {
            // Generate the substring
            var windowSnippet = searchString.substring(left, right + 1);

            // Check if the generated char contains all the characters of target
            var windowContainsAllChars = stringContainsAllCharacters(windowSnippet, t);

            // If it is a valid substring
            // And the length is less than the minimum so far
            // Update the answer
            if (windowContainsAllChars && windowSnippet.length < minWindowLengthSeenSoFar) {
                minWindowLengthSeenSoFar = windowSnippet.length;
                minWindow = windowSnippet;
            }
        }
    }

    return minWindow;
}

// Helper function to check if all the char of string are
// Present in the string searchString
const stringContainsAllCharacters = (searchString, t) => {

    // Hash Map for storing the character frequency
    var requiredCharacters = new Map();

    // Store the frequency of all the characters of string t
    for (var i = 0; i < t.length; i++) {
        var occurrencesOfCharacter = 0;
        if (requiredCharacters.has(t[i])) {
            occurrencesOfCharacter = requiredCharacters.get(t[i]);
        }

        requiredCharacters.set(t[i], occurrencesOfCharacter + 1);
    }

    // Traverse the searchString
    for (var i = 0; i < searchString.length; i++) {
        var curChar = searchString[i];

        if (requiredCharacters.has(curChar)) {
            // Calculate what the new occurrence count will be
            var newOccurrenceCount = requiredCharacters.get(curChar) - 1;

            /*
             * If we have satisfied all of the characters for this character, remove the key
             * from the hashtable.
             * 
             * Otherwise, just update the mapping with 1 less occurrence to satisfy for
             */
            if (newOccurrenceCount == 0) {
                requiredCharacters.delete(curChar);
            } else {
                requiredCharacters.set(curChar, newOccurrenceCount);
            }
        }
    }

    /*
     * If we satisfied all characters the the required characters hashtable will be
     * empty
     */
    return requiredCharacters.size == 0;
}
