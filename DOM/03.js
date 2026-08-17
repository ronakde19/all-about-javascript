// create a image using js and add it above h1 in html

let img = document.createElement("img");
img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1786813388851-fdb0be9c8d50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

document.querySelector("h1").prepend(img);