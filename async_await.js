// asyn function always return the promise 
// await ka use krka usi promise ko result call krna tak ka wait krta h 

//const response =fetch ("https://jsonplaceholder.typicode.com/")
//console.log(response);

async function fetchUser(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/")
        const data =response.json();
        console.log(data);
    }
    catch(err){
        console.log("error happend" , err);
    }
}
fetchUser();