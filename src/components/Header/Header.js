// Header.js
import React from 'react';
import styles from './Header.module.css'

const Header = ({ selectedCategory, onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <header className={styles.header}>
    <div className={styles.headercontent}>
      <div className={styles.logo}>
        <img src="/pic1.jpg" alt="Your Logo" /> 
      </div>
      <nav>
        <ul>
          <li onClick={() => handleCategoryClick('Rifle')}>
            Rilfe
          </li>
          <li onClick={() => handleCategoryClick('Pistol')}>
            Pistol
          </li>
          <li onClick={() => handleCategoryClick('Knife')}>
            Knife
          </li>
          
        </ul>
      </nav>
    </div>
      
    </header>
  );
};

export default Header;

