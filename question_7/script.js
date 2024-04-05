const select = document.getElementById("select");

select.addEventListener("change", (e) => {
    e.preventDefault();

    if (select.value = "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})