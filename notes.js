/*
Each function and variable has a scope, check for its parent functions GCC that its either present or not known as scope chaining.


temporial dead zone: The area where a variable is not accessible until it is declared.
let and const ki values ke memory me store hoti hai, lekin unhe access nahi kiya ja sakta jab tak unhe declare nahi kiya jata.


types of errors in javascript
1. Syntax Error: Occurs when the code is not written correctly. 
console.log(result;// this will throw a Syntax Error because of the missing closing parenthesis

2. Reference Error: Occurs when a variable is not defined or not in scope.
console.log(x);
let x = 10; 

3. Type Error: Occurs when a value is not of the expected type.
const name = 10;
name(); // this will throw a Type Error because name is not a function


4. Range Error: Occurs when a value is not in the expected range.
function name(n){
console.log(n);
name(n+1); // this will throw a Range Error because the function will call itself indefinitely
}
name(1);
//when we want to allocate an invalid space in cell stack or try to maximize the stack size that time know as range error 


5. Eval Error: Occurs when the eval() function is used incorrectly.





*/
