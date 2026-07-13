/* ==========================================
   FAVORITES PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadFavorites();

});

/* ==========================================
   LOAD FAVORITES
========================================== */

function loadFavorites(){

    const currentUser = getCurrentUser();

    if(!currentUser){

        window.location.href = "login.html";

        return;

    }

    const favorites = getFavorites();

    const events = getEvents();

    const container = document.getElementById("favoritesContainer");

    container.innerHTML = "";

    const myFavorites = favorites.filter(

        favorite => favorite.userId === currentUser.id

    );

    if(myFavorites.length === 0){

        container.innerHTML =

        `
        <div class="no-events">

            <h2>No Favorite Events</h2>

            <p>

                Start adding events to your favorites.

            </p>

        </div>
        `;

        return;

    }

    myFavorites.forEach(item=>{

        const event = events.find(

            event=>event.id===item.eventId

        );

        if(!event) return;

        const percentage =

        (event.registered/event.seats)*100;

        container.innerHTML +=

        `
        <div class="event-card">

            <img src="${event.image}" alt="${event.title}">

            <div class="event-content">

                <span class="event-category">

                    ${event.category}

                </span>

                <h3>

                    ${event.title}

                </h3>

                <p>

                    <strong>Date:</strong>

                    ${event.date}

                </p>

                <p>

                    <strong>Location:</strong>

                    ${event.location}

                </p>

                <div class="progress">

                    <div class="progress-bar"

                    style="width:${percentage}%">

                    </div>

                </div>

                <div class="event-buttons">

                    <a

                    href="event-details.html?id=${event.id}"

                    class="btn-primary">

                    Details

                    </a>

                    <button

                    class="favorite-btn"

                    onclick="removeFavorite(${event.id})">

                    Remove

                    </button>

                </div>

            </div>

        </div>
        `;

    });

}

/* ==========================================
   REMOVE FAVORITE
========================================== */

function removeFavorite(eventId){

    const currentUser = getCurrentUser();

    let favorites = getFavorites();

    favorites = favorites.filter(item=>!(

        item.userId===currentUser.id &&

        item.eventId===eventId

    ));

    saveFavorites(favorites);

    loadFavorites();

}