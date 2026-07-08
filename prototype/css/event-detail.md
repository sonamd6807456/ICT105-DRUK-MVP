/* ==========================================
   EVENT DETAIL PAGE
   Smart Campus Event Hub
========================================== */

/* Banner */

.detail-banner{
    background:linear-gradient(rgba(0,59,142,.85),rgba(0,59,142,.85)),
    url("../images/event-banner.jpg");
    background-size:cover;
    background-position:center;
    text-align:center;
    color:white;
    padding:80px 8%;
}

.detail-banner h1{
    font-size:48px;
    margin-bottom:15px;
}

.detail-banner p{
    font-size:18px;
}

/* ==========================
Main Event Section
========================== */

.event-detail-container{

    width:90%;
    max-width:1200px;

    margin:60px auto;

    display:grid;
    grid-template-columns:1fr 1fr;

    gap:50px;

    align-items:center;

}

/* Image */

.event-image img{

    width:100%;

    border-radius:20px;

    box-shadow:0 10px 25px rgba(0,0,0,.15);

}

/* Event Info */

.event-information{

    background:white;

    padding:35px;

    border-radius:20px;

    box-shadow:0 8px 18px rgba(0,0,0,.08);

}

.event-information h2{

    color:#003B8E;

    font-size:34px;

    margin-bottom:15px;

}

.event-information p{

    color:#555;

    line-height:1.8;

    margin-top:15px;

}

/* Status Badge */

.status{

    display:inline-block;

    background:#28a745;

    color:white;

    padding:8px 18px;

    border-radius:30px;

    font-size:14px;

    margin-bottom:20px;

}

/* ==========================
Details Grid
========================== */

.details{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:20px;

    margin-top:30px;

}

.details div{

    background:#f5f7fb;

    padding:18px;

    border-radius:15px;

}

.details strong{

    color:#003B8E;

    display:block;

    margin-bottom:8px;

}

/* ==========================
Buttons
========================== */

.buttons{

    margin-top:35px;

    display:flex;

    gap:20px;

    flex-wrap:wrap;

}

.register-btn{

    background:#003B8E;

    color:white;

    text-decoration:none;

    padding:14px 28px;

    border-radius:30px;

    transition:.3s;

    font-weight:600;

}

.register-btn:hover{

    background:#0057d8;

}

.back-btn{

    background:#FFD447;

    color:#003B8E;

    text-decoration:none;

    padding:14px 28px;

    border-radius:30px;

    transition:.3s;

    font-weight:600;

}

.back-btn:hover{

    background:#f3c600;

}

/* ==========================
Schedule
========================== */

.schedule{

    width:90%;

    max-width:1100px;

    margin:auto;

}

.schedule table{

    width:100%;

    border-collapse:collapse;

    margin-top:30px;

    background:white;

    box-shadow:0 8px 18px rgba(0,0,0,.08);

}

.schedule th{

    background:#003B8E;

    color:white;

    padding:18px;

}

.schedule td{

    padding:16px;

    border-bottom:1px solid #ddd;

}

.schedule tr:hover{

    background:#f5f7fb;

}

/* ==========================
Related Events
========================== */

.related-events{

    background:#f5f7fb;

}

.related-events .event-grid{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

    gap:30px;

}

/* ==========================
Animation
========================== */

.event-image,
.event-information,
.schedule,
.related-events{

    animation:fadeUp .8s ease;

}

@keyframes fadeUp{

    from{

        opacity:0;

        transform:translateY(35px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* ==========================
Responsive
========================== */

@media(max-width:900px){

.event-detail-container{

grid-template-columns:1fr;

}

}

@media(max-width:768px){

.detail-banner h1{

font-size:38px;

}

.details{

grid-template-columns:1fr;

}

.buttons{

flex-direction:column;

}

.register-btn,
.back-btn{

text-align:center;

}

}

@media(max-width:480px){

.detail-banner{

padding:60px 20px;

}

.detail-banner h1{

font-size:30px;

}

.event-information{

padding:25px;

}

.event-information h2{

font-size:28px;

}

.schedule table{

font-size:14px;

}

}
