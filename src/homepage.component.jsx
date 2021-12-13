import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <h1 className="title">SHOP</h1>
      </div>
      <div className="menu-item">
        <h1 className="title">SHOP</h1>
      </div>
      <div className="menu-item">
        <h1 className="title">SHOP</h1>
      </div>
      <div className="menu-item">
        <h1 className="title">SHOP</h1>
      </div>
    </div>
    <div className="banner">
      <div className="content">
        <span>FREE $100 GIFT CARD</span>
        <h1 className="title">ENTER NOW</h1>
      </div>
    </div>
    <div id='digital-gift-card'>
        <div>
            DIGITAL GIFT CARD
        </div>
    </div>
    <div className="banner">
      <div className="content">
        <span>FREE SHIPPING ON SELECTED PRODUCSTS!</span>
        <h1 className="title">CHECKT IT OUT</h1>
      </div>
    </div>
  </div>
);

export default HomePage;
