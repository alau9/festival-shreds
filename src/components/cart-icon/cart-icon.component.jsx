import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector  } from 'reselect';
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { useNavigate } from 'react-router';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ( {itemCount} ) => {
    const navigate = useNavigate();
    return(
    <div className="cart-icon" onClick={() => {
        navigate('checkout');
}} > 
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">{itemCount}</span>
    </div>
)}



const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps
)(CartIcon)