
/* 

PASS AN OBJECT INTO A FUNCTION

function iReturnThings (thing) {
    return thing;
  }
  
  iReturnThings({ firstName: 'Brendan', lastName: 'Eich' });
// => {firstName: "Brendan", lastName: "Eich"}

*/

/*

And this is how we pass a function into a function:

iReturnThings(function () { return 4 + 5; });
// => ƒ () { return 4 + 5; }

*/



/*

function iInvokeThings (thing) {
    return thing();
  }
  
  iInvokeThings(function () { return 4 + 5; });
  // => 9
  
  iInvokeThings(function () { return 'Hello, ' + 'world!'; });
  // => "Hello, world!"

*/



/*

function main (cb) {
  console.log(cb());
}

main(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});
// LOG: After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!


*/



/*

function greet (name, cb) {
    return cb(name);
  }
  
  greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
  // => "Hello there, Ada Lovelace"
  
  function doMath (num1, num2, cb) {
    return cb(num1, num2);
  }
  
  doMath(42, 8, function (num1, num2) { return num1 * num2; });
  // => 336


  in the above examples, 
  what the greet() and doMath() functions are doing is pretty trivial:
   they're simply returning the result of calling the callback function. 
*/
/*
function Monday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Tuesday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function Wednesday() {
  console.log("Go for a five-mile run");
  console.log("Go for a five-mile run");
}

function Thursday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Friday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function runFiveMiles() {
  console.log("Go for a five-mile run");
}

function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

function Monday() {
  runFiveMiles();
  liftWeights();
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function Monday() {
  exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

//inline Functions
exerciseRoutine(function () {
  console.log("Stretch! Work that core!");
});
//OR
exerciseRoutine(() => {
  console.log("Stretch! Work that core!");
});
// OR even shorter:
exerciseRoutine(() => console.log("Stretch! Work that core!"));
// "Go for a five-mile run"
// "Stretch! Work that core!"

//Using functions as return values
function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise);

  // we could give this function a name if we wanted to, but since
  // it's only available _inside_ morningRoutine(), we don't need to
  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}
const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron

afterExercise;

afterExercise();
// LOG: Nom nom nom, this protein bar is delicious!

*/


/*

The receivesAFunction function should:
take a callback function as an argument
call the callback function
it doesn't matter what this function returns, so long as it calls the callback function


The returnsANamedFunction function should:
take no arguments
return a named function


The returnsAnAnonymousFunction function should:
take no arguments
return an anonymous function

*/


function recievesAFunction(callback){
  console.log(callback)

  function swimFortyLaps() {
  return "Swim 40 laps";
}
  return swimFortyLaps;
}


// This function returns a named function
function returnsANamedFunction(exercise){
console.log(exercise);
function runFiveMiles() {
  console.log("Go for a five-mile run");
}
return runFiveMiles
}
//This Function returns an anonymous function
function returnsAnAnonymousFunction(workout){
  console.log(workout);
  return function(){
    return 'run';
  }
}