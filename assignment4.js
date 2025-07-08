//Global Context1
const name = "Ram";
function say() {
  console.log(this.name);
}
say(); 

//In Browser, this in global context refers to window, and window.name is "Ram".
//In Node.js, this is not global, so it's undefined.


//2. Function Inside Object (Not a Method)
const user1 = {
  name: "Aashi",
  greet: function () {
    function inner() {
      console.log(this.name);
    }
    inner(); 
  }
};
user1.greet();
//undefined
//inner() is a normal function call, so this refers to global object.
//Hence, output is undefined.


//3. Arrow Function Inside a Method
const obj1 = {
  name: "Mahek",
  show: function () {
    const arrow = () => {
      console.log(this.name); 
    };
    arrow();
  }
};
obj1.show();
//Arrow functions do not have their own this.
//They inherit this from their surrounding context (show), so it’s obj.


//4. Arrow Function Assigned Later
const arrow = () => {
  console.log(this); 
};
const user = {
  arrowFunc: arrow
};
user.arrowFunc(); 

// not user
//this is lexically bound when arrow was defined (global context).
//So this is not user.


//5. Arrow Function Inside Constructor
function Person(name) {
  this.name = name;
  this.say = () => {
    console.log(this.name); 
  };
}
const p = new Person("Ram");
const sayFn = p.say;
sayFn();
//Arrow function inside constructor closes over this from the constructor.
//So this.name refers to "Ram" even when extracted.


// 6. Nested Arrow and Regular Function
const obj = {
  name: "Mehan",
  method: function () {
    const arrow1 = () => {
      function regular() {
        console.log(this.name); 
      }
      regular();
    };
    arrow1();
  }
};
obj.method();
//Regular function regular() has its own this (global).
//this.name is undefined.


//7. Returning a Regular Function from Method
const person2 = {
  name: "mahekku",
  getName: function () {
    return function () {
      console.log(this.name); 
    };
  }
};
const fn1 = person2.getName();
fn1();
//The returned regular function is called in global context.
//So this.name is undefined.


//8. Returning an Arrow Function from Method
const person1 = {
  name: "Anjani",
  getName: function () {
    return () => {
      console.log(this.name); 
    };
  }
};
const fn2 = person1.getName();
fn2();
//Arrow function inherits this from getName method, so it’s person.


//9. Method in Nested Object
const outer = {
  name: "Outer",
  inner: {
    name: "Shah",
    getName: function () {
      console.log(this.name); 
    }
  }
};

outer.inner.getName();
//getName is called as method of inner, so this is inner.


//10. this in IIFE Inside a Method
const obj3 = {
  name: "kumar",
  method: function () {
    (function () {
      console.log(this.name); 
    })();
  }
};
obj3.method();
//undefined
//IIFE is called in global context, so this refers to global object.


//11. this in setTimeout (Regular Function)
const obj4 = {
  name: "Viya",
  show: function () {
    setTimeout(function () {
      console.log(this.name); 
    }, 0);
  }
};
obj4.show();
// undefined
//setTimeout calls the function in global context, so this is undefined.


//12. this in setTimeout (Arrow Function)
const obj5 = {
  name: "Mokshu",
  show: function () {
    setTimeout(() => {
      console.log(this.name); 
    }, 0);
  }
};
obj5.show();
//Mokshu
//Arrow function captures this from show, which is obj.

