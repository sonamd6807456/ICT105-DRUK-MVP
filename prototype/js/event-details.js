/* ==========================================
   SMART CAMPUS EVENT HUB
   EVENT DETAILS
========================================== */

const eventDetails = document.getElementById("eventDetails");
const params = new URLSearchParams(window.location.search);
const eventId = Number(params.get("id"));
const selectedEvent = getEvents().find(event=>event.id===eventId);

if(!selectedEvent){

    eventDetails.innerHTML = `
        <div class="no-events">
            <h2>Event Not Found</h2>
            <p>Please return to the events page and choose another event.</p>
            <a href="events.html" class="btn-primary">Back to Events</a>
        </div>
    `;

}
else{

    let progress = (selectedEvent.registered / selectedEvent.seats) * 100;

    eventDetails.innerHTML = `
        <div class="event-card event-detail-card">
            <img
                src="${selectedEvent.image}"
                alt="${selectedEvent.title}"
                onerror="this.onerror=null; this.src='images/techfest.jpg';">

            <div class="event-content">
                <span class="event-category">${selectedEvent.category}</span>
                <h3>${selectedEvent.title}</h3>
                <p><i class="fa-solid fa-calendar"></i> ${selectedEvent.date}</p>
                <p><i class="fa-solid fa-location-dot"></i> ${selectedEvent.location}</p>
                <p>${selectedEvent.description}</p>

                <div class="progress">
                    <div class="progress-bar" style="width:${progress}%"></div>
                </div>

                <p>${selectedEvent.registered} / ${selectedEvent.seats} Participants</p>

                <div class="event-buttons">
                    <button class="btn-primary" onclick="registerEvent()">Register Now</button>
                    <a href="events.html" class="favorite-btn">Back to Events</a>
                </div>
            </div>
        </div>
    `;

}

function registerEvent(){

    if(!selectedEvent){
        return;
    }

    if(selectedEvent.registered >= selectedEvent.seats){
        alert("Sorry, this event is full.");
        return;
    }

    let events = getEvents();
    let updatedEvents = events.map(event=>{

        if(event.id === selectedEvent.id){

            return {
                ...event,
                registered:event.registered + 1
            };

        }

        return event;

    });

    saveEvents(updatedEvents);
    alert("Registration successful!");
    window.location.reload();

}
