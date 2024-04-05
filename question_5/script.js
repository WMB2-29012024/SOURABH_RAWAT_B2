const input = document.getElementById("file");
const button = document.getElementById("submit");
const para = document.getElementById("para");
const formElem = document.getElementsByTagName("form")[0];

input.addEventListener("change", (e) => {
    e.preventDefault();
    const filesList = e.target.files;
    const listElem = document.createElement("ol");
    for (const file of filesList) {
        const clutter = `
       <li>
       <p>Name:${file.name}</p>
       <p>Size:${file.size / (10 ** 6).toFixed(2)}MB</p>
       <p>Type:${file.type}</p>
       </li>`
        listElem.innerHTML += clutter;
    }
    formElem.appendChild(listElem);
})
