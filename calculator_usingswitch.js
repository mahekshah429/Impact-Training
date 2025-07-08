// calculator using switch case

// Take input from user
let operator = "+"; // Or use prompt("Enter operator (+, -, *, /):");

let a = 10, b = 20;
let result;

switch (operator) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if (b !== 0) {
      result = a / b;
    } else {
      console.log("Error: Division by zero!");
      break;
    }
    break;
  default:
    console.log("Invalid operator!");
    break;
}

if (result !== undefined) {
  console.log("Result:", result); 
}


// Output will be: Result: 30