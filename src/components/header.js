import React from "react";
import { Link } from "react-router-dom";

function Header(){

    return(
    <header>
        <div className="navigation-bar">
            <div className="logo">MARK</div>
            <ul>
                <li>

                <Link to="/">Home</Link>
                    
                </li>
                <li>
                    <Link to="/products">Products</Link>
                   
                </li>
            </ul>
            <div className="search"><input type="search" name="" id="" placeholder="Search"/></div>
            <div className="fa-icons">
                <button className="btn-login">
                    <Link to="/login">Login</Link>
                    {/* <a href="/pages/login-signup/login-signup.html">Login
                    </a> */}
                </button>
                <div>
                    <Link to="/wishlist"> <i className="fa fa-heart icon" ></i></Link>
                    {/* <a href="/pages/wishlist/wishlist.html">
                       
                    </a> */}
                </div>
                <div>
                <Link to="/cart"><i className="fa fa-shopping-cart icon"></i></Link>
                    {/* <a href="/pages/cart/cart.html"></a> */}
                </div>
            </div>
        </div>
    </header>
    )

}

export default Header;