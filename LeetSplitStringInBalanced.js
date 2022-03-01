var balancedStringSplit = function (s) {
    let stack = [];
    let count = 0;
    let first = s[0];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === first) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }

        if (!stack.length) {
            count++;
            if (s[i + 1]) first = s[i + 1];
        };
    }

    return count;
};
// var balancedStringSplit = function(s) {
//     let count = 0, consL = 0, consR = 0
//     const sArr = s.split("")
//     for(let i = 0; i<sArr.length; i++){
//         if(sArr[i]==='L') consL++
//         if(sArr[i]==='R') consR++
//         if((consL !== 0) && consL === consR){
//             consL = 0; consR = 0; count++;
//         }
//     }
//     return count
// };

