//Q1. Switch-based Calculator

    function calculator(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Divide by zero";
        case '%': return a % b;
        case '**': return a ** b;
        default: return "Invalid operator";
    }
    }

console.log(calculator(5, 2, '+'));   
console.log(calculator(5, 2, '**'));  
console.log(calculator(5, 0, '/'));   
console.log(calculator(5, 2, '&'));   

//Q2. Month Number to Full Name



function getMonthName(monthNumber) {
  switch(monthNumber) {
    case 1: return "January";
    case 2: return "February";
    case 3: return "March";
    case 4: return "April";
    case 5: return "May";
    case 6: return "June";
    case 7: return "July";
    case 8: return "August";
    case 9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
    default: return "Invalid month";
  }
}

//Q3. Grade to Performance

function gradeToPerformance(grade) {
  switch(grade) {
    case 'A': return "Excellent";
    case 'B': return "Good";
    case 'C': return "Average";
    case 'D': return "Poor";
    case 'F': return "Fail";
    default: return "Invalid grade";
  }
}

//Q4. Browser Support Message

function browserSupport(browser) {
  switch(browser.toLowerCase()) {
    case 'chrome':
    case 'firefox':
    case 'edge':
      return "Browser is supported";
    case 'safari':
      return "Limited support";
    default:
      return "Browser not supported";
  }
}

//Q5. Even or Odd

javascript
Copy
Edit
function evenOrOdd(number) {
  switch (number % 2) {
    case 0: return "Even";
    case 1: return "Odd";
    default: return "Invalid input";
  }
}

//Q6. Nested Switch: Role and Action

function checkPermission(role, action) {
  switch (role) {
    case 'admin':
      switch (action) {
        case 'create':
        case 'edit':
        case 'delete':
          return "Allowed";
        default: return "Invalid action";
      }
    case 'user':
      switch (action) {
        case 'create':
        case 'edit':
          return "Allowed";
        case 'delete':
          return "Not Allowed";
        default: return "Invalid action";
      }
    default:
      return "Invalid role";
  }
}


//Q7. Age Group Using Switch with true

function categorizeAge(age) {
  switch (true) {
    case (age >= 0 && age <= 12): return "Child";
    case (age >= 13 && age <= 19): return "Teen";
    case (age >= 20 && age <= 59): return "Adult";
    case (age >= 60): return "Senior";
    default: return "Invalid age";
  }
}

//Q8. What happens when break is missing in a switch? Explain with example.
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red.");
  case "banana":
    console.log("Bananas are yellow.");
  case "orange":
    console.log("Oranges are orange.");
  default:
    console.log("Unknown fruit.");
}


//Q9. Can we place default at the top of the switch block? Show with code.
let value = 10;

switch (value) {
  default:
    console.log("No match found.");
    break;
  case 5:
    console.log("Five");
    break;
  case 10:
    console.log("Ten");
    break;
}

//Q10. Explain fall-through in switch with a multi-case example.
let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Other day");
}

//Q.11)Use map() to convert an array of numbers into their squares.

const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num ** 2);
console.log(squares); 

//Q12. Use filter() to return only names longer than 5 characters.
const names = ["John", "Alexander", "Mike", "Elizabeth"];
const longNames = names.filter(name => name.length > 5);
console.log(longNames); 

//Q13. Use reduce() to find the sum of all odd numbers in an array.
const nums = [1, 2, 3, 4, 5];
const oddSum = nums.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
console.log(oddSum);

//Q14. Implement your own version of map() called customMap().

Array.prototype.customMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].customMap(x => x * 2)); 

//Q15. Create a function repeat(fn, n) to call any function n times.

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

repeat(() => console.log("Hello"), 3);

//Q16. Use forEach() to print the index and value of each array element.

const arr = ['a', 'b', 'c'];
arr.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

//Q17. Use reduce() to convert an array of strings into a sentence.

const words = ["Hello", "world", "this", "is", "JS"];
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence); 

//Q18. Filter out all palindromes from a string array.
const strings = ["madam", "racecar", "hello", "world"];
const nonPalindromes = strings.filter(word => word !== word.split('').reverse().join(''));
console.log(nonPalindromes); 

//Q19. Map through an array of numbers and return "Even" or "Odd".
const numsList = [1, 2, 3, 4];
const evenOdd = numsList.map(num => num % 2 === 0 ? "Even" : "Odd");
console.log(evenOdd); 

//Q20. Use reduce() to count how many times each number appears in an array.
const values = [1, 2, 2, 3, 3, 3];
const frequency = values.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(frequency); 



