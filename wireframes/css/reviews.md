/* ==========================================
   REVIEWS PAGE
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

.review-banner{

    background:linear-gradient(rgba(0,59,142,.9),rgba(0,59,142,.9)),
    url("../images/review-banner.jpg");

    background-size:cover;
    background-position:center;

    color:white;

    text-align:center;

    padding:80px 20px;

}

.review-banner h1{

    font-size:48px;

    margin-bottom:15px;

}

.review-banner p{

    font-size:18px;

}

/* ==========================
Container
========================== */

.review-container{

    width:90%;
    max-width:900px;

    margin:50px auto;

}

/* ==========================
Review Card
========================== */

.review-card{

    background:white;

    padding:35px;

    border-radius:20px;

    box-shadow:0 10px 25px rgba(0,0,0,.08);

}

.review-card h2{

    color:#003B8E;

    margin-bottom:25px;

}

.review-card label{

    display:block;

    margin-top:20px;

    margin-bottom:10px;

    color:#003B8E;

    font-weight:600;

}

.review-card select,
.review-card textarea{

    width:100%;

    padding:14px;

    border:1px solid #ddd;

    border-radius:10px;

    outline:none;

    font-size:16px;

    transition:.3s;

}

.review-card select:focus,
.review-card textarea:focus{

    border-color:#003B8E;

    box-shadow:0 0 8px rgba(0,59,142,.2);

}

/* ==========================
Stars
========================== */

.stars{

    display:flex;

    gap:10px;

    margin:15px 0;

}

.star{

    font-size:38px;

    color:#ccc;

    cursor:pointer;

    transition:.3s;

}

.star:hover{

    transform:scale(1.2);

}

.star.active{

    color:#FFD700;

}

/* ==========================
Button
========================== */

.review-card button{

    width:100%;

    margin-top:25px;

    padding:15px;

    border:none;

    border-radius:10px;

    background:#003B8E;

    color:white;

    font-size:18px;

    cursor:pointer;

    transition:.3s;

}

.review-card button:hover{

    background:#0057d8;

}

/* ==========================
Section Title
========================== */

.section-title{

    width:90%;

    max-width:1200px;

    margin:50px auto 25px;

    color:#003B8E;

    font-size:32px;

}

/* ==========================
Review Grid
========================== */

.review-grid{

    width:90%;

    max-width:1200px;

    margin:auto auto 60px;

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

    gap:25px;

}

/* ==========================
Review Item
========================== */

.review-item{

    background:white;

    padding:25px;

    border-radius:18px;

    box-shadow:0 8px 20px rgba(0,0,0,.08);

    transition:.3s;

}

.review-item:hover{

    transform:translateY(-5px);

}

.review-item h3{

    color:#003B8E;

    margin-bottom:12px;

}

.review-item p{

    margin:10px 0;

    color:#555;

    line-height:1.6;

}

.review-item .rating{

    color:#FFD700;

    font-size:20px;

    margin:12px 0;

}

/* ==========================
Delete Button
========================== */

.delete-btn{

    margin-top:20px;

    padding:10px 18px;

    background:#dc3545;

    color:white;

    border:none;

    border-radius:8px;

    cursor:pointer;

    transition:.3s;

}

.delete-btn:hover{

    background:#b02a37;

}

/* ==========================
Animation
========================== */

.review-card,
.review-item{

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

.review-banner h1{

font-size:36px;

}

.review-card{

padding:25px;

}

.section-title{

font-size:28px;

}

.star{

font-size:32px;

}

}

@media(max-width:480px){

.review-banner{

padding:60px 20px;

}

.review-banner h1{

font-size:30px;

}

.review-banner p{

font-size:15px;

}

.review-card{

padding:20px;

}

.review-card button{

font-size:16px;

}

.review-grid{

grid-template-columns:1fr;

}

}
