/* ==========================================
   HOMEPAGE STYLES
   Smart Campus Event Hub
========================================== */

/* Hero Section */

.hero{
    width:100%;
    min-height:90vh;
    background:linear-gradient(rgba(0,59,142,.75),rgba(0,59,142,.75)),
    url("../images/hero.jpg");
    background-size:cover;
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:white;
}

.hero-content{
    max-width:750px;
    padding:20px;
}

.hero-content h1{
    font-size:55px;
    margin-bottom:20px;
    font-weight:700;
}

.hero-content p{
    font-size:20px;
    margin-bottom:25px;
    line-height:1.8;
}

/* ================================
Categories
================================ */

.categories{
    background:white;
}

.category-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:25px;
}

.category-card{
    background:#ffffff;
    padding:35px;
    border-radius:15px;
    text-align:center;
    cursor:pointer;
    transition:.35s;
    box-shadow:0 8px 18px rgba(0,0,0,.08);
    font-size:45px;
}

.category-card h3{
    margin-top:15px;
    font-size:20px;
    color:#003B8E;
}

.category-card:hover{
    transform:translateY(-10px);
    background:#003B8E;
    color:white;
}

.category-card:hover h3{
    color:white;
}

/* ================================
Featured Events
================================ */

.featured{
    background:#f5f7fb;
}

.featured .event-card{
    overflow:hidden;
}

.featured .event-card img{
    transition:.4s;
}

.featured .event-card:hover img{
    transform:scale(1.08);
}

/* ================================
About Section
================================ */

.about{
    background:white;
}

.about-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:35px;
}

.about-grid div{
    background:#f5f7fb;
    padding:35px;
    border-radius:18px;
    text-align:center;
    transition:.35s;
}

.about-grid div:hover{
    transform:translateY(-8px);
    box-shadow:0 10px 20px rgba(0,0,0,.12);
}

.about-grid h3{
    color:#003B8E;
    margin-bottom:15px;
    font-size:24px;
}

.about-grid p{
    color:#555;
    line-height:1.7;
}

/* ================================
Statistics
================================ */

.statistics{
    background:#003B8E;
    color:white;
}

.stats-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:30px;
    text-align:center;
}

.stat-card{
    padding:25px;
}

.stat-card h2{
    color:#FFD447;
    font-size:45px;
    margin-bottom:10px;
}

.stat-card p{
    font-size:18px;
}

/* ================================
Testimonials
================================ */

.testimonials{
    background:#f5f7fb;
}

.testimonial-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
    gap:30px;
}

.testimonial{
    background:white;
    padding:30px;
    border-radius:18px;
    box-shadow:0 10px 20px rgba(0,0,0,.08);
}

.testimonial p{
    font-style:italic;
    color:#555;
    line-height:1.8;
}

.testimonial h4{
    margin-top:20px;
    color:#003B8E;
}

/* ================================
Newsletter
================================ */

.newsletter{
    background:#003B8E;
    color:white;
    text-align:center;
}

.newsletter p{
    margin:20px 0;
}

.newsletter input{
    width:320px;
    max-width:90%;
    padding:15px;
    border:none;
    border-radius:30px;
    outline:none;
}

.newsletter button{
    margin-left:10px;
    padding:15px 28px;
    border:none;
    border-radius:30px;
    background:#FFD447;
    color:#003B8E;
    cursor:pointer;
    font-weight:bold;
    transition:.3s;
}

.newsletter button:hover{
    background:white;
}

/* ================================
Animation
================================ */

.hero-content,
.category-card,
.event-card,
.about-grid div{
    animation:fadeUp .8s ease;
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
