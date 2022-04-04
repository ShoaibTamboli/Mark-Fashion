import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/products.css"

function Products(){
    return(
       
        <div>
            <Header/>
    <div className="product-listing-container">
        <div className="filter-section">

            <div className="price">
                <h2>Price</h2>
                <div>
                    <span className="">300</span>
                    <span className="">1500</span>
                    <span className="">3000</span>
                </div>
        
                 <div>
                    <input
                      type="range"
                      min="399"
                      max="2999"
                      value="1500"
                      step="100"
                      className=""
                    />
                 </div>

            </div>


            <div>
               
                <div>
                    <h3 className="">Category</h3>
          
                    <div className="">
                      <label className="" for="Shirts">
                        <input
                          className=""
                          type="checkbox"
                          name="category"
                          id="Shirts"
                          value="Shirts"
                        />
                        Shirts
                      </label>
                    </div>
          
                    <div className="">
                      <label className="" for="Jeans">
                        <input
                          className=""
                          type="checkbox"
                          name="category"
                          id="Jeans"
                          value="Jeans"
                        />
                       Jeans
                      </label>
                    </div>
          
                    <div className="T-Shirts">
                      <label className="cursor-ptr" for="T-Shirts">
                        <input
                          className=""
                          type="checkbox"
                          name="category"
                          id="T-Shirts"
                          value="T-Shirts"
                        />
                        T-Shirts
                      </label>
                    </div>

                    <div className="Festive Wear">
                        <label className="" for=" Festive Wear">
                          <input
                            className=""
                            type="checkbox"
                            name="category"
                            id="Festive Wear"
                            value="Festive Wear"
                          />
                          Festive Wear
                        </label>
                    </div>

                    </div>

            </div>


            <div className="Rating">

                <div>
                    <h3 className="">Rating</h3>
          
                    <div className="">
                        <input type="radio" name="" id=""/>
                        <label className="radio-label" for="">4 Stars & above</label>
                    </div>

                    <div className="">
                        <input type="radio" name="" id=""/>
                        <label className="radio-label" for="">3 Stars & above</label>
                    </div>

                    <div className="">
                        <input type="radio" name="" id=""/>
                        <label className="radio-label" for="">2 Stars & above</label>
                    </div>

                    <div className="">
                        <input type="radio" name="" id=""/>
                        <label className="radio-label" for="">1 Stars & above</label>
                    </div>

                </div>

            </div>
                <h3 className="">Sort by</h3>

              <div className="Sortby">
                <div className="sortby-checkbox">
                    <input type="radio" name="" id=""/>
                    <label className="radio-label" for="">Price - Low to High</label>
                </div>

                <div className="sortby-checkbox">
                    <input type="radio" name="" id=""/>
                    <label className="radio-label" for="">Price - High to Low</label>
                    
                </div>

            </div>

        </div>

        <div className="product-listing">
            

           

            <div className="example-div">
                <div className="card ecomm">
                    <div className="product-image">
                        <img
                            src="../assets/Images/Kurta1.jpg"/>
                    </div>
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>


                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Jeans1.jpg"/>
                    </div>
                   
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>


                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Shirt1.jpg" />
                    </div>
                    
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                         
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>

                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Tshirt4.jpg"/>
                    </div>
                  
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>

                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Printshirt.jpg"/>
                    </div>
                   
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>

                <div className="card ecomm">
                    <div className="product-image">
                        <img
                            src="https://rukminim1.flixcart.com/image/800/960/jvfk58w0/shirt/y/n/c/44-8714063-mast-harbour-original-imafgbp8dak2zhmq.jpeg?q=50" />
                    </div>
                     <div className="card-badge">
                        NEW
                    </div> 
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                       
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>

                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Kurta2.jpg"/>
                    </div>
                   
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>




                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Kurta4.jpg"/>
                    </div>
                   
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>

                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Jeans5.jpg"/>
                    </div>
                   
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                         
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>

                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Tshirt2.jpg"/>
                    </div>
                   
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>

                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Printshirt.jpg"/>
                    </div>
                   
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>

                <div className="card ecomm">
                    <div className="product-image">
                        <img
                        src="../assets/Images/Tshirt5.jpg"/>
                    </div>
                   
                    <button className="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    </button>
                    <div className="card-title">
                        Mast & Harbour
                    </div>
                    <div className="card-text">
                        Men Slim Fit Printed Casual Shirt.
                    </div>
                    <div className="card-price">
                        <span className="price-now">
                            Rs.763
                        </span>
                        <span className="price-before">
                            Rs.1499
                        </span>
                        <span className="discount">
                            (49% OFF)
                        </span>
                    </div>
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>

            </div>

            

        </div>
    </div>
    <Footer/>
</div>
    )
}

export default Products;