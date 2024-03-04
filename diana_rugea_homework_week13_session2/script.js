// 1. Write a function that can take in any number of arguments, and returns the sum of all of the arguments.
function sumArguments(...infArg) {
  return infArg.reduce((total, current) => total + current, 0);
}

console.log("Exercise 1: ", sumArguments(1, 2, 3, 4)); 
console.log("Exercise 1: ", sumArguments(10, 8, 4)); 

// 2. Write a function that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.
function sumArgumentNumbers(...nrArg) {
  return nrArg.reduce((total, current) => {
    if (typeof current === "number") {
      return total + current;
    } else if (!isNaN(parseFloat(current))) {
      return total + parseFloat(current);
    } else {
      return total;
    }
  }, 0);
}
console.log("Exercise 2: ",sumArgumentNumbers(1, "two", 3, "4", "five")); 
console.log("Exercise 2: ",sumArgumentNumbers(5, 10, "15", "twenty")); 

// 3. Write a function that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];

console.log("Exercise 3: ", combineArrays(array1, array2));

// 4. Write a function that takes in any amount of arguments, and returns the sum of every other argument
function sumEveryOther(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i += 2) {
    total += args[i];
  }
  return total;
}

console.log("Exercise 4:", sumEveryOther(1, 2, 3, 4, 5, 6)); 
console.log("Exercise 4:", sumEveryOther(2, 4, 6, 8, 10)); 

// 5. Write a function that can take in any number of arguments, and returns an array of only the unique arguments.
function getUniqueValues(...args) {
  return Array.from(new Set(args));
}

const uniqueArray = getUniqueValues(1, 2, 2, 3, 4, 4, 5);
console.log("Exercise 5:", uniqueArray);

const anotherUniqueArray = getUniqueValues(
  "car",
  "truck",
  "bicycle",
  "car"
);
console.log("Exercise 5:", anotherUniqueArray);

// 6. Write a function that takes in any number of arrays as arguments and combines all of them into one array.
function combineArrays(...arrays) {
    return arrays.reduce((result, currentArray) => [...result, ...currentArray], []);
  }
  
  const arrayA = [1, 2, 3];
  const arrayB = ['a', 'b', 'c'];
  const arrayC = [true, false];
  
  const comboArray = combineArrays(arrayA, arrayB, arrayC);
  console.log("Exercise 6:",comboArray);
  
