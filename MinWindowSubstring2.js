/**
 * @param {string} searchString
 * @param {string} t
 * @return {string}
 */


// OPTIMAL SOLUTION 


const minWindow = (searchString, t) => {

    // Creating Map for storing the frequency of characters
    var requiredCharacters = buildMappingOfCharactersToOccurrences(t);
    var windowCharacterMapping = new Map();

    var left = 0;
    var right = 0;

    var totalCharFrequenciesToMatch = requiredCharacters.size;
    var charFrequenciesInWindowThatMatch = 0;

    // This will store the minimum length of valid substring
    var minWindowLengthSeenSoFar = Number.MAX_VALUE;

    // It will store the actual substring
    var minWindow = "";

    // Here we calculate the ans using 2 pointer's approach
    while (right < searchString.length) {
        var characterAtRightPointer = searchString[right];
        addCharacterToHashtableMapping(windowCharacterMapping, characterAtRightPointer);

        var rightCharIsARequirement = requiredCharacters.has(characterAtRightPointer);
        if (rightCharIsARequirement) {
            var requirementForCharacterMet = requiredCharacters.get(characterAtRightPointer)
                == windowCharacterMapping.get(characterAtRightPointer);

            if (requirementForCharacterMet) {
                charFrequenciesInWindowThatMatch++;
            }
        }

        while (charFrequenciesInWindowThatMatch == totalCharFrequenciesToMatch && left <= right) {
            var characterAtLeftPointer = searchString[left];
            var windowSize = right - left + 1;

            if (windowSize < minWindowLengthSeenSoFar) {
                minWindowLengthSeenSoFar = windowSize;
                minWindow = searchString.substring(left, right + 1);
            }

            windowCharacterMapping.set(characterAtLeftPointer, windowCharacterMapping.get(characterAtLeftPointer) - 1);

            var leftCharIsARequirement = requiredCharacters.has(characterAtLeftPointer);
            if (leftCharIsARequirement) {
                var characterFailsRequirement = windowCharacterMapping.get(characterAtLeftPointer)
                    < requiredCharacters.get(characterAtLeftPointer);

                if (characterFailsRequirement) {
                    charFrequenciesInWindowThatMatch--;
                }
            }

            left++;
        }

        right++;
    }

    return minWindow;
}

// Helper function for calculating the freuqencies of charcters in string 
const buildMappingOfCharactersToOccurrences = (s) => {
    var map = new Map();

    for (var i = 0; i < s.length; i++) {
        var occurrencesOfCharacter = 0;
        if (map.has(s[i])) {
            occurrencesOfCharacter = map.get(s[i]);
        }
        map.set(s[i], occurrencesOfCharacter + 1);
    }

    return map;
}

// Helper function for adding a character to Map
const addCharacterToHashtableMapping = (map, c) => {
    var occurrences = 0;
    if (map.has(c)) {
        occurrences = map.get(c);
    }
    map.set(c, occurrences + 1);
}