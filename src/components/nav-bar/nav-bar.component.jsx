import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectNav } from "../../redux/directory/directory.selector";

import  NavItem from '../nav-item/nav-item.component'

import "./nav-bar.styles.scss" 

const NavBar = ({ nav }) => (
    <div className="nav-bar">
    {nav.map(({ id, ...otherSectionProps }) => (
      <NavItem key={id} {...otherSectionProps} />
      ))}{" "}
    </div>
)

const mapStateToProps = createStructuredSelector({
    nav: selectNav
})

export default connect(mapStateToProps)(NavBar)