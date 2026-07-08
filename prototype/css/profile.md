/* ==========================================
   PROFILE PAGE
   Smart Campus Event Hub
========================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    background:#f5f7fb;
}

/* ==========================
Banner
========================== */

.profile-banner{

    background:linear-gradient(rgba(0,59,142,.9),rgba(0,59,142,.9)),
    url("../images/profile-banner.jpg");

    background-size:cover;
    background-position:center;

    color:white;

    text-align:center;

    padding:80px 20px;

}

.profile-banner h1{

    font-size:48px;

    margin-bottom:15px;

}

.profile-banner p{

    font-size:18px;

}

/* ==========================
Container
========================== */

.profile-container{

    width:90%;
    max-width:1200px;

    margin:50px auto;

}

/* ==========================
Profile Card
========================== */

.profile-card{

    background:white;

    border-radius:20px;

    box-shadow:0 10px 25px rgba(0,0,0,.08);

    display:grid;

    grid-template-columns:320px 1fr;

    overflow:hidden;

}

/* ==========================
Profile Image
========================== */

.profile-image{

    background:#003B8E;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    padding:40px;

}

.profile-image img{

    width:200px;

    height:200px;

    object-fit:cover;

    border-radius:50%;

    border:6px solid white;

    margin-bottom:25px;

}

.profile-image input{

    color:white;

    width:100%;

}

/* ==========================
Profile Details
========================== */

.profile-details{

    padding:40px;

}

/* ==========================
Form
========================== */

.form-group{

    margin-bottom:20px;

}

.form-group label{

    display:block;

    color:#003B8E;

    margin-bottom:8px;

    font-weight:600;

}

.form-group input{

    width:100%;

    padding:14px;

    border:1px solid #ddd;

    border-radius:10px;

    outline:none;

    font-size:16px;

    transition:.3s;

}

.form-group input:focus{

    border-color:#003B8E;

    box-shadow:0 0 8px rgba(0,59,142,.2);

}

.profile-details h2{

    color:#003B8E;

    margin:25px 0 20px;

}

.profile-details hr{

    margin:35px 0;

    border:none;

    border-top:1px solid #ddd;

}

/* ==========================
Button
========================== */

button{

    width:100%;

    padding:15px;

    border:none;

    border-radius:10px;

    background:#003B8E;

    color:white;

    font-size:18px;

    cursor:pointer;

    transition:.3s;

    font-weight:600;

}

button:hover{

    background:#0057d8;

}

/* ==========================
Animation
========================== */

.profile-card{

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

@media(max-width:900px){

.profile-card{

grid-template-columns:1fr;

}

.profile-image{

padding:30px;

}

.profile-details{

padding:30px;

}

}

@media(max-width:600px){

.profile-banner{

padding:60px 20px;

}

.profile-banner h1{

font-size:32px;

}

.profile-banner p{

font-size:16px;

}

.profile-image img{

width:150px;

height:150px;

}

.profile-details{

padding:20px;

}

button{

font-size:16px;

}

}
