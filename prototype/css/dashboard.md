/* ==========================================
   DASHBOARD PAGE
   Smart Campus Event Hub
========================================== */

body{
    font-family:'Poppins',sans-serif;
    background:#f5f7fb;
}

/* ==========================
Dashboard Header
========================== */

.dashboard-header{

    background:linear-gradient(rgba(0,59,142,.9),rgba(0,59,142,.9)),
    url("../images/dashboard-banner.jpg");

    background-size:cover;
    background-position:center;

    color:white;

    text-align:center;

    padding:80px 8%;

}

.dashboard-header h1{

    font-size:48px;

    margin-bottom:15px;

}

.dashboard-header p{

    font-size:18px;

}

/* ==========================
Statistics
========================== */

.stats{

    width:90%;
    max-width:1200px;

    margin:50px auto;

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

    gap:25px;

}

.stat-card{

    background:white;

    padding:35px;

    border-radius:18px;

    text-align:center;

    box-shadow:0 8px 20px rgba(0,0,0,.08);

    transition:.3s;

}

.stat-card:hover{

    transform:translateY(-8px);

}

.stat-card h2{

    font-size:45px;

    color:#003B8E;

    margin-bottom:10px;

}

.stat-card p{

    color:#666;

}

/* ==========================
Section Title
========================== */

.section-title{

    width:90%;

    max-width:1200px;

    margin:40px auto 20px;

    color:#003B8E;

    font-size:32px;

}

/* ==========================
Dashboard Grid
========================== */

.dashboard-grid{

    width:90%;

    max-width:1200px;

    margin:auto;

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));

    gap:25px;

}

/* ==========================
Registration Card
========================== */

.registration-card{

    background:white;

    border-radius:18px;

    padding:25px;

    box-shadow:0 8px 20px rgba(0,0,0,.08);

    transition:.3s;

}

.registration-card:hover{

    transform:translateY(-6px);

}

.registration-card h3{

    color:#003B8E;

    margin-bottom:15px;

}

.registration-card p{

    margin:10px 0;

    color:#555;

}

/* ==========================
Profile Card
========================== */

.profile-card{

    width:90%;

    max-width:1200px;

    margin:auto;

    background:white;

    padding:35px;

    border-radius:18px;

    box-shadow:0 8px 20px rgba(0,0,0,.08);

}

.profile-card p{

    margin:15px 0;

    font-size:17px;

    color:#444;

}

.profile-card strong{

    color:#003B8E;

}

/* ==========================
Quick Actions
========================== */

.action-buttons{

    width:90%;

    max-width:1200px;

    margin:30px auto 60px;

    display:flex;

    justify-content:center;

    gap:20px;

    flex-wrap:wrap;

}

.action-buttons a,
.action-buttons button{

    padding:15px 30px;

    border:none;

    border-radius:10px;

    background:#003B8E;

    color:white;

    text-decoration:none;

    cursor:pointer;

    font-size:16px;

    transition:.3s;

}

.action-buttons a:hover,
.action-buttons button:hover{

    background:#0057d8;

}

/* ==========================
Empty State
========================== */

.empty{

    width:90%;

    max-width:1200px;

    margin:auto;

    background:white;

    text-align:center;

    padding:40px;

    border-radius:18px;

    color:#777;

}

/* ==========================
Animation
========================== */

.dashboard-header,
.stat-card,
.profile-card,
.registration-card{

    animation:fadeUp .7s ease;

}

@keyframes fadeUp{

    from{

        opacity:0;

        transform:translateY(30px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* ==========================
Responsive
========================== */

@media(max-width:768px){

.dashboard-header h1{

font-size:36px;

}

.section-title{

font-size:28px;

}

.profile-card{

padding:25px;

}

}

@media(max-width:480px){

.dashboard-header{

padding:60px 20px;

}

.dashboard-header h1{

font-size:28px;

}

.dashboard-header p{

font-size:15px;

}

.stat-card h2{

font-size:36px;

}

.action-buttons{

flex-direction:column;

}

.action-buttons a,
.action-buttons button{

width:100%;

text-align:center;

}

}
