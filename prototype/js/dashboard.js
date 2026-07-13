/* ==========================================
   SMART CAMPUS EVENT HUB
   Student Dashboard
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       CHECK LOGIN
    ========================== */

    const currentUser = getCurrentUser();

    if (!currentUser) {

        window.location.href = "login.html";

        return;

    }

    /* ==========================
       DISPLAY USER NAME
    ========================== */

    const welcomeUser = document.getElementById("welcomeUser");

    if (welcomeUser) {

        welcomeUser.textContent =
            `Welcome, ${currentUser.fullName}`;

    }

    /* ==========================
       LOAD STATISTICS
    ========================== */

    loadStatistics();

    /* ==========================
       LOAD EVENTS
    ========================== */

    loadUpcomingEvents();

    /* ==========================
       LOGOUT
    ========================== */

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", function (e) {

            e.preventDefault();

            logoutUser();

            window.location.href = "login.html";

        });

    }

});


/* ==========================================
   LOAD DASHBOARD STATISTICS
========================================== */

function loadStatistics() {

    const user = getCurrentUser();

    const registrations = getRegistrations();

    const favorites = getFavorites();

    const reviews = getReviews();

    const registeredCount = registrations.filter(

        registration => registration.userId === user.id

    ).length;

    const favoriteCount = favorites.filter(

        favorite => favorite.userId === user.id

    ).length;

    const reviewCount = reviews.filter(

        review => review.userId === user.id

    ).length;

    document.getElementById("registeredCount").textContent =
        registeredCount;

    document.getElementById("favoriteCount").textContent =
        favoriteCount;

    document.getElementById("reviewCount").textContent =
        reviewCount;

}


/* ==========================================
   LOAD UPCOMING EVENTS
========================================== */

function loadUpcomingEvents() {

    const eventContainer =
        document.getElementById("upcomingEvents");

    if (!eventContainer) return;

    const events = getEvents();

    eventContainer.innerHTML = "";

    events.slice(0, 4).forEach(event => {

        eventContainer.innerHTML += `

        <div class="event-card">

            <img src="${event.image}"
                 alt="${event.title}">

            <div class="event-content">

                <h3>${event.title}</h3>

                <p>

                    <strong>Category:</strong>

                    ${event.category}

                </p>

                <p>

                    <strong>Date:</strong>

                    ${event.date}

                </p>

                <p>

                    <strong>Location:</strong>

                    ${event.location}

                </p>

                <p>

                    <strong>Seats:</strong>

                    ${event.registered}/${event.seats}

                </p>

                <a href="event-details.html?id=${event.id}"

                   class="btn-primary">

                    View Details

                </a>

            </div>

        </div>

        `;

    });

}

console.log("Dashboard Loaded Successfully");