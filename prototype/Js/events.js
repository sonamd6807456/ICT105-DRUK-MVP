/* ==========================================
   Smart Campus Event Hub
   Events Page JavaScript
========================================== */

// ==========================
// Mobile Menu
// ==========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==========================
// Event Search
// ==========================

const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category");
const eventCards = document.querySelectorAll(".event-card");

function filterEvents() {

    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let visibleCount = 0;

    eventCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = title.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    showEmptyMessage(visibleCount);

}

if(searchInput){
    searchInput.addEventListener("keyup", filterEvents);
}

if(categoryFilter){
    categoryFilter.addEventListener("change", filterEvents);
}

// ==========================
// Empty Search Message
// ==========================

function showEmptyMessage(count){

    let emptyBox = document.querySelector(".no-event");

    if(!emptyBox){

        emptyBox = document.createElement("div");

        emptyBox.className = "no-event";

        emptyBox.innerHTML = `
            <h2>No Events Found</h2>
            <p>Try another keyword or category.</p>
        `;

        document.querySelector("section:last-of-type")
            .appendChild(emptyBox);

    }

    if(count === 0){

        emptyBox.style.display = "block";

    }else{

        emptyBox.style.display = "none";

    }

}

// ==========================
// Favorite Button
// ==========================

eventCards.forEach(card => {

    const favorite = document.createElement("button");

    favorite.innerHTML = "🤍";

    favorite.className = "favorite-btn";

    card.appendChild(favorite);

    favorite.addEventListener("click", () => {

        favorite.classList.toggle("liked");

        if(favorite.classList.contains("liked")){

            favorite.innerHTML = "❤️";

        }else{

            favorite.innerHTML = "🤍";

        }

    });

});

// ==========================
// Card Hover Effect
// ==========================

eventCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// ==========================
// Save Favorite Events
// ==========================

document.querySelectorAll(".favorite-btn").forEach((button,index)=>{

    const saved = localStorage.getItem("favorite"+index);

    if(saved==="true"){

        button.classList.add("liked");
        button.innerHTML="❤️";

    }

    button.addEventListener("click",()=>{

        const liked = button.classList.contains("liked");

        localStorage.setItem("favorite"+index,liked);

    });

});

// ==========================
// Smooth Fade Animation
// ==========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

eventCards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";

    observer.observe(card);

});

// ==========================
// Console Message
// ==========================

console.log("Events Page Loaded Successfully");