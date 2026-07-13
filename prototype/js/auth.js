/* ==========================================
   SMART CAMPUS EVENT HUB
   Authentication System
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       SIGN UP
    ========================== */

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();

            const studentId = document.getElementById("studentId").value.trim();

            const faculty = document.getElementById("faculty").value;

            const email = document.getElementById("email").value.trim().toLowerCase();

            const phone = document.getElementById("phone").value.trim();

            const password = document.getElementById("password").value;

            const confirmPassword = document.getElementById("confirmPassword").value;

            if (
                !fullName ||
                !studentId ||
                !faculty ||
                !email ||
                !phone ||
                !password ||
                !confirmPassword
            ) {

                alert("Please fill in all fields.");

                return;

            }

            if (password !== confirmPassword) {

                alert("Passwords do not match.");

                return;

            }

            if (password.length < 6) {

                alert("Password must be at least 6 characters.");

                return;

            }

            const users = getUsers();

            const emailExists = users.some(user => user.email === email);

            if (emailExists) {

                alert("Email already exists.");

                return;

            }

            const studentExists = users.some(user => user.studentId === studentId);

            if (studentExists) {

                alert("Student ID already exists.");

                return;

            }

            const newUser = {

                id: Date.now(),

                fullName,

                studentId,

                faculty,

                email,

                phone,

                password,

                role: "student"

            };

            users.push(newUser);

            saveUsers(users);

            alert("Account created successfully.");

            window.location.href = "login.html";

        });

    }

    /* ==========================
       LOGIN
    ========================== */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const email = document.getElementById("email").value.trim().toLowerCase();

            const password = document.getElementById("password").value;

            const users = getUsers();

            const user = users.find(

                user =>

                user.email === email &&

                user.password === password

            );

            if (!user) {

                alert("Invalid email or password.");

                return;

            }

            setCurrentUser(user);

            if (user.role === "admin") {

                window.location.href = "admin/dashboard.html";

            }

            else {

                window.location.href = "dashboard.html";

            }

        });

    }

});