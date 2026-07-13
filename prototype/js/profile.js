/* ==========================================
   PROFILE PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const currentUser = getCurrentUser();

    if (!currentUser) {

        window.location.href = "login.html";

        return;

    }

    document.getElementById("fullName").value = currentUser.fullName;
    document.getElementById("studentId").value = currentUser.studentId;
    document.getElementById("faculty").value = currentUser.faculty;
    document.getElementById("email").value = currentUser.email;
    document.getElementById("phone").value = currentUser.phone;

    document.getElementById("profileForm").addEventListener("submit", updateProfile);

});

/* ==========================================
   UPDATE PROFILE
========================================== */

function updateProfile(e){

    e.preventDefault();

    const users = getUsers();

    const currentUser = getCurrentUser();

    const index = users.findIndex(

        user => user.id === currentUser.id

    );

    users[index].fullName =
        document.getElementById("fullName").value.trim();

    users[index].faculty =
        document.getElementById("faculty").value.trim();

    users[index].email =
        document.getElementById("email").value.trim();

    users[index].phone =
        document.getElementById("phone").value.trim();

    saveUsers(users);

    setCurrentUser(users[index]);

    alert("Profile updated successfully.");

}