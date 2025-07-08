// 1. Function Statement: Count vowels
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log("1️⃣ Vowel Count:", countVowels("Mahek and Anjan"));

// 2. Function Expression: Check prime
const isPrime = function(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log("2️⃣ Is Prime (17):", isPrime(17));

// 3. Function Declaration: Anagram check
function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log("3️⃣ Is Anagram (listen, silent):", isAnagram("listen", "silent"));

// 4. Anonymous function inside setInterval (runs every 3s)
// Commented to prevent infinite logs
// setInterval(function() {
//   console.log("4️⃣", new Date().toLocaleTimeString());
// }, 3000);

// 5. Named Function Expression: Sum of digits
const sumDigits = function sum(n) {
  if (n < 10) return n;
  return n % 10 + sum(Math.floor(n / 10));
};
console.log("5️⃣ Sum of Digits (1234):", sumDigits(1234));

// 6. Named Function Expression: Word count
const countWords = function wordCounter(str) {
  return str.trim().split(/\s+/).length;
};
console.log("6️⃣ Word Count:", countWords("Mahek and Anjan are coding"));

// 7. Function with multiple parameters
function generateReport(studentName, totalMarks, grade) {
  console.log(`7️⃣ Report for ${studentName}:\nTotal Marks: ${totalMarks}\nGrade: ${grade}`);
}
generateReport("Mahek", 87, "A");

// 8. Destructure object parameter
function displayUser({ name, age, email }) {
  console.log(`8️⃣ Name: ${name}, Age: ${age}, Email: ${email}`);
}
displayUser({ name: "Anjan", age: 30, email: "anjan@example.com" });

// 9. Function accepts another function
function executeWithLog(fn) {
  console.log("9️⃣ Before execution");
  fn();
  console.log("After execution");
}
executeWithLog(() => console.log("Executing task..."));

// 10. Function returns another function (Closure)
function greeter(name) {
  return function() {
    console.log(`🔟 Hello, ${name}!`);
  };
}
const greetMahek = greeter("Mahek");
greetMahek();

// 11. Array of functions
const funcArr = [
  () => console.log("1️⃣1️⃣ Function 1"),
  () => console.log("Function 2"),
  () => console.log("Function 3")
];
funcArr.forEach(fn => fn());

// 12. Leap year check
const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log("1️⃣2️⃣ Is Leap Year (2024):", isLeapYear(2024));

// 13. Filter divisible by 3 and 5
const filterBy3And5 = arr => arr.filter(num => num % 3 === 0 && num % 5 === 0);
console.log("1️⃣3️⃣ Divisible by 3 and 5:", filterBy3And5([15, 10, 9, 30, 7]));

// 14. Total price with reduce
const totalPrice = products => products.reduce((total, p) => total + p.price, 0);
console.log("1️⃣4️⃣ Total Price:", totalPrice([
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 40 },
  { name: "Eraser", price: 5 }
]));

// 15. Custom map function
function customMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
console.log("1️⃣5️⃣ Custom Map [x2]:", customMap([1, 2, 3], (num) => num * 2));

// 16. Delayed function execution
function delayFunction(fn, arg) {
  setTimeout(() => fn(arg), 2000);
}
delayFunction(console.log, "1️⃣6️⃣ Delayed Hello after 2s");

// 17. Calculator with callback
function calculator(a, b, operation) {
  return operation(a, b);
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
console.log("1️⃣7️⃣ Calculator Add (5+3):", calculator(5, 3, add));
console.log("Calculator Subtract (9-4):", calculator(9, 4, subtract));

// 18. Simulate async API call
function fetchUserData(id, callback) {
  setTimeout(() => {
    callback({ id, name: "John Doe", age: 30 });
  }, 2000);
}
fetchUserData(101, (user) => {
  console.log("1️⃣8️⃣ Fetched User:", user);
});

// 19. Counter using closure
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count
  };
}
const counter = createCounter();
console.log("1️⃣9️⃣ Counter Increment:", counter.increment());
console.log("Counter Increment:", counter.increment());
console.log("Counter Decrement:", counter.decrement());

// 20. Role-based access control using closure
function secureAccess(role) {
  return function(userRole) {
    return userRole === role;
  };
}
const isAdmin = secureAccess("admin");
console.log("2️⃣0️⃣ Access (admin):", isAdmin("admin"));
console.log("Access (user):", isAdmin("user"));
