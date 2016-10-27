/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
var bottles = 5;
while (bottles >= 0) {
  if (bottles === 0) {
    console.log('No more');
    break;
  } else if (bottles === 1) {
    console.log(bottles + " bottle of beer on the wall " + bottles +
    " bottle of beer! Take one down and pass it around, no more bottles of beer on the wall...");
    bottles -= 1;
  } else if (bottles === 2){
    var newBottle = bottles -1
    console.log(bottles + " bottles of beer on the wall " + bottles +
    " bottles of beer! Take one down and pass it around, " + newBottle +
    " bottle of beer on the wall...");
    bottles -= 1;
  } else {
  var newBottle = bottles -1
  console.log(bottles + " bottles of beer on the wall " + bottles +
  " bottles of beer! Take one down and pass it around, " + newBottle +
  " bottles of beer on the wall...");
  bottles -= 1;
  }
}
