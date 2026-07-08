/* ==========================================
   SIGNUP PAGE
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
// Show Password
// ==========================

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";
        togglePassword.textContent = "";

    }else{

        password.type = "password";
        togglePassword.textContent = "";

    }

});

toggleConfirm.addEventListener("click", () => {

    if(confirmPassword.type === "password"){

        confirmPassword.type = "text";
        toggleConfirm.textContent = "";

    }else{

        confirmPassword.type = "password";
        toggleConfirm.textContent = "";

    }

});

// ==========================
// Signup
// ==========================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit",function(e){

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value.trim();

    const studentid =
    document.getElementById("studentid").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    const faculty =
    document.getElementById("faculty").value;

    const pass =
    password.value;

    const confirm =
    confirmPassword.value;

    const agree =
    document.getElementById("agree").checked;

    // Empty Validation

    if(
        fullname===""||
        studentid===""||
        email===""||
        phone===""
    ){

        alert("Please fill all required fields.");

        return;

    }

    // Terms

    if(!agree){

        alert("Please accept the Terms & Conditions.");

        return;

    }

    // Password Match

    if(pass!==confirm){

        alert("Passwords do not match.");

        return;

    }

    // Password Length

    if(pass.length<6){

        alert("Password should be at least 6 characters.");

        return;

    }

    // Check Existing User

    const existingUser =
    JSON.parse(localStorage.getItem("user"));

    if(existingUser && existingUser.email===email){

        alert("An account with this email already exists.");

        return;

    }

    // User Object

    const user={

        fullname,
        studentid,
        email,
        phone,
        faculty,
        password:pass

    };

    localStorage.setItem(

        "user",

        JSON.stringify(user)

    );

    alert("Account Created Successfully!");

    window.location.href="login.html";

});

// ==========================
// Email Validation
// ==========================

const emailInput =
document.getElementById("email");

emailInput.addEventListener("blur",()=>{

    const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailInput.value!=="" &&
       !pattern.test(emailInput.value)){

        alert("Invalid Email Address.");

    }

});

// ==========================
// Student ID
// ==========================

const studentInput =
document.getElementById("studentid");

studentInput.addEventListener("input",function(){

    if(this.value.length>10){

        this.value=this.value.substring(0,10);

    }

});

// ==========================
// Phone Number
// ==========================

const phoneInput =
document.getElementById("phone");

phoneInput.addEventListener("input",function(){

    this.value=
    this.value.replace(/[^0-9]/g,'');

});

// ==========================
// Password Strength
// ==========================

password.addEventListener("keyup",()=>{

    if(password.value.length>=6){

        password.style.borderColor="green";

    }

    else{

        password.style.borderColor="red";

    }

});

// ==========================
// Auto Focus
// ==========================

window.onload=()=>{

    document.getElementById("fullname").focus();

};

// ==========================
// Console
// ==========================

console.log("Signup Page Loaded Successfully");