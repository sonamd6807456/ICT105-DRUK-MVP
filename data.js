/* ==========================================
   SMART CAMPUS EVENT HUB
   EVENTS.JS
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const eventContainer = document.getElementById("eventContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");


let events = getEvents();



/* ==========================================
   DISPLAY EVENTS
========================================== */

function displayEvents(eventList){


    eventContainer.innerHTML = "";



    if(eventList.length === 0){


        eventContainer.innerHTML = `

        <div class="no-events">

            <h2>No Events Found</h2>

            <p>
            Try another search or category.
            </p>

        </div>

        `;


        return;

    }




    let registeredEvents = getRegisteredEvents();

    registeredEvents = registeredEvents.map(Number);




    eventList.forEach(event => {



        let favoriteStatus =
        isFavorite(event.id);



        let registeredStatus =
        registeredEvents.includes(
            Number(event.id)
        );



        let progress =
        (event.registered / event.seats) * 100;



        eventContainer.innerHTML += `


        <div class="event-card">


            <img

            src="${event.image}"

            alt="${event.title}"

            onerror="this.src='images/techfest.jpg'">



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



                <p>

                ${event.description}

                </p>




                <div class="progress">


                    <div

                    class="progress-bar"

                    style="width:${progress}%">

                    </div>


                </div>



                <p>

                ${event.registered}
                /
                ${event.seats}
                Participants

                </p>




                <div class="event-buttons">



                ${
                    registeredStatus

                    ?

                    `

                    <button

                    class="btn-primary"

                    disabled>

                    Registered ✓

                    </button>

                    `


                    :


                    `

                    <button

                    class="btn-primary"

                    onclick="registerEvent(${event.id})">

                    Register

                    </button>

                    `

                }




               <button

                 class="btn-primary favorite-btn"

                  onclick="toggleFavorite(${event.id})">

                ${
                    favoriteStatus

                    ?

                    " Favorited"

                    :

                    "Favorite"

                }


                </button>



                </div>



            </div>


        </div>



        `;



    });



}




/* ==========================================
   FAVORITE SYSTEM
========================================== */


function isFavorite(id){


    let favorites = getFavorites();



    favorites = favorites.map(Number);



    return favorites.includes(
        Number(id)
    );


}




function toggleFavorite(id){


    id = Number(id);



    let favorites = getFavorites();



    favorites = favorites.map(Number);




    if(
        favorites.includes(id)
    ){


        favorites =
        favorites.filter(
            item => item !== id
        );


        alert(
        "Removed from Favorites"
        );


    }

    else{


        favorites.push(id);


        alert(
        "Added to Favorites"
        );


    }



    saveFavorites(
        favorites
    );



    displayEvents(events);


}



function registerEvent(id) {

    id = Number(id);

    const currentUser = getCurrentUser();

    if (!currentUser) {

        alert(
            "Please login before registering for an event."
        );

        return;

    }


    let registrations =
        getRegistrations();


    const alreadyRegistered =
        registrations.some(
            registration =>
                registration.userId === currentUser.id &&
                registration.eventId === id
        );


    if (alreadyRegistered) {

        alert(
            "You have already registered for this event."
        );

        return;

    }


    const event =
        events.find(
            event => event.id === id
        );


    if (!event) {

        alert(
            "Event not found."
        );

        return;

    }


    if (
        event.registered >= event.seats
    ) {

        alert(
            "This event is already full."
        );

        return;

    }


    const registration = {

        userId:
            currentUser.id,

        userName:
            currentUser.name,

        studentId:
            currentUser.studentId,

        email:
            currentUser.email,

        eventId:
            event.id,

        eventTitle:
            event.title,

        registrationDate:
            new Date().toLocaleDateString()

    };


    registrations.push(
        registration
    );


    saveRegistrations(
        registrations
    );


    events =
        events.map(event => {

            if (
                event.id === id
            ) {

                event.registered++;

            }

            return event;

        });


    saveEvents(
        events
    );


    alert(
        "Registration Successful!"
    );


    displayEvents(
        events
    );

}
