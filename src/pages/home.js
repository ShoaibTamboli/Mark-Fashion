import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import "../css/style.css"


function Home(){
    return (
    <div className="container">
        <Header/>

    <div className="slider">
        <a href="/index.html"> <img src="../assets/Images/main-slider.png" alt="Slider-Image"/></a>
       
    </div>

    <div className="card-container">
        <h2 className="card-title">CATEGORIES TO BAG</h2>
        <div className="cards">
            <div className="card-item">
                <img src="../assets/Images/rn-imgicon1.png" alt="Image1" width="160px"/>
            </div>

            <div className="card-item">
                <img src="../assets/Images/rn-imgicon2.png" alt="Image2" width="160px"/>
            </div>

            <div className="card-item">
                <img src="../assets/Images/rn-imgicon3.png" alt="Image3" width="160px"/>
            </div>

            <div className="card-item">
                <img src="../assets/Images/rn-imgicon4.png" alt="Image5" width="160px"/>
            </div>
            <div className="card-item">
                <img src="../assets/Images/ethenic-casual.png" alt="Image4" width="160px"/>
            </div>

        </div>
    </div>
    <div className="slider">
        <img src="../assets/Images/slider3.jpg" alt="Slider-Image"/>
    </div>
    <div className="card-container">

        <h2 className="card-title">EXPLORE TOP BRANDS</h2>

        <div className="cards">
            <div className="card-item">
                <img src="../assets/Images/brand1.png" alt="Image1" width="160px"/>
            </div>

            <div className="card-item">
                <img src="../assets/Images/brand2.png" alt="Image2" width="160px"/>
            </div>

            <div className="card-item">
                <img src="../assets/Images/brand3.png" alt="Image3" width="160px"/>
            </div>

            <div className="card-item">
                <img src="../assets/Images/brand4.png" alt="Image5" width="160px"/>
            </div>
            <div className="card-item">
                <img src="../assets/Images/brand5.png" alt="Image4" width="160px"/>
            </div>

        </div>

    </div>
<Footer/>
</div>
)
}

export default Home;