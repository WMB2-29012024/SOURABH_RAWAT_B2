const input = document.getElementById("input");
const para = document.getElementById("para");

input.addEventListener("keyup", (e) => {
    e.preventDefault();
    const value = input.value;
    para.innerText = value;
})