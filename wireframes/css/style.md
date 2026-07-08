/* ===============================
   Smart Campus Event Hub
   Global Styles
================================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    background:#f5f7fb;
    color:#333;
    line-height:1.6;
}

/* ===============================
   Header
================================= */

header{
    width:100%;
    background:#003B8E;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 8%;
    position:sticky;
    top:0;
    z-index:999;
    box-shadow:0 2px 8px rgba(0,0,0,.15);
}

.logo h2{
    font-size:28px;
    font-weight:700;
}

nav{
    display:flex;
    align-items:center;
}

.nav-links{
    display:flex;
    list-style:none;
    gap:30px;
}

.nav-links li{
    list-style:none;
}

.nav-links a{
    color:white;
    text-decoration:none;
    font-size:16px;
    transition:.3s;
    font-weight:500;
}

.nav-links a:hover{
    color:#FFD447;
}

/* ===============================
Buttons
================================= */

.btn{
    background:white;
    color:#003B8E !important;
    padding:10px 22px;
    border-radius:25px;
    font-weight:600;
    transition:.3s;
}

.btn:hover{
    background:#FFD447;
    color:#003B8E !important;
}

.primary-btn{
    display:inline-block;
    background:#FFD447;
    color:#003B8E;
    text-decoration:none;
    padding:14px 30px;
    border-radius:40px;
    margin-top:20px;
    font-weight:bold;
    transition:.3s;
}

.primary-btn:hover{
    background:white;
}

/* ===============================
Search
================================= */

.search{
    width:90%;
    margin:60px auto;
    text-align:center;
}

.search h2{
    margin-bottom:25px;
}

.search input{
    width:70%;
    padding:15px;
    border-radius:30px;
    border:none;
    outline:none;
    font-size:17px;
    box-shadow:0 5px 15px rgba(0,0,0,.12);
}

/* ===============================
Cards
================================= */

.event-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.event-card{
    background:white;
    border-radius:18px;
    overflow:hidden;
    box-shadow:0 8px 20px rgba(0,0,0,.08);
    transition:.35s;
}

.event-card:hover{
    transform:translateY(-10px);
}

.event-card img{
    width:100%;
    height:220px;
    object-fit:cover;
}

.event-card h3{
    padding:15px;
    color:#003B8E;
}

.event-card p{
    padding:0 15px 15px;
}

.event-card a{
    display:block;
    text-align:center;
    text-decoration:none;
    background:#003B8E;
    color:white;
    padding:15px;
    transition:.3s;
}

.event-card a:hover{
    background:#0057d8;
}

/* ===============================
Section Titles
================================= */

section{
    padding:70px 8%;
}

section h2{
    text-align:center;
    margin-bottom:45px;
    color:#003B8E;
    font-size:34px;
}

/* ===============================
Footer
================================= */

footer{
    background:#003B8E;
    color:white;
    text-align:center;
    padding:25px;
    margin-top:70px;
}

/* ===============================
Hamburger
================================= */

.hamburger{
    display:none;
    font-size:32px;
    cursor:pointer;
}
