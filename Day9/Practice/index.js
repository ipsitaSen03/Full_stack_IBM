//1️ What will be the output of the following code? Explain why
let x = "5";
let y = 5 ;
console.log(x == y); //output:true 
//Explanation: "==" operator checks whether its two operands 'values are equal or not' , this will return "true" because the value of x and y are same. 

console.log(x === y); //output:false
//Explanation: "===" operator checks two variables both 'value and type'. x is a string and y is a number,so this will return false.


/*
2️ How can you find the length of the longest word in this array?
const words = ["JavaScript", "Programming", "Function", "Hoisting"];
function getLongestWordLength(wordsArray) {
    return wordsArray.reduce((maxLength, word) => 
        Math.max(maxLength, word.length), 0);
}
console.log(getLongestWordLength(words));
*/

/*