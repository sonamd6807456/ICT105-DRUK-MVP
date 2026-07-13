/* ==========================================
   SMART CAMPUS EVENT HUB
   STORAGE.JS
========================================== */


/* ==========================================
   USERS
========================================== */

function getUsers(){
    return JSON.parse(localStorage.getItem("users")) || [];
}


function saveUsers(users){
    localStorage.setItem("users", JSON.stringify(users));
}


/* ==========================================
   CURRENT USER
========================================== */

function getCurrentUser(){

    return JSON.parse(
        localStorage.getItem("currentUser")
    );

}


function setCurrentUser(user){

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

}


/* ==========================================
   EVENTS
========================================== */


const defaultEvents = [

{
    id:1,
    title:"AI Innovation Workshop",
    category:"Workshop",
    image:"images/ai.webp",
    date:"August 15, 2026",
    location:"ICT Auditorium",
    description:
    "Learn about Artificial Intelligence, machine learning and future technology.",
    seats:500,
    registered:320
},


{
    id:2,
    title:"Programming Competition",
    category:"Competition",
    image:"images/techfest.jpg",
    date:"August 20, 2026",
    location:"Computer Laboratory",
    description:
    "Compete with students and test your programming skills.",
    seats:200,
    registered:150
},


{
    id:3,
    title:"Campus Career Fair",
    category:"Career",
    image:"images/career.webp",
    date:"September 5, 2026",
    location:"Main Hall",
    description:
    "Meet companies and explore career opportunities.",
    seats:600,
    registered:420
},


{
    id:4,
    title:"Basketball Championship",
    category:"Sports",
    image:"images/sports.jpg",
    date:"September 10, 2026",
    location:"Sports Complex",
    description:
    "Join the biggest sports competition on campus.",
    seats:300,
    registered:210
},


{
    id:5,
    title:"Campus Music Festival",
    category:"Entertainment",
    image:"images/music.jpg",
    date:"September 20, 2026",
    location:"Open Ground",
    description:
    "Enjoy music, performances and entertainment activities.",
    seats:1000,
    registered:800
}

];

const defaultEventImages = {
    1:"images/ai.webp",
    2:"images/techfest.jpg",
    3:"images/career.webp",
    4:"images/sports.jpg",
    5:"images/music.jpg"
};



function getEvents(){

    let events =
    JSON.parse(localStorage.getItem("events"));


    if(!events){

        localStorage.setItem(
            "events",
            JSON.stringify(defaultEvents)
        );

        events = defaultEvents;

    }
    else{

        let updated = false;

        events = events.map(event=>{

            if(
                defaultEventImages[event.id] &&
                (!event.image || event.image.startsWith("http"))
            ){

                updated = true;

                return {
                    ...event,
                    image:defaultEventImages[event.id]
                };

            }

            return event;

        });

        if(updated){

            saveEvents(events);

        }

    }


    return events;

}



function saveEvents(events){

    localStorage.setItem(
        "events",
        JSON.stringify(events)
    );

}



/* ==========================================
   FAVORITES
========================================== */


function getFavorites(){

    return JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

}



function saveFavorites(favorites){

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}
