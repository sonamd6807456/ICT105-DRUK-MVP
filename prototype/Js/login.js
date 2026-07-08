/* ==========================================
   LOGIN PAGE
   Smart Campus Event Hub
========================================== */

// ===========================
// Mobile Navigation
// ===========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===========================
// Show / Hide Password
// ===========================

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if(passwordInput.type === "password"){

        passwordInput.type = "text";
        togglePassword.textContent = "🙈";

    }else{

        passwordInput.type = "password";
        togglePassword.textContent = "👁";

    }

});

// ===========================
// Remember Me
// ===========================

const emailInput = document.getElementById("email");
const remember = document.getElementById("remember");

window.addEventListener("load",()=>{

    const savedEmail = localStorage.getItem("rememberEmail");

    if(savedEmail){

        emailInput.value = savedEmail;
        remember.checked = true;

    }

});

// ===========================
// Login Validation
// ===========================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit",function(e){

    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Get registered user

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){

        alert("No account found. Please sign up first.");

        return;

    }

    if(email === user.email && password === user.password){

        // Save current login

        localStorage.setItem("loggedIn","true");

        localStorage.setItem("currentUser",JSON.stringify(user));

        if(remember.checked){

            localStorage.setItem("rememberEmail",email);

        }else{

            localStorage.removeItem("rememberEmail");

        }

        alert("Login Successful!");

        window.location.href="dashboard.html";

    }

    else{

        alert("Incorrect Email or Password.");

    }

});

// ===========================
// Email Validation
// ===========================

emailInput.addEventListener("blur",()=>{

    const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailInput.value!=="" &&
       !pattern.test(emailInput.value)){

        alert("Please enter a valid email address.");

    }

});

// ===========================
// Password Validation
// ===========================

passwordInput.addEventListener("blur",()=>{

    if(passwordInput.value.length < 6){

        alert("Password must be at least 6 characters.");

    }

});

// ===========================
// Auto Focus
// ===========================

window.onload = function(){

    emailInput.focus();

};

// ===========================
// Console
// ===========================

console.log("Login Page Loaded Successfully");