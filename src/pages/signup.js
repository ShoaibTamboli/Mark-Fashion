import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../css/sign-up.css"
function Signup(){
    return(
<div className="wrapper">
<Header/>
<h2>Login</h2>

<div className="Login-fields-container">

    <div>
        <label for="Email address">Email address</label> <br/>
        <input type="text" name="Email address" placeholder="shoaibtamboli@gmail.com" className="align-label"/>
    </div>

    <div>

        <label for="Password">Password</label> <br/>
        <input type="password" name="Password" placeholder="******" className="align-label" />

    </div>

    <div className="label-holder"><input type="checkbox" name="Remember me"/> <label for="Remember me" className="align-fields">Remember me</label> <span className="label-fpassword"><a href="#">Forgot your Password?</a></span></div>

    <div><button className="button">Login</button></div>

    <div><a href="/pages/login-signup/signup.html">Create Account &gt;</a> </div>


</div>
<Footer/>
</div>

    )
}

export default Signup