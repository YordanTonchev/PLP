
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
          RIFLES
          </li>
          <li onClick={() => handleCategoryClick('Pistol')}>
            PISTOLS
          </li>
          <li onClick={() => handleCategoryClick('Spray')}>
            SPRAYS
          </li>
          
        </ul>
      </nav>
    </div>
      
    </header>
  );
};

export default Header;

