/* ==========================================
   ADMIN REVIEW MANAGEMENT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadReviews();

});

/* ==========================================
   LOAD REVIEWS
========================================== */

function loadReviews(){

    const reviews = getReviews();

    const events = getEvents();

    const table = document.getElementById("reviewTable");

    table.innerHTML = "";

    if(reviews.length === 0){

        table.innerHTML =

        `
        <tr>

            <td colspan="5">

                No reviews available.

            </td>

        </tr>
        `;

        return;

    }

    reviews.forEach(review=>{

        const event = events.find(

            event=>event.id===review.eventId

        );

        table.innerHTML +=

        `
        <tr>

            <td>

                ${review.user}

            </td>

            <td>

                ${event ? event.title : "Unknown Event"}

            </td>

            <td>

                ${review.rating}/5

            </td>

            <td>

                ${review.comment}

            </td>

            <td>

                <button

                class="btn-delete"

                onclick="deleteReview(${review.id})">

                Delete

                </button>

            </td>

        </tr>

        `;

    });

}

/* ==========================================
   DELETE REVIEW
========================================== */

function deleteReview(id){

    if(!confirm("Delete this review?")){

        return;

    }

    let reviews = getReviews();

    reviews = reviews.filter(

        review => review.id !== id

    );

    saveReviews(reviews);

    loadReviews();

}