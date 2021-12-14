import React from "react";
import "./menu-item.styles.scss"
import { useNavigate } from 'react-router';



const MenuItem = ({ imageUrl, linkUrl }) => {
    const navigate = useNavigate

    return (
    
      <div className="menu-item" style={{
        backgroundImage: `url(${imageUrl})` }}
        onClick={() => navigate(linkUrl)}>
         <h1 className="title">SHOP</h1>
      </div>

    )
}
export default MenuItem