import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  label: string;
  link: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, image }) => {
  return (
    <Link to={link} className="menu-item" style={{ backgroundImage: `url(${image})` }}>
      <div className="menu-content">
        <h2>{label}</h2>
      </div>
    </Link>
  );
};

export default MenuItem;
