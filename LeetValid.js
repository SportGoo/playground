var isValid = function (s) {
    let stack = []
    for (char of s) {
        if (stack.length) {
            let top = stack[stack.length - 1]
            if (top === '(' && char === ')') {
                stack.pop()
            } else if (top === '[' && char === ']') {
                stack.pop()
            } else if (top === '{' && char === '}') {
                stack.pop()
            } else {
                stack.push(char)
            }
        } else {
            stack.push(char)
        }

    }
    return stack.length ? false : true
};

//The scoping of the else statements is important. 
//The "outer else" is like saying "if there is nothing in the stack push this char". 
//The inner one is like saying "if there are chars in the stack, 
//but the top one isn't the match for this one, push it on"
//If we only had one that we use at the end, 
//it would push closing parentheses on even after it popped the opening ones off