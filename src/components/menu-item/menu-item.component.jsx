
import React from "react";
import "./menu-item.styles.scss"
import { useNavigate } from 'react-router';
import CustomButton from "../custom-button/custom-button.component";



const MenuItem = ({ imageUrl, linkUrl }) => {
    const navigate = useNavigate()

    return (
    
      <div className="menu-item" style={{
        backgroundImage: `url(${imageUrl})` }}
        onClick={() => navigate('checkout')}>
         <CustomButton>Shop</CustomButton>
      </div>

    )
}
export default MenuItem