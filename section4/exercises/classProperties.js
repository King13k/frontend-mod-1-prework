/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

Prompt 1: Dog
class Dog {
};

    var meeko = new Dog();
    var mia = new Dog();

    console.log(meeko);
    console.log(mia);

Prompt 2: Snack
class Snack {
};

    var cookies = new Snack();
    var chips = new Snack();

    console.log(cookies);
    console.log(chips);
// Prompt 3: Shirt
class Shirt {
};

    var shortSleeve = new Shirt();
    var longSleeve = new Shirt();

    console.log(shortSleeve);
    console.log(longSleeve);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog {
  constructor(numberOfLegs, tail, coat) {
    this.numberOfLegs = numberOfLegs
    this.tail = tail
    this.coat = coat
  }
};


var meeko = new Dog(4, "long", "short")
console.log(meeko);
  // console.log(meeko);
  // console.log(mia);






// Prompt 2: Snack
class Snack {
  constructor(spicy, salty, sweet) {
    this.spicy = spicy
    this.salty = salty
    this.sweet = sweet

  }
};

var chips = new Snack("spicy", "salty", "sweet")
console.log(chips);

// Prompt 3: Shirt
class  Shirt {
  constructor(fabric, color, size) {
    this.fabric = fabric
    this.color = color
    this.size = size

  }
};

var shirt1 = new Shirt("cotton", "red","XL")
console.log(shirt1);



//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

//Prompt 1: Dog
class Dog {
  constructor(numberOfLegs, coat, tail) {
    this.numberOfLegs = numberOfLegs
    this.coat = coat
    this.tail = tail

  }
};
var sam = new Dog(4, "medium", "long")
console.log(sam);

var kupo = new Dog(4,"medium", "short")
console.log(kupo);

// Prompt 2: Snack
class Snack {
  constructor(spicy, salty, sweet, name) {
    this.spicy = spicy
    this.salty = salty
    this.sweet = sweet
    this.name = name
  }
};

var cookies = new Snack(false, false, true, "cookies")
console.log(cookies);

var snackMix = new Snack(true, true, false, "chexMix")
console.log(snackMix);

// Prompt 3: Shirt
// class Shirt {
//   constructor(fabric, color, size,) {
//     this.fabric = fabric
//     this.color = color
//     this.size = size
//
//   }
// };

var nike = new Shirt("cotton", "white", "medium")
console.log(nike);

var adidas = new Shirt("linen", "black", "large")
console.log(adidas);
