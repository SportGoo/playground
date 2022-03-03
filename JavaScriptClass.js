// //reference Type
// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10 };

// //context vs scope

// const object4 = {
//   a: function() {
//     console.log(this);
//   }
// };

// // intstantiation

// class Player {
//   constructor(name, type) {
//     console.log("player", this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi I am ${this.name}, I am a ${this.type}`);
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//     console.log("wizard", this);
//   }
//   play() {
//     console.log(` Weeeeee I am ${this.type}`);
//   }
// }

// const wizard1 = new Wizard("Shelly", "Healer ");
// const wizard2 = new Wizard("Shawn", "Dark Magic");

//Array Implemen An Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data(index);
  }
}

const newArray = new Array();
console.log(newArray.get);
