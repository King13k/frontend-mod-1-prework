/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName(name, lastname) {
  console.log('Severus' + '' + 'Snape');
};

printName('name', 'lastname');
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello(name) {
  console.log("Oh Hello");
}

sayHello('name');
sayHello('name');
//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name) {
  console.log(name)
}
greetMe('William');
greetMe('Susan');
greetMe('Mike');


 YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function addNumbers(a, b) {
  console.log(a + b)
}
addNumbers(1, 2);
addNumbers(8, 5);
addNumbers(15, 6);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function bestFriends(friend1, friend2) {
  console.log(friend1 +" "+ "and" +" "+ friend2  +" "+ "are BFFS");
}
bestFriends("Oscar", "Ruck");
//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?
- I named the function bestFriends  because I thought it would be easier to pick up when looking at the code.
- The Parameters are named friend1 and friend2 because they are the two best friends.


*/
