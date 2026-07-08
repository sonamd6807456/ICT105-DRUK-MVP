/* ==========================================
   Smart Campus Event Hub
   Register Page JavaScript
========================================== */

// ===========================
// Mobile Navigation
// ===========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===========================
// Load Selected Event
// ===========================

const event = JSON.parse(localStorage.getItem("selectedEvent"));

if (event) {

    document.getElementById("eventTitle").textContent = event.title;
    document.getElementById("eventDate").textContent = event.date;
    document.getElementById("eventTime").textContent = event.time;
    document.getElementById("eventVenue").textContent = event.venue;
    document.getElementById("eventOrganizer").textContent = event.organizer;
    document.getElementById("eventFee").textContent = event.fee;

}

// ===========================
// Registration Form
// ===========================

const form = document.getElementById("registrationForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const faculty = document.getElementById("faculty").value;
    const year = document.getElementById("year").value;
    const nationality = document.getElementById("nationality").value.trim();

    // Validation

    if(
        name === "" ||
        studentId === "" ||
        email === "" ||
        phone === "" ||
        nationality === ""
    ){

        alert("Please fill in all required fields.");

        return;

    }

    // Student Data

    const student = {

        name,
        studentId,
        email,
        phone,
        faculty,
        year,
        nationality,
        event

    };

    // Existing Registrations

    let registrations =
        JSON.parse(localStorage.getItem("registrations")) || [];

    registrations.push(student);

    localStorage.setItem(
        "registrations",
        JSON.stringify(registrations)
    );

    // Save Student Profile

    localStorage.setItem(
        "studentProfile",
        JSON.stringify(student)
    );

    // Show Popup

    popup.style.display = "flex";

});

// ===========================
// Close Popup
// ===========================

window.addEventListener("click", function(e){

    if(e.target === popup){

        popup.style.display = "none";

    }

});

// ===========================
// Email Validation
// ===========================

const emailInput = document.getElementById("email");

emailInput.addEventListener("blur", function(){

    const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(emailInput.value)){

        alert("Please enter a valid email.");

    }

});

// ===========================
// Student ID Validation
// ===========================

const studentInput =
document.getElementById("studentId");

studentInput.addEventListener("input", function(){

    if(this.value.length > 10){

        this.value =
        this.value.substring(0,10);

    }

});

// ===========================
// Phone Validation
// ===========================

const phoneInput =
document.getElementById("phone");

phoneInput.addEventListener("input", function(){

    this.value =
    this.value.replace(/[^0-9]/g,'');

});

// ===========================
// Auto Save Form
// ===========================

const inputs =
document.querySelectorAll("input, select");

inputs.forEach(input=>{

    input.addEventListener("change",()=>{

        localStorage.setItem(

            input.id,

            input.value

        );

    });

});

// ===========================
// Restore Saved Form
// ===========================

inputs.forEach(input=>{

    const value =
    localStorage.getItem(input.id);

    if(value){

        input.value = value;

    }

});

// ===========================
// Registration Counter
// ===========================

let total =
JSON.parse(localStorage.getItem("registrations")) || [];

console.log(

"Total Registrations:",

total.length

);

// ===========================
// Success
// ===========================

console.log("Registration Page Loaded");