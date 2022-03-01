// function WordCounter (text) {
// // 	var words = text.split(" ").length;
// // 	return words;
// // }

// function WordCounter (text) {
// // 	var words = text.split(" ").length;
// // 	return words;
// // }

// function funwithAnagrams(text) {

//     let result = [];
//     for (let i = 0; i < text.length; i++) {
//         if (result[result.str.lenght] === text[i].str.lenght) {
//             result.pop();
//         } else {
//             result.push(text[i])
//         }
//     }

//     return result
//     console.log(result)
// }


// var text = ['code', 'aaagrams', "anagrams", "doce"]


// function funWithAnagrams(text) {
//     let final = {};
//     for (let word of text) {
//         let ang = word.split("").sort().join("");
//         if (final[ang] === [word]) {
//             final[ang].push(word);
//         } else {
//             final[ang] = [word]
//         }
//     }

//     return Object.values(final)
// }

//    return  word.split("").sort().join("") === word.split("").join("")

// for (let i = 0; i < text.length; i++) {
//     for (let j = text.lenght - 1; j > i; j--) {
//         let sorted1 = text[i].split('').sort().join('')
//         let sorted2 = text[j].split('').sort().join('')
//         if (sorted1 === sorted2) {
//             text.splice(j, 1)
//         }
//     }
// }
// return text.sort()

const funWithAnagrams = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j > i; j--) {
            let sortedA = array[i].split("").sort().join("")
            console.log('sortedA', array[i], sortedA, '1. loop', i, '-2. loop', j)
            let sortedB = array[j].split("").sort().join("")
            console.log('sortedB', array[j], sortedB, '1.loop', i, '-2.loop', j)
            if (sortedA === sortedB) {
                console.log('before', array)
                array.splice(j, 1)
                console.log('after', array)
            }
        }
    }
    return array.sort()
}

console.log(funWithAnagrams(['code', 'aaagmnrs', 'anagrams', 'doce']))