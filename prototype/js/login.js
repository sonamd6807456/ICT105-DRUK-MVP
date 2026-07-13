/* ==========================================
   LOGIN PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("remember");
    const togglePassword = document.getElementById("togglePassword");

    /* ==========================
       SHOW / HIDE PASSWORD
    ========================== */

    togglePassword.addEventListener("click", () => {

        if(passwordInput.type === "password"){

            passwordInput.type = "text";
            togglePassword.textContent = "Hide";

        }else{

            passwordInput.type = "password";
            togglePassword.textContent = "Show";

        }

    });

    /* ==========================
       REMEMBER EMAIL
    ========================== */

    const savedEmail = localStorage.getItem("rememberEmail");

    if(savedEmail){

        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;

    }

    /* ==========================
       LOGIN
    ========================== */

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const users = getUsers();

        const user = users.find(user =>

            user.email === email &&
            user.password === password

        );

        if(!user){

            showToast("Incorrect email or password.","error");
            return;

        }

        localStorage.setItem("loggedIn","true");

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        if(rememberCheckbox.checked){

            localStorage.setItem(
                "rememberEmail",
                email
            );

        }else{

            localStorage.removeItem(
                "rememberEmail"
            );

        }

        showToast("Login Successful!","success");

        setTimeout(() => {

            if(user.role === "admin"){

                window.location.href = "admin/dashboard.html";

            }else{

                window.location.href = "dashboard.html";

            }

        },1500);

    });

});