/* ==========================================
   REVIEWS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const currentUser = getCurrentUser();

    if (!currentUser) {

        window.location.href = "login.html";

        return;

    }

    loadEvents();

    loadReviews();

    document.getElementById("reviewForm")
            .addEventListener("submit", saveReview);

});

/* ==========================
   LOAD EVENTS
========================== */

function loadEvents(){

    const events = getEvents();

    const select = document.getElementById("eventSelect");

    events.forEach(event=>{

        select.innerHTML +=

        `<option value="${event.id}">

            ${event.title}

        </option>`;

    });

}

/* ==========================
   SAVE REVIEW
========================== */

function saveReview(e){

    e.preventDefault();

    const currentUser = getCurrentUser();

    const reviews = getReviews();

    reviews.push({

        id:Date.now(),

        userId:currentUser.id,

        user:currentUser.fullName,

        eventId:Number(document.getElementById("eventSelect").value),

        rating:document.getElementById("rating").value,

        comment:document.getElementById("comment").value

    });

    saveReviews(reviews);

    alert("Review Submitted Successfully");

    document.getElementById("reviewForm").reset();

    loadReviews();

}

/* ==========================
   LOAD REVIEWS
========================== */

function loadReviews(){

    const reviews = getReviews();

    const events = getEvents();

    const container = document.getElementById("reviewList");

    container.innerHTML = "";

    reviews.reverse().forEach(review=>{

        const event = events.find(

            event=>event.id===review.eventId

        );

        container.innerHTML +=

        `
        <div class="review-card">

            <h3>

                ${review.user}

            </h3>

            <p>

                <strong>Event:</strong>

                ${event.title}

            </p>

            <p>

                <span>

                    ${"★".repeat(review.rating)}

                </span>

            </p>

            <p>

                ${review.comment}

            </p>

        </div>
        `;

    });

}