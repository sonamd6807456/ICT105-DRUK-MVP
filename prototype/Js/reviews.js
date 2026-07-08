/* ==========================================
   Smart Campus Event Hub
   Reviews JavaScript
========================================== */

// ==========================
// Mobile Navigation
// ==========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==========================
// Check Login
// ==========================

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
    alert("Please login first.");
    window.location.href = "login.html";
}

// ==========================
// Star Rating
// ==========================

const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");

stars.forEach(star => {

    star.addEventListener("click", () => {

        const value = star.dataset.value;

        ratingInput.value = value;

        stars.forEach(s => {

            if(s.dataset.value <= value){

                s.classList.add("active");

            }else{

                s.classList.remove("active");

            }

        });

    });

});

// ==========================
// Load Reviews
// ==========================

let reviews =
JSON.parse(localStorage.getItem("reviews")) || [];

const reviewList =
document.getElementById("reviewList");

function displayReviews(){

    reviewList.innerHTML = "";

    if(reviews.length===0){

        reviewList.innerHTML = `

        <div class="review-item">

        <h3>No Reviews Yet</h3>

        <p>Be the first student to review an event.</p>

        </div>

        `;

        return;

    }

    reviews.forEach((review,index)=>{

        reviewList.innerHTML += `

        <div class="review-item">

            <h3>${review.event}</h3>

            <p><strong>${review.student}</strong></p>

            <div class="rating">
                ${"⭐".repeat(review.rating)}
            </div>

            <p>${review.comment}</p>

            <p><small>${review.date}</small></p>

            ${
                review.email === currentUser.email
                ?

                `<button
                class="delete-btn"
                onclick="deleteReview(${index})">

                Delete

                </button>`

                :

                ""

            }

        </div>

        `;

    });

}

displayReviews();

// ==========================
// Submit Review
// ==========================

const reviewForm =
document.getElementById("reviewForm");

reviewForm.addEventListener("submit",function(e){

    e.preventDefault();

    const event =
    document.getElementById("eventName").value;

    const rating =
    Number(ratingInput.value);

    const comment =
    document.getElementById("comment").value.trim();

    if(rating===0){

        alert("Please select a rating.");

        return;

    }

    if(comment===""){

        alert("Please write your review.");

        return;

    }

    const review={

        student:currentUser.fullname,

        email:currentUser.email,

        event,

        rating,

        comment,

        date:new Date().toLocaleDateString()

    };

    reviews.push(review);

    localStorage.setItem(

        "reviews",

        JSON.stringify(reviews)

    );

    reviewForm.reset();

    ratingInput.value=0;

    stars.forEach(star=>{

        star.classList.remove("active");

    });

    displayReviews();

    alert("Review submitted successfully!");

});

// ==========================
// Delete Review
// ==========================

function deleteReview(index){

    if(confirm("Delete this review?")){

        reviews.splice(index,1);

        localStorage.setItem(

            "reviews",

            JSON.stringify(reviews)

        );

        displayReviews();

    }

}

// ==========================
// Average Rating
// ==========================

function averageRating(){

    if(reviews.length===0){

        console.log("Average Rating: 0");

        return;

    }

    let total=0;

    reviews.forEach(review=>{

        total+=review.rating;

    });

    const average=(total/reviews.length).toFixed(1);

    console.log("Average Rating:",average);

}

averageRating();

// ==========================
// Console
// ==========================

console.log("Reviews Page Loaded Successfully");