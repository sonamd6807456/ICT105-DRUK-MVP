/* ==========================================
   DASHBOARD PAGE
   Smart Campus Event Hub
========================================== */

// ==========================
// Mobile Navigation
// ==========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==========================
// Check Login
// ==========================

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
    alert("Please login first.");
    window.location.href = "login.html";
}

// ==========================
// Welcome Message
// ==========================

document.getElementById("welcomeMessage").textContent =
    "Welcome, " + currentUser.fullname + " 👋";

// ==========================
// Profile Information
// ==========================

document.getElementById("studentName").textContent =
    currentUser.fullname;

document.getElementById("studentID").textContent =
    currentUser.studentid;

document.getElementById("studentEmail").textContent =
    currentUser.email;

document.getElementById("studentFaculty").textContent =
    currentUser.faculty;

// ==========================
// Load Registrations
// ==========================

const registrationContainer =
    document.getElementById("registrationList");

const registrations =
    JSON.parse(localStorage.getItem("registrations")) || [];

const myRegistrations = registrations.filter(reg => {

    return reg.email === currentUser.email;

});

if(myRegistrations.length === 0){

    registrationContainer.innerHTML = `

        <div class="empty">

            <h3>No Registered Events</h3>

            <p>
            You haven't registered for any events yet.
            </p>

        </div>

    `;

}else{

    myRegistrations.forEach(reg => {

        registrationContainer.innerHTML += `

        <div class="registration-card">

            <h3>${reg.event.title}</h3>

            <p><strong>Date:</strong> ${reg.event.date}</p>

            <p><strong>Time:</strong> ${reg.event.time}</p>

            <p><strong>Venue:</strong> ${reg.event.venue}</p>

            <p><strong>Organizer:</strong> ${reg.event.organizer}</p>

            <p><strong>Fee:</strong> ${reg.event.fee}</p>

        </div>

        `;

    });

}

// ==========================
// Statistics
// ==========================

// Registered Events

document.getElementById("registeredCount").textContent =
    myRegistrations.length;

// Favorite Events

let favoriteCount = 0;

for(let i=0;i<50;i++){

    if(localStorage.getItem("favorite"+i)==="true"){

        favoriteCount++;

    }

}

document.getElementById("favoriteCount").textContent =
favoriteCount;

// Reviews

const reviews =
JSON.parse(localStorage.getItem("reviews")) || [];

const myReviews = reviews.filter(review=>{

    return review.email === currentUser.email;

});

document.getElementById("reviewCount").textContent =
myReviews.length;

// ==========================
// Logout
// ==========================

const logoutBtn =
document.getElementById("logoutBtn");

logoutBtn.addEventListener("click",()=>{

    if(confirm("Are you sure you want to logout?")){

        localStorage.removeItem("loggedIn");
        localStorage.removeItem("currentUser");

        window.location.href="login.html";

    }

});

// ==========================
// Greeting Based on Time
// ==========================

const hour = new Date().getHours();

let greeting = "";

if(hour < 12){

    greeting = "Good Morning";

}
else if(hour < 18){

    greeting = "Good Afternoon";

}
else{

    greeting = "Good Evening";

}

console.log(greeting + ", " + currentUser.fullname);

// ==========================
// Dashboard Loaded
// ==========================

console.log("Dashboard Loaded Successfully");