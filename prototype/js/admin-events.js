document.addEventListener("DOMContentLoaded",()=>{

loadEvents();

document.getElementById("addEventBtn")
.addEventListener("click",openAddModal);

document.getElementById("closeModal")
.addEventListener("click",closeModal);

document.getElementById("eventForm")
.addEventListener("submit",saveEvent);

});

function loadEvents(){

const events=getEvents();

const table=document.getElementById("eventTable");

table.innerHTML="";

events.forEach(event=>{

table.innerHTML+=`

<tr>

<td>${event.title}</td>

<td>${event.category}</td>

<td>${event.date}</td>

<td>${event.seats}</td>

<td>${event.registered}</td>

<td>

<button

class="btn-edit"

onclick="editEvent(${event.id})">

Edit

</button>

<button

class="btn-delete"

onclick="deleteEvent(${event.id})">

Delete

</button>

</td>

</tr>

`;

});

}

function openAddModal(){

document.getElementById("modalTitle").textContent="Add Event";

document.getElementById("eventForm").reset();

document.getElementById("eventId").value="";

document.getElementById("eventModal").style.display="flex";

}

function closeModal(){

document.getElementById("eventModal").style.display="none";

}

function saveEvent(e){

e.preventDefault();

let events=getEvents();

const id=document.getElementById("eventId").value;

const event={

id:id?Number(id):Date.now(),

title:document.getElementById("title").value,

category:document.getElementById("category").value,

date:document.getElementById("date").value,

location:document.getElementById("location").value,

seats:Number(document.getElementById("seats").value),

registered:0,

image:document.getElementById("image").value

};

if(id){

const index=events.findIndex(e=>e.id===Number(id));

event.registered=events[index].registered;

events[index]=event;

}else{

events.push(event);

}

saveEvents(events);

closeModal();

loadEvents();

}

function editEvent(id){

const events=getEvents();

const event=events.find(e=>e.id===id);

document.getElementById("modalTitle").textContent="Edit Event";

document.getElementById("eventId").value=event.id;

document.getElementById("title").value=event.title;

document.getElementById("category").value=event.category;

document.getElementById("date").value=event.date;

document.getElementById("location").value=event.location;

document.getElementById("seats").value=event.seats;

document.getElementById("image").value=event.image;

document.getElementById("eventModal").style.display="flex";

}

function deleteEvent(id){

if(!confirm("Delete this event?")) return;

let events=getEvents();

events=events.filter(event=>event.id!==id);

saveEvents(events);

loadEvents();

}