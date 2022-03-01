/**
 * @param {string[]} tokens
 * @return {number}
 */
// build a stack array 
//iterate thru tokens 
//if not a operator, push to stack
// if an operator pop two from stack and apply operator numbers
// push result back on the stack
//return lone stack value at end 
var evalRPN = function (tokens) {
    const stack = [], operators = ['+', '-', '*', '/']
    tokens.forEach(elem => {
        if (operators.includes(elem)) {
            console.log(elem)
            const stack2 = stack.pop()
            const stack1 = stack.pop()
            if (elem === "+") {

                stack.push(stack1 + stack2)
            } else if (elem === '-') {
                stack.push(stack1 - stack2)
                ///You are subtracting and dividing backwards. 
                //Either change it to  stack2/stack1, 
                //or change the order that you pop them from the stack,
                //popping stack2 first and then stack1.
                // console.log(stack1- stack2)
            } else if (elem === '*') {
                stack.push(stack1 * stack2)
            } else {
                const divRes = stack1 / stack2
                divRes > 0 ? stack.push(Math.floor(divRes)) : stack.push(Math.ceil(divRes))
            }
        } else {
            stack.push(parseInt(elem))
        }
    })
    return stack[0]
};


/**
 * @param {string[]} tokens
 * @return {number}
 */
// build a stack array 
//iterate thru tokens 
//if not a operator, push to stack
// if an operator pop two from stack and apply operator numbers
// push result back on the stack
//return lone stack value at end 
// var evalRPN = function (tokens) {
//     const stack = [], operator = ["+", "-", "*", "/"]
//     tokens.forEach(elem => {
//         if (operators.includes(elem)) {
//             let stack2 = stack.pop()
//             let stack1 = stack.pop()
//          else if (elem === '+') {
//             stack.push(stack1 + stack2)
//         } else if (elem === '*') {
//             stack.push(stack1 * stack2)
//         } else if (elem === '-') {
//             stack.push(stack1 - stack2)
//         } else {
//             let divRes = stack1 / stack2
//             devRes > 0
//                 ? stack.push(Math.floor(divRes))
//                 : stack.push(Math.ceil(divRes))
//         }
//      }

//     })
//      return stack[0]
// };