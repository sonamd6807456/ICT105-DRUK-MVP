/* ==========================================
   ADMIN USERS
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

loadUsers();

document.getElementById("searchUser")

.addEventListener("keyup",searchUsers);

});

function loadUsers(){

const users=getUsers();

const table=document.getElementById("userTable");

table.innerHTML="";

users.forEach(user=>{

if(user.role==="admin") return;

table.innerHTML+=`

<tr>

<td>${user.fullName}</td>

<td>${user.studentId}</td>

<td>${user.email}</td>

<td>${user.faculty}</td>

<td>

<button

class="btn-delete"

onclick="deleteUser(${user.id})">

Delete

</button>

</td>

</tr>

`;

});

}

function deleteUser(id){

if(!confirm("Delete this user?")) return;

let users=getUsers();

users=users.filter(user=>user.id!==id);

saveUsers(users);

loadUsers();

}

function searchUsers(){

const keyword=this.value.toLowerCase();

const rows=document.querySelectorAll("#userTable tr");

rows.forEach(row=>{

const text=row.textContent.toLowerCase();

row.style.display=text.includes(keyword)

? ""

: "none";

});

}