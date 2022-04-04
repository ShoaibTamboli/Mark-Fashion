import React from "react"
import Home from "./pages/home"
import Wishlist from "./pages/wishlist"
import Cart from "./pages/cart"
import Signup from "./pages/signup"
import Products from "./pages/products"
import Login from "./pages/login"

import { Route,Routes } from "react-router-dom"

 function SiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/products" element={<Products />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/logout" element={<LogoutPage />} /> */}
        </Routes>
    );
}

export default SiteRoutes