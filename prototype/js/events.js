/* ==========================================
   SMART CAMPUS EVENT HUB
   EVENTS.JS
========================================== */


const eventContainer =
document.getElementById("eventContainer");


const searchInput =
document.getElementById("searchInput");


const categoryFilter =
document.getElementById("categoryFilter");



let events = getEvents();



/* ==========================================
   DISPLAY EVENTS
========================================== */


function displayEvents(eventList){


    eventContainer.innerHTML="";


    if(eventList.length===0){

        eventContainer.innerHTML=`

        <div class="no-events">

            <h2>No Events Found</h2>

            <p>
            Try another search or category.
            </p>

        </div>

        `;

        return;

    }



    eventList.forEach(event=>{


        let progress =
        (event.registered/event.seats)*100;



        eventContainer.innerHTML += `


        <div class="event-card">


            <img 
            src="${event.image}"
            alt="${event.title}"
            onerror="this.onerror=null; this.src='images/techfest.jpg';">


            <div class="event-content">


                <span class="event-category">

                ${event.category}

                </span>



                <h3>
                ${event.title}
                </h3>



                <p>
                📅 ${event.date}
                </p>


                <p>
                📍 ${event.location}
                </p>


                <p>
                ${event.description}
                </p>



                <div class="progress">


                    <div class="progress-bar"
                    style="width:${progress}%">
                    
                    </div>


                </div>


                <p>
                ${event.registered}
                / ${event.seats} Participants
                </p>



                <div class="event-buttons">


                    <a href="event-details.html?id=${event.id}"
                    class="btn-primary">

                    Register

                    </a>



                    <button
                    class="favorite-btn"
                    onclick="addFavorite(${event.id})">

                    ❤️ Favorite

                    </button>


                </div>


            </div>


        </div>


        `;


    });


}




/* ==========================================
   SEARCH + FILTER
========================================== */


function filterEvents(){


    let search =
    searchInput.value.toLowerCase();


    let category =
    categoryFilter.value;



    let filtered =
    events.filter(event=>{


        let matchSearch =
        event.title.toLowerCase()
        .includes(search);



        let matchCategory =
        category==="all" ||
        event.category===category;



        return matchSearch && matchCategory;


    });



    displayEvents(filtered);


}




searchInput.addEventListener(
"input",
filterEvents
);



categoryFilter.addEventListener(
"change",
filterEvents
);



/* ==========================================
   FAVORITE SYSTEM
========================================== */


function addFavorite(id){


    let favorites =
    getFavorites();



    if(!favorites.includes(id)){


        favorites.push(id);


        saveFavorites(favorites);


        alert("Added to Favorites");


    }

    else{


        alert("Already in Favorites");


    }

}




displayEvents(events);
