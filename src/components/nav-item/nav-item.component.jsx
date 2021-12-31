import React from 'react';
import { useNavigate } from 'react-router';
 
import './nav-item.styles.scss';
 
const NavItem = ({ title, linkUrl }) => {
  const navigate = useNavigate();
 
  return (
    <div className='nav-item' onClick={() => navigate(linkUrl)}>
        <div className="title">{title.toUpperCase()}</div>
      </div>
  );
};

export default NavItem;