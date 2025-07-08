//refered to undex3.html

// event in js?
// This code snippet demonstrates how to handle events in JavaScript.
// koi bhi user yeah browser ke action pr react karne ke liye event ka use hota hai.
//-button click, mouse over, key press, page load, form submit, etc.
// jab event trigger hota hai, toh us event ke liye ek function call hota hai usse event handler kehte hain. 

// what is event bubbling & capturing

// event bubbling: jab koi event trigger hota hai toh woh sabse pehle us element par trigger hota hai jisse event hua hai,
// jabh bhin event ko child to grand parent tak run krenga toh use event bubbling kehte hain.


// event capturing: jab koi event trigger hota hai toh woh sabse pehle parent element par trigger hota hai,
// just reverse of event bubbling, jabh bhin event ko grand parent to child tak run krenga toh use event capturing kehte hain.
//top to bottom

// event address
// onclick - jabh hume html me direct attribute ka through bind krna hota h
// onmouseover - jabh mouse kisi element pr hover hota hai
// onmouseout - jabh mouse kisi element se bahar nikalta hai


// add event listener
// addEventListener() method is used to attach an event handler to the specified element.

// remove event listener
// joh event abhi humna addeventlistener se add kiya hai, usi event ko remove karne ke liye removeEventListener() method ka use hota hai.
//remove krna ka liya event ka naam function hona zaruri h
