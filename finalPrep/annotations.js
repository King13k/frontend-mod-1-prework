// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//A function is being declared with the function name buildABear with 5 parameters.
function buildABear(name, age, fur, clothes, specialPower) {
// variable greeting is being assigned to `Hey partner! My name is ${name} - will you be my friend?!`;
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// variable demographics is being assigned to an array with one string and one integer
  var demographics = [name, age];
// powerSaying is getting a assigned to a string specialpower and a string.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//variable builtBear is beibg assigned to create an object.
  var builtBear = {
//Key basicInfo is storing demographics as its value.
    basicInfo: demographics,
//Key clothes is storing clothes as its value.
    clothes: clothes,
//Key  exterior is storing fur as its value.
    exterior: fur,
//Key  cost is being stored as an integer of 49.99 for its value.
    cost: 49.99,
//Key  sayings is storing an array of the variable greeting, powerSaying, and a string that will read "Goodnight my friend!"
//as the value.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//Key isCuddly is storing a Boolean of true as its value.
    isCuddly: true,
  };
//The execution of this function is stopped.
  return builtBear
}
//Function buildABear is invoked passing on these parameters.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Function buildABearnow is invoked passing on these parameters.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// A function name is being declared with the name fizzBuzz with 3 parameters num1,num2,range
function fizzBuzz(num1, num2, range) {
// A Loop is being started, variable i is the index starting at 0 if I is less than or equal to range increments will be 1.
  for (var i = 0; i <= range; i++) {
//An if-statement is checking for conditionals. if the index can be divided evenly by num1 and num2 console.log fizzbuzz.
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// If index is divisable by num1 and the remander is 0 and also not divisible by num2 then console.log fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
// If index is divisable by num2 and the remainder is 0 and also not divisable by num1 consolw.log buzz.
    } else if (i % num2 === 0) {
      console.log('buzz');
// Else console.log Index
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz is invoked passing on these parameters
fizzBuzz(3, 5, 100);
// fizzBuzz is invoked passing on these parameters
fizzbuzz(5, 8, 400);
