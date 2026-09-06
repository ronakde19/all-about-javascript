let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passans = passwordRegex.test(password.value);

    let isvalid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent="Email is Incorrect";
        document.querySelector("#emailError").style.display="initial";

        isvalid = false;

    }
    if(!passans){
        document.querySelector("#passwordError").textContent="password is Incorrect";
        document.querySelector("#passwordError").style.display="initial";

        isvalid = false;

    }

    if(isvalid){
        document.querySelector("#message").textContent="Everything is fine"

    }
})