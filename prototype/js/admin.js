/* ==========================================
   ADMIN DASHBOARD
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadDashboard();

});

/* ==========================================
   LOAD DASHBOARD
========================================== */

function loadDashboard(){

    const users = getUsers();

    const events = getEvents();

    const reviews = getReviews();

    const registrations = getRegistrations();

    document.getElementById("totalUsers").textContent =
        users.length;

    document.getElementById("totalEvents").textContent =
        events.length;

    document.getElementById("totalReviews").textContent =
        reviews.length;

    document.getElementById("totalRegistrations").textContent =
        registrations.length;

    const table =
        document.getElementById("userTable");

    table.innerHTML = "";

    users.forEach(user=>{

        if(user.role==="admin") return;

        table.innerHTML +=

        `
        <tr>

            <td>${user.fullName}</td>

            <td>${user.studentId}</td>

            <td>${user.email}</td>

        </tr>
        `;

    });

}