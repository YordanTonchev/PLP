import { useState } from 'react';
import styles from './Filter.module.css'

export const Filter = ({ products, applyFilters }) => {
  const [selectedName, setSelectedName] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const names = [...new Set(products.map((product) => product.name))];
  const prices = [...new Set(products.map((product) => product.price))];

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
    applyFilters(selectedPrice, event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    applyFilters(event.target.value, selectedName);
  };

  return (
    <div className={styles.filter}>
      <h2>Filter</h2>
      <div className={styles.filteroption}>
        <label htmlFor="name">Name:</label>
        <select id="name" value={selectedName} onChange={handleNameChange}>
          <option value="">All</option>
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filteroption}>
        <label htmlFor="price">Price:</label>
        <select id="price" value={selectedPrice} onChange={handlePriceChange}>
          <option value="">All</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};


