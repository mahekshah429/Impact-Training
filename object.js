//where we have to store the data in form of key value pair known as js Object.
//In js object method are function which will be used inside the object as a value of a Key

//Example 1
const person = {
  name: "Mahek",
  age: 23,
  city: "Surat"
};
console.log(person.name)

//Example 2
const user = {
  name: "Mahek",
  greet: function () {
    console.log('Hello ' + this.name);
  }
};

user.greet(); // Call the method correctly
