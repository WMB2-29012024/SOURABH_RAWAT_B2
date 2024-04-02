const inputName = document.getElementById("text");
const inputEmail = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");
const form = document.getElementById("form");
const error = document.getElementById("error");
const newError = document.createElement("p");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`Full Name : ${inputName.value}`);
    console.log(`Email : ${inputEmail.value}`);
    if(password.value === password1.value){
        alert("Form Submitted");
        console.log(`Password : ${password.value}`);
    } else {
        newError.textContent = `Password and confirm password are different`;
        newError.style.color = "red";
        error.appendChild(newError);
        console.log("Password and confirm password are different");
    }
});