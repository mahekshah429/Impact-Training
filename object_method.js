/* Object.keys - it returns array of all keys in an object
 object.values - It will return array of values
object.entries - It will return an array of key values in object.
 

//keys example
 const person = {
    name: "Mahek",
    age: 23,
    city: "Surat"
};

console.log(Object.keys(person));

//values Example
const person = {
    name: "Mahek",
    age: 23,
    city: "Surat"
};

console.log(Object.values(person));


//Entries examples

const person = {
  name: "Mahek",
  age: 23,
  city: "Surat"
};

console.log(Object.entries(person));

// merge both objects & store result in object

const object1 = { name: "Mahek" };
const object2 = { age: 23 };

const mergedObject = { ...object1, ...object2 };

console.log(mergedObject);
*/

//no changement should be allowed in values of object
//object.freeze

const person = {
  name: "Mahek",
  age: 23,
  city: "Surat"
};

Object.freeze(person); 

person.name = "Anjan"; 

console.log(person);

