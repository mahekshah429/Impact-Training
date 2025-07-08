//alter()
//element ka 
let element = document.createElement('p');
newp.textContent = "This is a new paragraph created using createElement.";
document.getElementById("targe").alter(newp);

// Append the new element to the body or a specific container
//jabh hum multiple nodes or text ko last me add karte hain to appendChild use karte hain
document.body.appendChild(element);


//what is node??
//// Node is a fundamental part of the DOM (Document Object Model) that represents a single point in the document tree
// Node can be an element, text, comment, etc.

// prepend method
//it is use when we wwant to add a new element at the beginning of the tag

//insertadajacentHTML
//it is used to insert a new element at a specific position in the DOM
//document.insertAdjacentHTML('position', html String);

document.getElementById("targe").insertAdjacentHTML('aftereend', '<p>This is a new paragraph added using insertAdjacentHTML.</p>');

// replaceChild method
//parent ke kissi child ko replace karne ke liye use hota hai
//parentElement.replaceChild(newElement, oldElement);
let oldElement = document.getElementById("oldElementId");
let newElement = document.createElement('old');
document.getElementById("targe").replaceChild(newp, oldp);

//clone node 
//kisi element ko copy/clone karne ke liye use hota hai
let clonedElement = element.cloneNode(true); // true for deep clone, false for shallow clone
let copydocument = document.getElementById("targe").cloneNode(true); 
// if we write true then it will copy all the child elements as well
document.body.appendChild(copy);

// remove method
//kisi element ko remove karne ke liye use hota hai
let elementToRemove = document.getElementById("elementId");
elementToRemove.remove();   
document.getElementById("box").removeChild(oldElement);

// insertBefore method
// ek naya elment ko kisi existing element ke pehle insert karne ke liye use hota hai
//parentElement.insertBefore(newnode, existingnode);
let newli= document.createElement('li');
newlli.textContent = "grapes";
let list = document.getElementById("fruits");
let firstitem=list.firstElementChild; 
list.insertBefore(newli, firstitem);

