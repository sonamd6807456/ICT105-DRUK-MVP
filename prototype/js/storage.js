/* ==========================================
   SMART CAMPUS EVENT HUB
   STORAGE.JS
========================================== */


/* ==========================================
   USERS
========================================== */

function getUsers() {

    return JSON.parse(
        localStorage.getItem("users")
    ) || [];

}


function saveUsers(users) {

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}



/* ==========================================
   CURRENT USER
========================================== */

function getCurrentUser() {

    return JSON.parse(
        localStorage.getItem("currentUser")
    );

}


function setCurrentUser(user) {

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

}



/* ==========================================
   DEFAULT EVENTS
========================================== */

const defaultEvents = [

{
    id: 1,
    title: "AI Innovation Workshop",
    category: "Workshop",
    image: "images/ai.webp",
    date: "August 15, 2026",
    location: "ICT Auditorium",
    description:
    "Learn about Artificial Intelligence, Machine Learning and future technology.",
    seats: 500,
    registered: 320
},


{
    id: 2,
    title: "Programming Competition",
    category: "Competition",
    image: "images/techfest.jpg",
    date: "August 20, 2026",
    location: "Computer Laboratory",
    description:
    "Compete with students and test your programming skills.",
    seats: 200,
    registered: 150
},


{
    id: 3,
    title: "Campus Career Fair",
    category: "Career",
    image: "images/career.webp",
    date: "September 5, 2026",
    location: "Main Hall",
    description:
    "Meet companies and explore internship and career opportunities.",
    seats: 600,
    registered: 420
},


{
    id: 4,
    title: "Basketball Championship",
    category: "Sports",
    image: "images/sports.jpg",
    date: "September 10, 2026",
    location: "Sports Complex",
    description:
    "Join the biggest sports competition on campus.",
    seats: 300,
    registered: 210
},


{
    id: 5,
    title: "Campus Music Festival",
    category: "Entertainment",
    image: "images/music.jpg",
    date: "September 20, 2026",
    location: "Open Ground",
    description:
    "Enjoy music performances and entertainment activities.",
    seats: 1000,
    registered: 800
}

];



/* ==========================================
   EVENTS STORAGE
========================================== */


function getEvents() {


    let events = JSON.parse(
        localStorage.getItem("events")
    );


    if(!events) {

        events = defaultEvents;


        localStorage.setItem(
            "events",
            JSON.stringify(events)
        );

    }


    return events;

}



function saveEvents(events) {

    localStorage.setItem(
        "events",
        JSON.stringify(events)
    );

}




/* ==========================================
   FAVORITES STORAGE
========================================== */


function getFavorites() {


    return JSON.parse(
        localStorage.getItem("favorites")
    ) || [];


}



function saveFavorites(favorites) {

    console.log("Saving favorites:", favorites);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}




// ADD FAVORITE

function addFavorite(eventId) {


    let favorites = getFavorites();


    eventId = Number(eventId);


    if(!favorites.includes(eventId)) {

        favorites.push(eventId);

    }


    saveFavorites(favorites);


}




// REMOVE FAVORITE

function removeFavorite(eventId) {


    let favorites = getFavorites();


    eventId = Number(eventId);


    favorites = favorites.filter(
        id => id !== eventId
    );


    saveFavorites(favorites);


}




// CHECK FAVORITE

function isFavorite(eventId) {


    let favorites = getFavorites();


    return favorites.includes(
        Number(eventId)
    );


}




// TOGGLE FAVORITE

function toggleFavorite(eventId) {


    if(isFavorite(eventId)) {


        removeFavorite(eventId);


        alert(
            "Removed from favorites"
        );


    }

    else {


        addFavorite(eventId);


        alert(
            "Added to favorites"
        );


    }


}





/* ==========================================
   REGISTERED EVENTS
========================================== */


function getRegisteredEvents() {


    return JSON.parse(
        localStorage.getItem("registeredEvents")
    ) || [];


}



function saveRegisteredEvents(events) {


    localStorage.setItem(
        "registeredEvents",
        JSON.stringify(events)
    );


}





/* ==========================================
   RESET STORAGE
========================================== */


function resetStorage() {


    localStorage.removeItem("events");

    localStorage.removeItem("favorites");

    localStorage.removeItem("registeredEvents");


    localStorage.setItem(
        "events",
        JSON.stringify(defaultEvents)
    );


    alert(
        "Storage Reset Successfully"
    );

}
