// jabh bhi hum koi api fetch krta h server sa toh 3kam ho skata h 
//1. Data server turant return kr de - resolved state
//2. thoda sa wait kraye - pending state
//3. send hi na kre - reject state 
//yeah 3 conditions ka solve krna ka liya promise use hoga 
// yeah joh state jisma hume data server sa mil jayenga use kehta h resolved state 

let promise = new Promise((resolve, reject) => {
  let success = true; 
  if (success) {
    resolve("Task done");
  } else {
    reject("Task failed");
  }
});


promise
  .then((msg) => {
    console.log("Resolved", msg); 
  })
  .catch(error => {
    console.log(error); 
  });


