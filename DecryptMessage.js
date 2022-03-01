function decrypt(word) {
    var secondTotal = 1;
    var newLetter;
    for (let i = 0; i < word.length; i++) {
        newLetter = word.chartCodeAt(i);
        newLetter -= secondTotal

        while (newLetter < word[i]) {
            newLetter += 26;
            secondTotal += newLetter;
        }
        return decrypt.toString();
    }
}