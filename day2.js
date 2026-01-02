function findPairs(arr) {
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }

  // O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log("-----------", q);
  }

  //  If we combine all the "0" operations it becomes 0(n^2 + n)
  // 0(n^2) is a Dominant term
  // "n" is a Non-Dominant term
  // So we remove the "non-dominant" term and we're only left with 0(n^2)
  // This way, we simplify our big0
}

const numbers = [1, 2, 3, 4, 5];
// findPairs(numbers);

//------------------------------------------------------------------------------
//create custom Array

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello", this.name);
  }
}
const u1 = new User("Sanket", 21);
// console.log(u1);

//--------------------------------------------------
//create custom Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //Push method----------
  push(item){
    this.data[this.length] = item;
    // console.log('--------', this.data);
    this.length++;
    return this.length;
  }
}

const myNewArray = new MyArray()
myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");
console.log(myNewArray.data);