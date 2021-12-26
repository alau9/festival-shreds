import React from "react";
import "./account-dropdown.styles.scss";
import { connect } from 'react-redux' 
import { auth } from "../../firebase/firebase.utils";
import { toggleAccountHidden } from "../../redux/account/account.action";

const AccountDropdown = ({toggleAccountHidden}) => (
  <div>
    <ul className="account-dropdown">
      <li className="dropdown-content">My Orders</li>
      <li className="dropdown-content">View Profile</li>
      <li className="dropdown-content">My Wishlist</li>
      <li className="dropdown-content">Edit Profile</li>
      <li className="dropdown-content" 
        onClick={() => {
          auth.signOut();
          toggleAccountHidden()
        }}
        >Logout</li>
    </ul>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleAccountHidden: () => dispatch(toggleAccountHidden())
})

export default connect(
  null,
  mapDispatchToProps
)(AccountDropdown);
