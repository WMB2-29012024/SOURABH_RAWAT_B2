const bars = document.getElementById('icon');
const sidebar = document.getElementById('sidebar');

let visible = true;

bars.addEventListener('click', () => {
    if (visible == true) {
        bars.innerHTML = `☰`;
        visible = false;
        sidebar.style.left = '0px';

    } else {
        bars.innerHTML = `✖`;
        visible = true;
        sidebar.style.left = '-250px';
    }
})

