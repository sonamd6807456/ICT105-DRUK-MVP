/* ==========================================
   SIGNUP PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", registerUser);

});

/* ==========================================
   REGISTER USER
========================================== */

function registerUser(e){

    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();

    const studentId = document.getElementById("studentId").value.trim();

    const faculty = document.getElementById("faculty").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if(password !== confirmPassword){

        showToast("Passwords do not match.","error");

        return;

    }

    let users = getUsers();

    const emailExists = users.some(user => user.email === email);

    if(emailExists){

        showToast("Email already exists.","warning");

        return;

    }

    const studentExists = users.some(user => user.studentId === studentId);

    if(studentExists){

        showToast("Student ID already exists.","warning");

        return;

    }

    const user = {

        id: Date.now(),

        fullName,

        studentId,

        faculty,

        email,

        password,

        role: "student"

    };

    users.push(user);

    saveUsers(users);

    showToast("Account created successfully!","success");

    setTimeout(() => {

        window.location.href = "login.html";

    },1500);

}