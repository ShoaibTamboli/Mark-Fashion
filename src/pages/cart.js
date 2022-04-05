import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../css/cart.css"

function Cart(){
    return(
     
  
        <div>
        <Header/>
    
            <h2 className="mycart-head">My Cart</h2>
    
            <div className="cart-container">
                <div className="vertical-cart-item">
                    <div>
                        <img src="../assets/Images/Printshirt.jpg" alt="Shirt"/>
    
                    </div>
                    <div className="cart-info">
                        <h4>Lee Printed shirt</h4>
                        <p>Slim fit casual shirt</p>
                        <h2>899/-</h2>
                        <p> Quantity:
                            <input type="number" value="2"/> </p>
                            <span>  <button className="btn btn-primary btn-width">Add to wishlist</button></span>
                      <span><button className="btn btn-secondary">Remove from cart</button></span>
                       
                    </div>
                </div>
    
                <div className="price-details">
    
                    <h2>Price Details</h2>
                    <hr/>
                   <div className="price-detail-spacing"> <span>Price 2 items </span> <span className="price-pos-end">₹1798/-</span>  </div>
                   <div className="price-detail-spacing"> <span>Discount </span> <span className="price-pos-end">- ₹179/- </span> </div>
                   <div className="price-detail-spacing"> <span>Delivery Charges </span>  <span className="price-pos-end">₹100/-</span> </div>
                    <hr/>
                   <div className="price-detail-spacing"> <span>Total Amount</span>  <span className="price-pos-end">₹1719/-</span> </div>
                   <hr/>
                   <p className="mini-center">You will save ₹179 on this order</p>
                   <div className="btn-width" ><button className="btn btn-primary mini-center ">Place Order</button> </div>
                </div>
    
            
                
            </div>
    <Footer/>
        </div>
    )
}

export default Cart