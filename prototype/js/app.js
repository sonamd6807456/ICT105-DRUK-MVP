/* ==========================================
   SMART CAMPUS EVENT HUB
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       Mobile Navigation
    ========================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

        });

    }

    /* ==========================
       Close Mobile Menu
    ========================== */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

        });

    });

    /* ==========================
       Sticky Header
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow = "0 4px 10px rgba(0,0,0,.08)";

        }

    });

    /* ==========================
       Back To Top Button
    ========================== */

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================
       Search Box
    ========================== */

    const searchForm = document.querySelector(".search-form");
    const searchInput = document.getElementById("searchInput");

    if (searchForm) {

        searchForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const keyword = searchInput.value.trim();

            if (keyword === "") {

                alert("Please enter an event name.");

                return;

            }

            window.location.href =
                "events.html?search=" +
                encodeURIComponent(keyword);

        });

    }

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       Reveal Animation
    ========================== */

    const revealElements = document.querySelectorAll(

        ".event-card, .category-card, .feature-card, .testimonial-card"

    );

    function revealOnScroll() {

        const trigger = window.innerHeight * 0.85;

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < trigger) {

                element.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    console.log("Smart Campus Event Hub Loaded Successfully");

});