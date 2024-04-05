const select = document.getElementById("select");
const para = document.getElementById("para");

select.addEventListener("change", () => {
    const value = select.value;
    para.innerText = value;
})