
// 2. Write a function that takes two numbers as arguments and returns their sum.
const sum = function(x, y) {
    return x + y;  
}
console.log(sum(5, 6));

// 4.  Write a function that checks if a given string is a palindrome (reads the same backward as forward).
// Not done
// 6. Write a function that generates a random number between a given minimum and maximum value
function generateRandomNumber(min, max) {
    return  Math.random() * max;
}
 console.log(generateRandomNumber(0, 10))

// 8. Write a function that calculates the square root of a given number.
function squareRootOf(num) {
return  Math.sqrt(num);
}
console.log(squareRootOf(10))

// 10. Write a function that counts the number of vowels (a, e, i, o, u) in a string
// Not done

// 12. Write a function that converts a string to uppercase.
const convert = (str) => {
const convertedstr = str.toUpperCase();
return convertedstr; 
};
console.log(convert("i love programimg"))

// 14. Write a function that replaces all occurrences of a substring with another substring within a given string.
const replaceSubString = () => {
let string = " I am a student of Zafrino school";
const replacedSubStr = string.replace("I am", "You are");
return replacedSubStr; 
};
 console.log(replaceSubString())

// 16. Create a function that takes an array of numbers and filters out negative numbers
let numb = [-5, 3, -1, -2, 6, 8, 11, 0, -9];
const negativeNumbers = numb.filter((numb) => numb < 0);
console.log(negativeNumbers)

// 18.  write a function that adds default value of "unknown" to the object if the name key is not present or if the value of the name key is empty, undefined or null
let obj = {
name: "",
age: 60,
sex: "Male",
};
const addValue = (obj) => {
if (!obj.name || obj.name === '' || obj.name === undefined || obj.name === null ) {
obj.name = "unknown";
} 
return obj;
}
console.log(addValue(obj))

// 20. Create a function that takes a number as an argument, multiplies the number by +3 and returns the result.
const multiply = (num) => {
let result = num*3;
return result
};
console.log(multiply(5))


// 22.  You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
const score = (two, three) => {
let twoPointer = two*2;
let threePointer = three*3;
let result = twoPointer + threePointer
return result
}
console.log(score(5,1))

// 24.  Create a function that returns true when num1 is equal to num2; otherwise return false.
const equality = (num1, num2) => {
if (num1 === num2) {
return true; 
} else {
return false;
}
}
console.log(equality(2, 2))

// 26.  Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
const stringLength = (str1, str2) => {
if (str1.length === str2.length) {
return true;
} else {
return false;
}
}
console.log(stringLength("Bekele", "Regasa"))
console.log(stringLength("Bekele", "Beke"))

// 28.  A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks."
const serveDrinks = (age, isOnBreakTime) => {
if (age >=18 && isOnBreakTime === false) {
console.log("Serve drinks");
} else {
  console.log ("Not serve drinks")
}
}
serveDrinks(20, false)

// 30.  Create a function that accepts an array and returns the last item in the array.
let myArray = [1, 2, 3, 4, 5];
const getLastItem = () => {
let lastItem = myArray.pop();
return lastItem; 
}

console.log(getLastItem(myArray))
// 32.  Given two arguments, return an array which contains these two arguments. Examples makePair(1, 2) ➞ [1, 2] makePair(51, 21) ➞ [51, 21] makePair(512124, 215) ➞ [512124, 215]", code: ""
const arr = (a, b) => {
return [a, b];
}
console.log(arr(10, 22))
// 34.  Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function. Examples helloName("Gerald") ➞ "Hello Gerald!" helloName("Tiffany") ➞ "Hello Tiffany!" helloName("Ed") ➞ "Hello Ed!"
const greet = (name) => {
return `"Hello ${name}"`;
}
console.log(greet("Bekele"))

// 36.  Write a function that prints all the odd numbers less than 100
const oddNumbers = () => {
for (let i = 1; i < 100; i += 2 ) {
  console.log(i);
}; 
}
oddNumbers()

// 38.  Write a function that takes an array of objects with keys name, age and email and remove any object that does not have an email
let arrayOfObject = [
{name: "Bekele", Age: 80, email: "bekele@gmail.com"},
{name: "Abebe", Age: 50, email: ""}
]
const remove = () => {
  let removedArray = arrayOfObject.filter(obj => obj.email !== "" || undefined || null);
  return removedArray;
}
console.log(remove(arrayOfObject))

// 40.  Write a function that takes an array of objects with keys name, age and email and remove any person whose age is less than 18
let arrayOfObject = [
{name: "Bekele", Age: 10, email: "bekele@gmail.com"},
{name: "Abebe", Age: 50, email: "abebe@yahoo.com"}
]
const remove = () => {
    let removedArray = arrayOfObject.filter(obj => obj.Age >= 18);
    return removedArray;
}
console.log(remove(arrayOfObject))