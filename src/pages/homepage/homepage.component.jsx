import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Directory />
    <div className="banner">
      <div className="content">
        <span>FREE $100 GIFT CARD</span>
        <h1 className="title"><CustomButton>ENTER NOW</CustomButton></h1>
      </div>
    </div>
    <div id='digital-gift-card'>
        <div>
            DIGITAL GIFT CARD
        </div>
    </div>
    <div className="banner">
      <div className="content">
        <span>FREE SHIPPING ON SELECTED PRODUCTS!</span>
        <h1 className="title"><CustomButton>CHECK IT OUT</CustomButton></h1>
      </div>
    </div>
    </div>

);

export default HomePage;
