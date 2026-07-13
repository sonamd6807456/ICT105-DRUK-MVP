/* ==========================================
   SMART CAMPUS EVENT HUB
   MAIN JAVASCRIPT
========================================== */

/* ==========================================
   TOAST NOTIFICATION
========================================== */

function showToast(message, type = "success") {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.className = "toast";

    toast.classList.add(type);

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

/* ==========================================
   LOGOUT
========================================== */

function logout() {

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("currentUser");

    showToast("Logged out successfully!", "success");

    setTimeout(() => {

        window.location.href = "login.html";

    }, 1000);

}