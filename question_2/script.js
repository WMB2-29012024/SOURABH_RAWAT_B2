const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.getElementById("button");
const para = document.getElementById("para");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const sum = Number(num1.value) + Number(num2.value);
    para.innerText = sum;
})