/* ==========================================
   SMART CAMPUS EVENT HUB
   FAVORITES.JS
========================================== */


document.addEventListener("DOMContentLoaded", () => {

    loadFavorites();

});



/* ==========================================
   LOAD FAVORITES
========================================== */


function loadFavorites(){


    const container =
    document.getElementById("favoritesContainer");



    if(!container) return;



    let favorites =
    getFavorites();



    // Convert IDs to numbers
    favorites =
    favorites.map(Number);




    let events =
    getEvents();




    container.innerHTML = "";




    if(favorites.length === 0){


        container.innerHTML = `


        <div class="no-events">


            <h2>
            No Favorite Events
            </h2>


            <p>
            You haven't added any favorite events yet.
            </p>


        </div>


        `;


        return;


    }




    favorites.forEach(id => {



        const event =
        events.find(
            e => Number(e.id) === Number(id)
        );



        if(!event) return;




        let progress =
        (event.registered / event.seats) * 100;




        let registered =
        getRegisteredEvents()
        .map(Number)
        .includes(
            Number(event.id)
        );




        container.innerHTML += `



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
                    registered

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

                    onclick="registerFromFavorites(${event.id})">


                    Register


                    </button>


                    `

                }





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



    eventId =
    Number(eventId);



    let favorites =
    getFavorites();



    favorites =
    favorites
    .map(Number)
    .filter(
        id => id !== eventId
    );



    saveFavorites(
        favorites
    );



    loadFavorites();



}







/* ==========================================
   REGISTER FROM FAVORITES
========================================== */


function registerFromFavorites(id){



    id =
    Number(id);



    let registered =
    getRegisteredEvents();



    registered =
    registered.map(Number);




    if(
        registered.includes(id)
    ){


        alert(
        "Already Registered."
        );


        return;


    }





    registered.push(id);



    saveRegisteredEvents(
        registered
    );




    let events =
    getEvents();




    events =
    events.map(event=>{


        if(
            event.id === id
            &&
            event.registered < event.seats
        ){


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



    loadFavorites();



}
