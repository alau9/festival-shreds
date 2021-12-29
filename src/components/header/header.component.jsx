import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectAccountHidden } from "../../redux/account/account.selector";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/festival-shreds.svg";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import AccountButton from "../account-button/account-button.component";
import AccountDropdown from "../account-dropdown/account-dropdown.component";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div className="header-header">
      <div className="left-side">Search</div>
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      {currentUser ? (
      <div className="right-side">
          <div className="dropdown">
            <AccountButton/>
          </div> 
          <CartIcon/>       
      </div>
        ) : (
        <div className="right-side">
          <div className="dropdown">
            <div className="account-but" onClick={signInWithGoogle}>Sign In</div>
          </div>
          <CartIcon/>
        </div>
        )}
          {hidden ? null :
            <AccountDropdown />}  
    </div>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectAccountHidden
})

export default connect(mapStateToProps)(Header);
