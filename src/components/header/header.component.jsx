import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/festival-shreds.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          WOMENS
        </Link>
        <Link className="option" to="/shop">
          ACCESSORIES
        </Link>
        <Link className="option" to="/shop">
          MEN
        </Link>
        <Link className="option" to="/shop">
          VISIONARY ART
        </Link>
        <Link className="option" to="/shop">
          FREE SHIPPING
        </Link>
        <Link className="option" to="/shop">
          BESTSELLERS
        </Link>
        <Link className="option" to="/shop">
          BLOG
        </Link>
    </div>
  </div>
);

export default Header;
