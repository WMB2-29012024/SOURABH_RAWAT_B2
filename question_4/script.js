const form = document.getElementById("form");
const para = document.getElementById("para");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedGender = document.querySelector("input[name='gender']:checked");
    if (selectedGender) {
        para.innerText = selectedGender.value;
    }
})