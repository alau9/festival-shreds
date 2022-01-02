import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
    const{ name, price, imageUrl} = item;
    
    return(
    <div className='collection-item'>
        <div 
        className='image'
        style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{parseFloat(price.toFixed(2))}</span>
        </div>
        <button className="add-to-cart" onClick={() => addItem(item)} >
            Add to cart</button>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)