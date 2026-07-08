/* ==========================================
   LOGIN PAGE
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

/* ===========================
Login Section
=========================== */

.login-section{

    min-height:100vh;

    display:flex;

    justify-content:center;
    align-items:center;

    padding:50px 8%;

}

/* ===========================
Container
=========================== */

.login-container{

    width:100%;
    max-width:1200px;

    background:white;

    display:grid;

    grid-template-columns:1fr 1fr;

    border-radius:20px;

    overflow:hidden;

    box-shadow:0 15px 35px rgba(0,0,0,.12);

}

/* ===========================
Left Side
=========================== */

.login-left{

    background:#003B8E;

    color:white;

    padding:60px;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    text-align:center;

}

.login-left h1{

    font-size:42px;

    margin-bottom:20px;

}

.login-left p{

    line-height:1.8;

    margin-bottom:35px;

}

.login-left img{

    width:90%;

    max-width:380px;

}

/* ===========================
Right Side
=========================== */

.login-right{

    padding:60px;

}

.login-right h2{

    color:#003B8E;

    margin-bottom:35px;

    font-size:34px;

}

/* ===========================
Input Fields
=========================== */

.input-box{

    margin-bottom:25px;

}

.input-box label{

    display:block;

    margin-bottom:8px;

    color:#003B8E;

    font-weight:600;

}

.input-box input{

    width:100%;

    padding:14px;

    border:1px solid #ddd;

    border-radius:10px;

    outline:none;

    transition:.3s;

    font-size:16px;

}

.input-box input:focus{

    border-color:#003B8E;

    box-shadow:0 0 10px rgba(0,59,142,.2);

}

/* ===========================
Password Box
=========================== */

.password-box{

    position:relative;

}

.password-box span{

    position:absolute;

    right:15px;

    top:50%;

    transform:translateY(-50%);

    cursor:pointer;

    font-size:20px;

}

/* ===========================
Options
=========================== */

.options{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:30px;

    font-size:14px;

}

.options a{

    text-decoration:none;

    color:#003B8E;

    font-weight:600;

}

.options a:hover{

    text-decoration:underline;

}

/* ===========================
Button
=========================== */

button{

    width:100%;

    padding:15px;

    background:#003B8E;

    color:white;

    border:none;

    border-radius:10px;

    font-size:18px;

    cursor:pointer;

    transition:.3s;

    font-weight:600;

}

button:hover{

    background:#0057d8;

}

/* ===========================
Signup Link
=========================== */

.signup-link{

    margin-top:30px;

    text-align:center;

}

.signup-link a{

    color:#003B8E;

    font-weight:600;

    text-decoration:none;

}

.signup-link a:hover{

    text-decoration:underline;

}

/* ===========================
Animation
=========================== */

.login-container{

    animation:fadeIn .7s ease;

}

@keyframes fadeIn{

    from{

        opacity:0;

        transform:translateY(30px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* ===========================
Responsive
=========================== */

@media(max-width:900px){

.login-container{

grid-template-columns:1fr;

}

.login-left{

padding:40px;

}

.login-right{

padding:40px;

}

}

@media(max-width:600px){

.login-section{

padding:20px;

}

.login-left h1{

font-size:30px;

}

.login-right h2{

font-size:28px;

}

.options{

flex-direction:column;

align-items:flex-start;

gap:10px;

}

.login-left img{

display:none;

}

}
