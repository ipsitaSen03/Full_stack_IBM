// Problem 1: Student Management System
const student = {
    name: "Suchismita  Bakshi",
    roll: 141,
    marks: {
        Math: 50,
        Science: 65,
        English: 50,
        History: 70
    },
    getAverageMarks: function() {
        let total = 0, subjects = 0;
        for (let subject in this.marks) {
            total += this.marks[subject];
            subjects++;
        }
        return total / subjects;
    },
    checkPassOrFail: function() {
        return this.getAverageMarks() > 40 ? "Passed" : "Failed";
    }
};

console.log(student.getAverageMarks());
console.log(student.checkPassOrFail());


// Problem 2: Library System
const library = {
    books: {
        "Atomic Habits": { author: "James Clear", availableCopies: 3 },
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
    },
    borrowBook: function(bookName) {
        if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
            this.books[bookName].availableCopies--;
        }
    },
    returnBook: function(bookName) {
        if (this.books[bookName]) {
            this.books[bookName].availableCopies++;
        }
    }
};

library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies);


// Problem 3: Generate Multiplication Table
function generateTable(num, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

generateTable(5, 10);


// Problem 4: FizzBuzz
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

fizzBuzz(15);


// Problem 5: Reverse a String Without Using .reverse()
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("JavaScript"));


// Problem 6: Remove Duplicates from an Array
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let num of arr) {
        if (!uniqueArr.includes(num)) {
               uniqueArr.push(num);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));


// Problem 7: Find the Longest Word in a Sentence
function longestWord(sentence) {
    let words = sentence.split(" ");
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

console.log(longestWord("Coding is amazing and challenging"));


// Problem 8: Custom Array Method (Creating Your Own .map())
function myMap(arr, callback) {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

function myCallback(x) {
    return x * 2;
}

console.log(myMap([1, 2, 3, 4], myCallback));


// Problem 9: Find the First Non-Repeating Character in a String
function firstUniqueCharacter(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstUniqueCharacter("aabbcddce"));


// Problem 10: Find Pairs that Sum to a Target
function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));


//Problem 11: Implement a Stack in JavaScript
class Stack {
    constructor() {
        this.items = []; // Initialize an empty array to hold stack items
    }

    // Adds a value to the stack
    push(value) {
        this.items.push(value);
    }

    // Removes and returns the last added value
    pop() {
        if (this.isEmpty()) {
            return null; // Return null if the stack is empty
        }
        return this.items.pop();
    }

    // Returns the last added value without removing it
    peek() {
        if (this.isEmpty()) {
            return null; // Return null if the stack is empty
        }
        return this.items[this.items.length - 1];
    }

    // Returns true if the stack is empty, false otherwise
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage
let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop());    // Output: 20
console.log(myStack.peek());   // Output: 10
console.log(myStack.isEmpty()); // Output: false


//Question: - String Manipulation Challenge
function extractAndSumNumbers(str) {
    // Use regex to find all numbers in the string
    const numbers = str.match(/\d+/g);
    
    // If numbers are found, sum them up; otherwise, the sum is 0
    const sum = numbers ? numbers.reduce((acc, num) => acc + Number(num), 0) : 0;
    
    // Replace all numbers in the original string with the calculated sum
    return str.replace(/\d+/g, sum);
}

// Example usage
const input = "abc123xyz45pq7";
const output = extractAndSumNumbers(input);
console.log(output); // Output: "abc175pq"


//Question: - Find Most Frequent Element in an Array
function findMostFrequent(arr) {
    const frequency = {};
    let maxCount = 0;
    let mostFrequent;

    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1; // Count frequency
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num; // Update most frequent
        }
    });

    return mostFrequent;
}

console.log(findMostFrequent([1, 3, 2, 3, 4, 1, 3, 2, 3, 5])); // Output: 3