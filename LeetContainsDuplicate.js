var containsDuplicate = function(nums) {
  let numbers = new Set();
  for (let num of nums) {
    if (!numbers.has(num)) {
      numbers.add(num);
    } else {
      return true;
    }
  }

  return false;
};

//   nums.sort((a,b) => a-b)
//     for(let i = 0; i < nums.length; i++){
//        if (nums[i]=== nums[i+1]){
//            return true
//        }
//     }
//     return false
//     }

let map = new Map();
for (let i = 0; i < nums.length; i++) {
  //if the value exist within the map object i created return true
  if (map.has(nums[i])) {
    return true;
  } else {
    //if it doesn't exist add it to the map object as unique pairs using set method
    if (!map.has(nums[i])) {
      map.set(nums[i]);
      console.log(map);
      //its saves on the map not duplicated one
    }
  }
}

//if the value doesn't exist return false

return false;
