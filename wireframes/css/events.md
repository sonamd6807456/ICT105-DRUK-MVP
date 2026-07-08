/* ==========================================
   EVENTS PAGE
   Smart Campus Event Hub
==========================================*/

/* Hero Banner */

.events-hero{
    background:linear-gradient(rgba(0,59,142,.8),rgba(0,59,142,.8)),
    url("../images/events-banner.jpg");
    background-size:cover;
    background-position:center;
    color:white;
    text-align:center;
    padding:90px 8%;
}

.events-hero h1{
    font-size:50px;
    margin-bottom:15px;
}

.events-hero p{
    font-size:18px;
    max-width:700px;
    margin:auto;
    line-height:1.8;
}

/* ===========================
Search & Filter
=========================== */

.search-filter{

    width:90%;
    margin:50px auto;

    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
    flex-wrap:wrap;

}

.search-filter input{

    width:450px;
    max-width:100%;

    padding:15px;

    border:none;
    border-radius:30px;

    box-shadow:0 5px 15px rgba(0,0,0,.15);

    outline:none;

    font-size:16px;

}

.search-filter select{

    padding:15px 20px;

    border:none;
    border-radius:30px;

    box-shadow:0 5px 15px rgba(0,0,0,.15);

    cursor:pointer;

    font-size:16px;

}

/* ===========================
Events Grid
=========================== */

.event-grid{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));

    gap:30px;

}

/* ===========================
Event Card
=========================== */

.event-card{

    background:white;

    border-radius:20px;

    overflow:hidden;

    transition:.35s;

    box-shadow:0 8px 18px rgba(0,0,0,.08);

}

.event-card:hover{

    transform:translateY(-10px);

    box-shadow:0 15px 30px rgba(0,0,0,.15);

}

.event-card img{

    width:100%;

    height:220px;

    object-fit:cover;

}

.event-card h3{

    color:#003B8E;

    padding:15px;

    font-size:23px;

}

.event-card p{

    padding:0 15px 12px;

    color:#555;

}

/* ===========================
Buttons
=========================== */

.event-card a{

    display:block;

    background:#003B8E;

    color:white;

    text-align:center;

    text-decoration:none;

    padding:15px;

    font-weight:600;

    transition:.3s;

}

.event-card a:hover{

    background:#0057d8;

}

/* ===========================
Category Badge
=========================== */

.category-tag{

    display:inline-block;

    margin:15px;

    background:#FFD447;

    color:#003B8E;

    padding:6px 14px;

    border-radius:25px;

    font-size:13px;

    font-weight:bold;

}

/* ===========================
Quick Info
=========================== */

.info{

    display:flex;

    justify-content:space-between;

    padding:0 15px 15px;

    font-size:14px;

    color:#777;

}

/* ===========================
Empty Search Result
=========================== */

.no-event{

    text-align:center;

    margin:80px 0;

    display:none;

}

.no-event h2{

    color:#003B8E;

}

.no-event p{

    color:#777;

    margin-top:10px;

}

/* ===========================
Hover Animation
=========================== */

.event-card{

    animation:fadeIn .8s ease;

}

@keyframes fadeIn{

    from{

        opacity:0;

        transform:translateY(25px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* ===========================
Responsive
=========================== */

@media(max-width:768px){

.events-hero h1{

font-size:38px;

}

.search-filter{

flex-direction:column;

}

.search-filter input{

width:100%;

}

.search-filter select{

width:100%;

}

}

@media(max-width:480px){

.events-hero{

padding:70px 20px;

}

.events-hero h1{

font-size:30px;

}

.events-hero p{

font-size:15px;

}

.event-card img{

height:180px;

}

}
