//This keyword is used to refer to the current object in JavaScript.
console.log(this); //{}


//This inside global space we use this in global space it will refer to window object by browser.
// the empty object will be shown in shown in node js will be global object

// this inside a regular function non-strict mode
function show() {
  console.log(this);
}
show();
//regular function me hum agar this ko refer krta h toh voh global object {} or window object ko refer krta h.

// this in strict mode
// if we use "use strict" then this will return be undefined"'
// strict mode me this ka default behaviour will be changed agar kisi function object ka through call krenga toh undefined return aayenga
// yeah browser and node js dono case me same rahenga

//use strict
function showStrict() {
  "use strict";
  console.log(this);
}

// this depends on how function is called
// it is object ke through function call ho raha h this usi object ko refer krenga
function sayHi() {
     console.log(this.name);
}
const user1 = {name: "John",sayHi};
const user2 = {name: "roe",sayHi};
user1.sayHi(); 
user2.sayHi(); 
// this in constructor function

// this inside an object method
// Differnece between function and method
// function is independent and method is dependent on object
function sayHi() {
  console.log("Hello");
}
sayHi(); // Hello
 
//method - object ke andar function ko method bolte hain
const student = {
name1 : "ram",
setname: function() {
  console.log(name1);
  // this refers to the student object
}
};
student.setname(); // ram
// inside method ths will refered to cureent object 

// this inside an arrow function
// arrow function apna this nahi rakhte hain yeah lexical this hota hain matlab yeah jah defined hain wahan se this ko refer krte hain
const user = {
  name: "John",
  sayHi: () => {
    console.log(this.name); // undefined, because arrow function does not have its own this
  }
};
user.sayHi(); // undefined


