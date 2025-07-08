//it is also a higher-order function
//if particular array want to perform 

const arr = [1, 2, 3, 4, 5];

const total = arr.reduce((acc, curr) => acc + curr, 0);

console.log(total);
