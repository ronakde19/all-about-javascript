// Create a new list item and append it to end of ul

let ul = document.querySelector("ul");
let li = document.createElement("li");

li.textContent = "New Task";

ul.appendChild(li);