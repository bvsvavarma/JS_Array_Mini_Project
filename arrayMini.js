console.log("Array Mini Project");
/* 
Problem 1:
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized
Example: 
Input: "hello world welcome to learn salesforce"
Output: "Hello World Welcome To Learn Salesforce" 
*/
const capitalizeFirstLetter = (inputString) =>
  inputString
    .split(" ")
    .map((currItem) => currItem[0].toUpperCase() + currItem.slice(1))
    .join(" ");

console.log(capitalizeFirstLetter("hello world welcome to learn salesforce"));
/*Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character
Example: 
Input: "Hello World"
Output: "dlroW olleH"
*/
const reverseString = (inputString) =>
  inputString.split("").reverse().join(" ");
console.log(reverseString("Hello World"));

/*
Problem 3:
Write a function that takes a string as input and returns the number of occurrences  of each character in the string as an array
Example: 
Input: "Hello"
Output: { h: 1, e: 1, l: 2, o:1}
*/
const countCharacters = (inputString) => {
  let output = {};
  let inputArray = inputString.toLowerCase().split("");
  for (let currItem of inputArray) {
    if (output.hasOwnProperty(currItem)) {
      output[currItem] = output[currItem] + 1;
    } else {
      output[currItem] = 1;
    }
  }
  console.log(output);
};

countCharacters("Hello");

/*
Problem 4:
Write a function that generate a user name of the user based on first name, middle name and last name
Example:
Input : satya Buddharaju Venkata
output: SBV
*/
const userName = (inputString) =>
  inputString
    .split(" ")
    .map((currItem) => currItem[0].toUpperCase())
    .join("");

console.log(userName("satya buddharaju venkata"));

/* 
Problem 5:
Write a function that takes as an of numbers as input and returns a new array with all the even numbers removed.
Example:
Input: [1, 2, 3, 4, 5, 6]
Output : [1, 3,5]
*/

let myArray = [1, 2, 3, 4, 5, 6];
let finalArray = myArray.filter((currItem) => currItem % 2 != 0);
console.log(finalArray);
/*
Problem 6:
Write a function that takes an array of string as input and returns a new array with only the strings that have a length greater than or equal to 5
Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output : ["apple", "banana", "orange"]
*/
let myFruitsArray = ["apple", "banana", "grape", "orange", "kiwi"];

let finalFruits = myFruitsArray.filter((currItem) => currItem.length >= 5);
console.log(finalFruits);
/*
Problem 7:
Write a function that takes of numbers as input and returns a new array with only the unique elements remove duplicates
Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output : [1, 2, 3, 4, 5]
*/
let myNumArray = [1, 2, 2, 3, 4, 4, 5];
const output = removeDuplicates(myNumArray);
console.log(output);

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
