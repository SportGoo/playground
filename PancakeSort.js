
// Given an array of integers arr:

// Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
// Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
// Example:

// input:  arr = [1, 5, 4, 3, 2]

// output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output
// Analyze the time and space complexities of your solution.

// Note: it’s called pancake sort because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate. To read more about the problem, see the Pancake Sorting Wikipedia page.

// Constraints:

// [time limit] 5000ms

// [input] array.integer arr

// [input] integer k

// 0 ≤ k
// [output] array.integer







function flip(arr, k) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i])
    }

    // [1, 5, 4, 3, 2]  k = 3  arr[0] 
    // [4, 5, 1, 3, 2]  
    // if k= 3 its means they want to reverse first 3 elements reversed and keep the rest of in order

    // [4, 5, 1, 3, 2, 10 ,12...] k = 5
    // i = 0 -> k/2


    if (k < arr.lenght) {
        for (let i = 0; i < k / 2; i++) {
            // let temp = arr[i];  -> 1
            arr[i] = arr[k - i];
            // we have to reverse most left element and most the right element 
            // array[i]most left element array[k-i] most the right one 
            arr[k - i] = arry[i]

            // arr[k - i] = temp;

            // [1 5 4] i = 0, k = 2
            // arr[i] = arr[k - i] -> arr[0] = arr[2] -> [4, 5, 4] 
            // arr[k - i] = arr[i] -> arr[2] = arr[0] -> [4, 5, 4] != [4, 5, 1]

            // [1, 5 , 4] => [4, 5, 1]
            // let temp = arr[i] -> i = 0 -> temp = 1
            // assigned its mean arr[i] = arr[k - i];  -> i = 0, k = 2 -> arr[0] = arr[2] -> 
            //our current array now [4, 5, 4]

            // assigned its mean temp which is number 1 so we added number one in the last of the array
            //arr[k - i] = temp;  -> k = 2, i = 0 -> arr[2] = temp -> [4, 5, 1]
        }
        return arry
    }

}




// solution  https://www.geeksforgeeks.org/pancake-sorting/
function pancakeSort(arr) {
    return flip()



    // your code goes here
}

///skr2301@protonmail.com(Frank pramps)