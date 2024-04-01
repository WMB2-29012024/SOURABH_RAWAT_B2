const input = document.getElementById("text");
const button = document.getElementById("button");
const para = document.getElementById("result");
const newPara = document.createElement("p");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const newPara = document.createElement("p");
    newPara.textContent = `Hi, ${input.value}`;
    para.appendChild(newPara);
    input.value = "";
});