const inputName = document.getElementById("text");
const inputEmail = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`Full Name : ${inputName.value}`);
    console.log(`Email : ${inputEmail.value}`);
});