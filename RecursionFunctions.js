// function takeShower(){
//     return "Showering"
// }

// function eatBreakfast(){
//     let meal = cookFood()
//     return 'Eating${meal}'
// }

// function cookFood(){
//     let items = ["Oatmeal", "Eggs", "Protein Shake"]
//     return items[Math.floor(Math.random()* items.lenght)]
// }

// function wakeUp(){
//     takeShower()
//     eatBreakfast()
//     console.log("Ok ready to go to work")
// }
// wakeUp()



//first example 
// function countDown(num){
//     if(num <= 0){
//         console.log("All done!");
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num)
// }
// countDown(5)

//second example 
//4
//
function sumRange(num) {
    if (num === 1) return 1;
    return num * sumRange(num - 1);

}

sumRange(4)

function power(base, exp) {
    if (exp === 0) return 1
    if (exp === 1) return base
    return base * power(base, exp - 1)
}

for (let i = 0; i < 17; i++) {
    console.log("base: 2, exp: ", i)
    console.log(power(2, i))
}

// How to function Works
// step1

// sumRange(3)
//   return 3 + sumRange(2)
//               return 2 sumRange(1)
//                          return 1

// step 2
// sumRange(3)
//   return 3 + sumRange(2)
//               return 2 +1
//                          


//step3 
// sumRange(3)
//   return 3 + 3

//Final 
// return 6