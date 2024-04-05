const input = document.getElementById("search");
const fruitList = document.getElementById("fruitList");
// const fruits = fruitList.getElementsByTagName("li");

const fruits = ["Apple", "Mango", "Grapes", "Berries", "Pomegranate", "Orange", "Kiwi", "Banana"];

function renderFruitsList(el) {
    for (const fruit of fruits) {
        const fruitItem = document.createElement("li");
        fruitItem.innerText = fruits;
        fruitList.appendChild(fruit);
    }
}

renderFruitsList(fruits);

input.addEventListener("keyup", (e) => {
    e.preventDefault();


})
// input.addEventListener("keyup", (e) => {
//     e.preventDefault();

//     const searchQuery = input.value.toLowerCase();

//     for (let i = 0; i < fruits.length; i++) {

//         const fruit = fruits[i].textContent.toLowerCase();

//         if (fruit.includes(searchQuery)) {
//             fruits[i].style.display = "block";
//         } else {
//             fruits[i].style.display = "none";
//         }
//     }
// })