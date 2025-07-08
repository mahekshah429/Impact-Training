//1
let numbers = [1, 2, 3];
numbers.push(4);
numbers.unshift(0);
console.log(numbers);  


//2
let fruits = ["apple", "banana", "cherry", "mango", "grapes"];
fruits.pop();
fruits.shift();
console.log(fruits);  


//3
let arr = [10, 20, 30, 40];
arr.splice(1, 1, 25);
console.log(arr);  


//4
let colors = ["red", "blue", "green", "yellow"];
console.log(colors.join("-"));  


//5
let nums = [100, 200, 300];
console.log(nums.toString());  


//6
let values = [5, 10, 15, 20];
console.log(values.at(-1));  


//7
let nums2 = [1, 2, 3, 4, 5];
nums2.copyWithin(3, 0, 2);
console.log(nums2);  


//8
let nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat(2));  


//9
let arr2 = [10, 20, 30, 40, 50];
console.log(arr2.slice(1, 4));  


//10
let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log(result);  


//11
let arr3 = [10, 20, 30, 40, 50];
delete arr3[2];
console.log(arr3);  
console.log(arr3.length);  


//12
let original = [9, 8, 7, 6];
let newArr = original.toSpliced(1, 1, 10, 11);
console.log(original);  
console.log(newArr);    


//13
let nums4 = [1, 2, 3, 4, 5];
nums4.splice(-2);
console.log(nums4);  


//14
let originalArr = [7, 8, 9];
let copyArr = [...originalArr];
copyArr.unshift(6);
console.log(originalArr);  
console.log(copyArr);      


//15
function joinWithPipe(arr) {
  return arr.join(" | ");
}
console.log(joinWithPipe(["a", "b", "c"]));  


//16
function lastItem(arr) {
  return arr[arr.length - 1];
}
console.log(lastItem([1, 2, 3]));  


//17
function secondLast(arr) {
  return arr.at(-2);
}
console.log(secondLast([1, 2, 3, 4]));  


//18
function reverseArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }
  return result;
}
console.log(reverseArr([1, 2, 3]));  


//19
let twoD = [[1, 2], [3, 4]];
console.log(twoD.flat());  


//20
let names = ["Ram", "Shyam"];
let marks = [80, 90];
let combined = [];

for (let i = 0; i < names.length; i++) {
  combined.push(names[i] + ": " + marks[i]);
}

console.log(combined); 
