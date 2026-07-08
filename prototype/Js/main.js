/* =====================================
   Smart Campus Event Hub
   Main JavaScript
===================================== */

// ================================
// Mobile Navigation
// ================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ================================
// Close Mobile Menu After Click
// ================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ================================
// Search Box
// ================================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".event-card");

        cards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ================================
// Sticky Header Shadow
// ================================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// ================================
// Active Navigation Link
// ================================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if(link.getAttribute("href") === currentPage){

        link.style.color = "#FFD447";
        link.style.fontWeight = "600";

    }

});

// ================================
// Hero Button Animation
// ================================

const primaryBtn = document.querySelector(".primary-btn");

if(primaryBtn){

    primaryBtn.addEventListener("mouseenter", ()=>{

        primaryBtn.style.transform = "scale(1.05)";

    });

    primaryBtn.addEventListener("mouseleave", ()=>{

        primaryBtn.style.transform = "scale(1)";

    });

}

// ================================
// Fade In Animation on Scroll
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".event-card, .category-card, .about-grid div").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ================================
// Welcome Message
// ================================

window.onload = function(){

    console.log("Welcome to Smart Campus Event Hub");

};