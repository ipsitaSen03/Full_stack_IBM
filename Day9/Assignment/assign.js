
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
3️ What will be logged in the console? Explain your answer.

function testScope() {
    if (true) {
        var a = 1️0;
        let b = 2️0;
        const c = 3️0;
    }
    console.log(a);
    console.log(b);
    console.log(c);
   }
testScope();
//output: error (ReferenceError: b and c is not defined),
//Explanation: a is declared using var, so it is global scoped. b and c are declared using let and const, so they are block scoped.o b and c are not accessible outside the if block.
*/

/*
//4️ Rewrite the following function using const and fix any issues
const name = "John";
function greet() {
    if (true) {
        const message = "Hello " + name;
        console.log(message);
    }

}
greet();

//Output : Hello John
*/

/*
5 Convert this traditional function into an arrow function without changing the output
const multiply = (a, b) => a * b;
*/

/*
//6️ What will be the output? Explain why.
const obj = {
      name: "Alice",
      sayHello: function() {
      setTimeout(() => {
        console.log("Hello, " + this.name);
        }, 1️000);
    }
};
obj.sayHello();
//output: Hello, Alice
//Explanation :obj have name= "Alice". method= sayHello()
// In the methodthere is a setTimeout() which is used to delay execution by 1000 milliseconds 
*/

/*
//7️ What will be the output of this code? Explain why
console.log(a);
var a = 1️0;
console.log(b);
let b = 2️0;

//Output: ReferenceError: b is not defined
//Explanation:before inserting any value to the "var a", the console.log(a) is used so undefined.let variable is hoisted, so obviously it will show ReferenceError
*/

/*
//8️ Rearrange the following function so it works correctly, explaining the problem.
var double = function(n) {
    return n * 2;
};
console.log(double(4)); // Output: 8
console.log(square(5)); // Output: 25
function square(n) {
    return n * n;
}
*/

/*
//9️ What will be the output of the following expressions?
console.log(5 + "5");//Output: 55 (string concatenation)
console.log(5 - "3️"); //Output: 2 (type coercion to number)

console.log(5 * "2️"); //Output: 10 (type coercion to number)
console.log("1️0" / 2️);//Output: 5 (type coercion to number)
console.log(1️0 % "3️");//Output: 1 (type coercion to number)
*/

/*
//10 Rewrite this code using shorthand assignment operators.
let x = 1️0; 
x = x + 5;
x = x * 2️;
x = x - 3️;
x = x / 2️;

 //output:Uncaught SyntaxError: Invalid or unexpected token 
*/

/*
//1️1️ What will be logged in the console? Explain why.
console.log(5 > 3 && 10 < 20); // true. both the "5>3" and "10<20" conditions are true
 console.log(5 > 3 || 10 > 20);   //true. condition "5>3" is true, so the final answer is true as there is "||" in between
 console.log(!(5 > 3));// false. "5>3" is true but "!(5>3)" is not true so ultimately it is false
*/


/*
//1️2️ What will be the output of the following function?
function sum(a, b, c = 5) {
 return a + b + c;
}
console.log(sum(2️, 3️));  //Output: 10 [(2 + 3 + 5)]
console.log(sum(2️, 3️, 1️0)); //Output: 15 [(2 + 3 + 10)]
*/

/*
//1️3️ Write a function that takes any number of arguments and returns their sum.
function sumAll(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter1 = outer();
counter1(); // Output: 1
counter1(); // Output: 2
const counter2 = outer();
counter2(); // Output: 1
counter2(); // Output: 2
*/

/*
//1️4️ Fix the following function to work correctly and explain the issues.
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter1️ = outer();
counter1️();
counter1️();
const counter2️ = outer();
counter2️();
counter2️();

//Explanation: The original function had issues with closures and variable scope. Each call to outer creates a new count variable.
//outer() creates a new count variable each time it is called.
// When counter1 = outer(); is called, count = 0 is created and stored in that instance.
// Calling counter1() increments the same count every time.
// When counter2 = outer(); is called, a new count is created (again starting at 0).
*/

/*
1 Number Reversal without Using Built-in Methods
 Problem:
Write a function reverseNumber(num) that takes a number and returns its reverse.


function reverseNumber(num) {
     let isNegative = num < 0; 
     if (isNegative) num = -num; 

     let reversed = 0;
     while (num > 0) {
        let digit = num % 10; 
        reversed = reversed * 10 + digit; 
        num = Math.floor(num / 10); 
     }

     return isNegative ? -reversed : reversed; 
 }

 console.log(reverseNumber(1234));  
 console.log(reverseNumber(-567));  
 console.log(reverseNumber(100));   
 console.log(reverseNumber(0));     
*/

/*
2 Custom Length Function
 Problem:
Create a function customLength(str) that returns the length of a string without using length
property.
Example:
customLength("JavaScript"); // Output: 1️0


function customLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

console.log(customLength("JavaScript")); 
console.log(customLength("Hello"));     
console.log(customLength(""));           
console.log(customLength("1234567890")); 

*/

/*
3 Avoid Hoisting Bug
 Problem:
Fix the bug in the following code without changing the function calls.
console.log(add(2️, 3️)); // Should output: 5
console.log(multiply(2️, 3️)); // Should output: 6️
function add(a, b) {
 return a + b;
}
var multiply = function(a, b) {
 return a * b;
} 

 function add(a, b) {
    return a + b;
}
const multiply = function(a, b) {
    return a * b;
};
console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
*/

/*
4 Function That Returns Another Function
 Problem:
Write a function counter() that returns another function. Each time the returned function is called, it 
should increase a count and return it. 

function counter() {
     let count = 0; 

     return function() {
         count++; 
        return count; 
    };
 }


 const count1 = counter();
 console.log(count1());
 console.log(count1()); 
 console.log(count1()); 

 const count2 = counter(); 
 console.log(count2()); 
 console.log(count2());
 */