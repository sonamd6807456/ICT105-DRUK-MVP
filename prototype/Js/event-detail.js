/* ==========================================
   Smart Campus Event Hub
   Event Detail JavaScript
========================================== */

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
// Save Selected Event
// ================================

const eventData = {

    title: "AI Workshop 2026",
    date: "20 July 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Building 11, Room 304",
    organizer: "Faculty of ICT",
    fee: "Free"

};

localStorage.setItem("selectedEvent", JSON.stringify(eventData));

// ================================
// Register Button
// ================================

const registerBtn = document.querySelector(".register-btn");

if(registerBtn){

    registerBtn.addEventListener("click", function(){

        localStorage.setItem("selectedEvent", JSON.stringify(eventData));

    });

}

// ================================
// Share Event
// ================================

const shareButton = document.createElement("button");

shareButton.innerHTML = "📤 Share Event";

shareButton.className = "back-btn";

const buttonArea = document.querySelector(".buttons");

if(buttonArea){

    buttonArea.appendChild(shareButton);

}

shareButton.addEventListener("click", function(){

    if(navigator.share){

        navigator.share({

            title: eventData.title,

            text: "Join me at " + eventData.title,

            url: window.location.href

        });

    }

    else{

        navigator.clipboard.writeText(window.location.href);

        alert("Event link copied to clipboard!");

    }

});

// ================================
// Add to Calendar
// ================================

const calendarButton = document.createElement("button");

calendarButton.innerHTML = " Add to Calendar";

calendarButton.className = "register-btn";

if(buttonArea){

    buttonArea.appendChild(calendarButton);

}

calendarButton.addEventListener("click", function(){

    alert(
        "This prototype would add the event to your calendar."
    );

});

// ================================
// Favorite Event
// ================================

const favoriteButton = document.createElement("button");

favoriteButton.innerHTML = " Favorite";

favoriteButton.className = "back-btn";

if(buttonArea){

    buttonArea.appendChild(favoriteButton);

}

let favorite = localStorage.getItem("favoriteEvent");

if(favorite === "true"){

    favoriteButton.innerHTML = " Favorited";

}

favoriteButton.addEventListener("click", function(){

    if(localStorage.getItem("favoriteEvent") === "true"){

        localStorage.setItem("favoriteEvent","false");

        favoriteButton.innerHTML = " Favorite";

    }

    else{

        localStorage.setItem("favoriteEvent","true");

        favoriteButton.innerHTML = " Favorited";

    }

});

// ================================
// Countdown
// ================================

const countdown = document.createElement("p");

countdown.style.marginTop = "20px";

countdown.style.fontWeight = "600";

countdown.style.color = "#003B8E";

document.querySelector(".event-information").appendChild(countdown);

const targetDate = new Date("July 20, 2026 10:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        countdown.innerHTML = " Event Started";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

    countdown.innerHTML =
        " Starts in " + days + " Days " + hours + " Hours";

}

updateCountdown();

setInterval(updateCountdown,60000);

// ================================
// Page Animation
// ================================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".5s";

        document.body.style.opacity="1";

    },100);

});

// ================================
// Console
// ================================

console.log("Event Detail Page Loaded");