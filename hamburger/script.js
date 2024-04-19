const menu = document.getElementById("menu");
const lists = document.querySelector(".lists");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener('click', () => {
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    lists.classList.add = "sidebar";
})