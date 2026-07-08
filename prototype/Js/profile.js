/* ==========================================
   PROFILE PAGE
   Smart Campus Event Hub
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
// Load User Information
// ==========================

document.getElementById("fullname").value = currentUser.fullname;
document.getElementById("studentid").value = currentUser.studentid;
document.getElementById("email").value = currentUser.email;
document.getElementById("phone").value = currentUser.phone;
document.getElementById("faculty").value = currentUser.faculty;

// ==========================
// Profile Picture Preview
// ==========================

const profileImage =
document.getElementById("profileImage");

const preview =
document.getElementById("profilePreview");

const savedImage =
localStorage.getItem("profileImage");

if(savedImage){

    preview.src = savedImage;

}

profileImage.addEventListener("change",function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            preview.src = e.target.result;

            localStorage.setItem(
                "profileImage",
                e.target.result
            );

        };

        reader.readAsDataURL(file);

    }

});

// ==========================
// Save Profile
// ==========================

const profileForm =
document.getElementById("profileForm");

profileForm.addEventListener("submit",function(e){

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    const newPassword =
    document.getElementById("newPassword").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;

    // Email Validation

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email.");

        return;

    }

    // Phone Validation

    if(phone.length < 9){

        alert("Please enter a valid phone number.");

        return;

    }

    // Password Validation

    if(newPassword !== ""){

        if(newPassword.length < 6){

            alert("Password must be at least 6 characters.");

            return;

        }

        if(newPassword !== confirmPassword){

            alert("Passwords do not match.");

            return;

        }

        currentUser.password = newPassword;

    }

    // Update User

    currentUser.fullname = fullname;
    currentUser.email = email;
    currentUser.phone = phone;

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );

    localStorage.setItem(
        "user",
        JSON.stringify(currentUser)
    );

    alert("Profile updated successfully!");

});

// ==========================
// Phone Numbers Only
// ==========================

const phoneInput =
document.getElementById("phone");

phoneInput.addEventListener("input",function(){

    this.value =
    this.value.replace(/[^0-9]/g,"");

});

// ==========================
// Auto Focus
// ==========================

window.onload = function(){

    document.getElementById("fullname").focus();

};

// ==========================
// Console
// ==========================

console.log("Profile Page Loaded Successfully");