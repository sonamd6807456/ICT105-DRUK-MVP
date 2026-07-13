/* ==========================================
   CONTACT FORM
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", sendMessage);

});

function sendMessage(e){

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();

    if(
        !name ||
        !email ||
        !subject ||
        !message
    ){

        alert("Please complete all fields.");

        return;

    }

    alert("Thank you! Your message has been sent.");

    document.getElementById("contactForm").reset();

}

console.log("Contact Page Loaded");