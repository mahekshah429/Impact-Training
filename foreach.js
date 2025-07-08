 

/*what is difference between forEach and map?
foreach dosent returns the new array where map function will return a new array
*/
const fruits = ["apple", "banana", "cherry"];
const upperFruits = []; 
fruits.forEach((fruit) => {upperFruits.push(fruit.toUpperCase());});
console.log(upperFruits);