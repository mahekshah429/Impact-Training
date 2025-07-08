// it is usedto test the single-threaded nature of JavaScript
console.log("ram");
console.log("shyam");
console.log("mohan");
// it executes one task at at time until that particular task will not over we cant move to next task

//jabh hum js code komexecute krta h to agar kisi chunck of code me comparitively kam time lagta h to wo code ko execute krta h phela 

// callback function is a function which is passed as an parameter to another function and that function is executed after the completion of the first function
// example of callback function
function sayhi(name, callback) {
  console.log("hi " + name);
  callback();
}
function bye() {
  console.log("Good bye");
}

sayhi("ram", bye);

// setTimeout is a function that is used to execute a function after a specified time
// it is used to test the single-threaded nature of JavaScript
console.log("Start");
setTimeout(() => {
  console.log("This is setTimeout");
}, 4000);
console.log("End");