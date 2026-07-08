/* ==========================================
   SIGNUP PAGE
   Smart Campus Event Hub
========================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    background:#f4f7fc;
}

/* ==========================
Signup Section
========================== */

.signup-section{

    min-height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;

    padding:50px 8%;

}

/* ==========================
Container
========================== */

.signup-container{

    width:100%;
    max-width:1250px;

    display:grid;
    grid-template-columns:1fr 1fr;

    background:white;

    border-radius:20px;

    overflow:hidden;

    box-shadow:0 15px 35px rgba(0,0,0,.12);

}

/* ==========================
Left Side
========================== */

.signup-left{

    background:#003B8E;

    color:white;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    padding:60px;

    text-align:center;

}

.signup-left h1{

    font-size:42px;

    margin-bottom:20px;

}

.signup-left p{

    line-height:1.8;

    margin-bottom:35px;

}

.signup-left img{

    width:90%;

    max-width:400px;

}

/* ==========================
Right Side
========================== */

.signup-right{

    padding:50px;

}

.signup-right h2{

    color:#003B8E;

    margin-bottom:30px;

    font-size:34px;

}

/* ==========================
Input Fields
========================== */

.input-box{

    margin-bottom:20px;

}

.input-box label{

    display:block;

    margin-bottom:8px;

    color:#003B8E;

    font-weight:600;

}

.input-box input,
.input-box select{

    width:100%;

    padding:14px;

    border:1px solid #ccc;

    border-radius:10px;

    font-size:16px;

    outline:none;

    transition:.3s;

}

.input-box input:focus,
.input-box select:focus{

    border-color:#003B8E;

    box-shadow:0 0 8px rgba(0,59,142,.25);

}

/* ==========================
Password Box
========================== */

.password-box{

    position:relative;

}

.password-box span{

    position:absolute;

    top:50%;

    right:15px;

    transform:translateY(-50%);

    cursor:pointer;

    font-size:20px;

}

/* ==========================
Terms
========================== */

.terms{

    margin:20px 0;

    font-size:15px;

}

.terms label{

    display:flex;

    align-items:center;

    gap:10px;

    cursor:pointer;

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

    font-weight:600;

    cursor:pointer;

    transition:.3s;

}

button:hover{

    background:#0058d4;

}

/* ==========================
Login Link
========================== */

.login-link{

    text-align:center;

    margin-top:25px;

}

.login-link a{

    color:#003B8E;

    font-weight:600;

    text-decoration:none;

}

.login-link a:hover{

    text-decoration:underline;

}

/* ==========================
Animation
========================== */

.signup-container{

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

.signup-container{

grid-template-columns:1fr;

}

.signup-left{

padding:40px;

}

.signup-right{

padding:40px;

}

}

@media(max-width:600px){

.signup-section{

padding:20px;

}

.signup-left h1{

font-size:30px;

}

.signup-right h2{

font-size:28px;

}

.signup-left img{

display:none;

}

.signup-right{

padding:25px;

}

button{

font-size:16px;

}

}
