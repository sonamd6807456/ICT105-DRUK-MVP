/* ======================================
   RESPONSIVE DESIGN
   Smart Campus Event Hub
====================================== */

/* ===========================
   Large Tablets
=========================== */

@media (max-width:1024px){

    header{
        padding:15px 5%;
    }

    section{
        padding:60px 5%;
    }

    .hero-content h1{
        font-size:45px;
    }

    .hero-content p{
        font-size:18px;
    }

    .search input{
        width:90%;
    }

}

/* ===========================
   Tablets
=========================== */

@media (max-width:768px){

    header{
        flex-direction:column;
        align-items:flex-start;
    }

    nav{
        width:100%;
    }

    .nav-links{
        display:none;
        flex-direction:column;
        width:100%;
        background:#003B8E;
        margin-top:15px;
        padding:20px;
    }

    .nav-links.active{
        display:flex;
    }

    .nav-links li{
        margin:10px 0;
    }

    .hamburger{
        display:block;
        position:absolute;
        top:20px;
        right:25px;
        color:white;
    }

    .hero{
        min-height:75vh;
    }

    .hero-content h1{
        font-size:38px;
    }

    .hero-content p{
        font-size:17px;
    }

    .category-container{
        grid-template-columns:repeat(2,1fr);
    }

    .event-grid{
        grid-template-columns:repeat(2,1fr);
    }

    .about-grid{
        grid-template-columns:1fr;
    }

    .stats-container{
        grid-template-columns:repeat(2,1fr);
    }

    .testimonial-container{
        grid-template-columns:1fr;
    }

}

/* ===========================
   Mobile Devices
=========================== */

@media (max-width:576px){

    header{
        padding:15px;
    }

    .logo h2{
        font-size:22px;
    }

    .hero{
        min-height:70vh;
        padding:20px;
    }

    .hero-content h1{
        font-size:30px;
    }

    .hero-content p{
        font-size:15px;
        line-height:1.6;
    }

    .primary-btn{
        padding:12px 24px;
        font-size:15px;
    }

    section{
        padding:50px 20px;
    }

    section h2{
        font-size:28px;
    }

    .search input{
        width:100%;
        font-size:15px;
    }

    .category-container{
        grid-template-columns:1fr;
    }

    .event-grid{
        grid-template-columns:1fr;
    }

    .stats-container{
        grid-template-columns:1fr;
    }

    .category-card{
        padding:25px;
        font-size:40px;
    }

    .category-card h3{
        font-size:18px;
    }

    .about-grid div{
        padding:25px;
    }

    .newsletter input{
        width:100%;
        margin-bottom:15px;
    }

    .newsletter button{
        width:100%;
        margin-left:0;
    }

    footer{
        font-size:14px;
        padding:20px;
    }

}

/* ===========================
   Small Phones
=========================== */

@media (max-width:400px){

    .hero-content h1{
        font-size:25px;
    }

    .hero-content p{
        font-size:14px;
    }

    .primary-btn{
        width:100%;
        text-align:center;
    }

    .event-card img{
        height:180px;
    }

    .event-card h3{
        font-size:20px;
    }

}
