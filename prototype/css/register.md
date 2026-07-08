/* ==========================================
   REGISTER PAGE
   Smart Campus Event Hub
========================================== */

/* Banner */

.register-banner{
    background:linear-gradient(rgba(0,59,142,.85),rgba(0,59,142,.85)),
    url("../images/register-banner.jpg");
    background-size:cover;
    background-position:center;
    text-align:center;
    color:white;
    padding:80px 8%;
}

.register-banner h1{
    font-size:48px;
    margin-bottom:15px;
}

.register-banner p{
    font-size:18px;
}

/* ===========================
Container
=========================== */

.register-container{
    width:90%;
    max-width:900px;
    margin:60px auto;
}

/* ===========================
Card
=========================== */

.register-card{
    background:white;
    padding:40px;
    border-radius:20px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
}

.register-card h2{
    color:#003B8E;
    margin-bottom:20px;
}

.register-card hr{
    margin:35px 0;
    border:none;
    border-top:1px solid #ddd;
}

/* ===========================
Form
=========================== */

.form-group{
    margin-bottom:22px;
}

.form-group label{
    display:block;
    margin-bottom:8px;
    font-weight:600;
    color:#003B8E;
}

.form-group input,
.form-group select{
    width:100%;
    padding:14px;
    border:1px solid #ddd;
    border-radius:10px;
    outline:none;
    font-size:16px;
    transition:.3s;
}

.form-group input:focus,
.form-group select:focus{
    border-color:#003B8E;
    box-shadow:0 0 8px rgba(0,59,142,.2);
}

/* ===========================
Selected Event
=========================== */

.selected-event{
    background:#f5f7fb;
    padding:25px;
    border-radius:15px;
    margin-bottom:30px;
}

.selected-event p{
    margin:12px 0;
    color:#555;
}

.selected-event strong{
    color:#003B8E;
}

/* ===========================
Submit Button
=========================== */

.submit-btn{
    width:100%;
    background:#003B8E;
    color:white;
    border:none;
    padding:16px;
    border-radius:12px;
    font-size:18px;
    font-weight:600;
    cursor:pointer;
    transition:.3s;
}

.submit-btn:hover{
    background:#0057d8;
}

/* ===========================
Popup
=========================== */

.popup{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.6);
    display:none;
    justify-content:center;
    align-items:center;
    z-index:9999;
}

.popup-content{
    width:90%;
    max-width:450px;
    background:white;
    padding:40px;
    text-align:center;
    border-radius:20px;
    animation:popup .35s ease;
}

.popup-content h2{
    color:#28a745;
    margin-bottom:20px;
}

.popup-content p{
    margin-bottom:30px;
    color:#555;
}

@keyframes popup{

    from{
        opacity:0;
        transform:scale(.8);
    }

    to{
        opacity:1;
        transform:scale(1);
    }

}

/* ===========================
Responsive
=========================== */

@media(max-width:768px){

.register-banner h1{
    font-size:36px;
}

.register-card{
    padding:30px;
}

}

@media(max-width:480px){

.register-banner{
    padding:60px 20px;
}

.register-banner h1{
    font-size:28px;
}

.register-banner p{
    font-size:15px;
}

.register-card{
    padding:20px;
}

.submit-btn{
    font-size:16px;
}

.popup-content{
    padding:25px;
}

}
