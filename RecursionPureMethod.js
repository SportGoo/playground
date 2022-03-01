function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;

}
console.log(collectOddValues([1, 2, 3, 4, 5]))
//1- spin the function
//[1].concat(collectOddValues([2, 3, 4, 5])) //we assign to new Array and conact with rest of the array 
// 2- spin 
// [].concat(collectOddValues[3, 4, 5]) // because 2 is not oddvalue % 2===0 true so this time new array is empty
// //3-spin
// [3].concat(collectOddValues[4, 5])// beacause % 3 is not == 0 
// //4-spin
// [].concat(collectOddValues[5])// because % 4 is  == 0 true
// //5-spin
// [5].concat(collectOddValues[])// beacause % 3 is not == 0
// //if its empty we return empty array check line 3)
// []

// return newArr =[1,3,5]
//  because[%2,%4]== 0 so they are not odd 

//Note
// if we should push into a  new array over over again it would be re - assign
// instead newArry allow us to either concatenate with anoteh return value