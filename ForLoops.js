// var iter = 8;
// var base = 4;


// function foo(base, iter) {

//     var total = 0;
//     for (let i = 1; i <= iter; i++) {
//         total = total + base
//     }
//     return total
// }

// array 
// [2,4,5,6]
// avarage: 2+4+5+6 = 17/4 = 4
function avarage_val(arry) {
    var total = 0;
    for (let i = 0; i < arry.length; i++) {
        total = total + arry[i]



    }
    return total / arry.length


}
arry = [1, 2, 3, 4, 75]
console.log(avarage_val(arry))


// function productOfArray(arr){
//     //     if(arr.length === 0) return 1;
//     // var total = 0;
//     // for( let i = 0 ;  i <= arr.length ; i++){
//     //   return total * arr[i];
//     // }

//     //     // use new array and concat with this function 

//     // }