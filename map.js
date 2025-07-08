// map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements.
/*let arr=[1,2,3]
arr.map((item.index,array))
{
   // we can use console with these following parameters
    console.log(item);
     console.log(index);
     console.log(n);
     console.log(array);
}
*/

let arr=[1,2,3,4,5];
arr.map((item, index, array) => {
   arr.push(55)
});
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
