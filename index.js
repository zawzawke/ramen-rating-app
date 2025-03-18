document.addEventListener("DOMContentLoaded", main);

let selectedRamen = null;

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpeg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./images/miso.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "./images/tonkotsu.jpeg" },  // No comment
];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    selectedRamen = ramen;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = ramen.rating || "No rating";
    document.getElementById("ramen-comment").textContent = ramen.comment || "No comment";  // Handle missing comment
}

function addSubmitListener() {
    document.getElementById("new-ramen").addEventListener("submit", function(event) {
        event.preventDefault();
        const form = event.target;
        
        const newRamen = {
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comment: form.comment.value
        };
        
        addRamenToMenu(newRamen);
        form.reset();
    });
}

function addRamenToMenu(ramen) {
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
}

function main() {
    displayRamens();
    addSubmitListener();
}
