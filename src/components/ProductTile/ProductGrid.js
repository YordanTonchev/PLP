import styles from './ProductGrid.module.css'
import { useState } from 'react';


export const ProductGrid = ({ products, maxRows, maxColumns }) => {
  const totalItems = Math.min(products.length, maxRows * maxColumns);
  const ProductsCount = products.slice(0, totalItems).length;
  const [clickedItemId, setClickedItemId] = useState(null);

  const handleAddToCart = () => {
    setClickedItemId(products.id);
    setTimeout(() => setClickedItemId(null), 2000); 
  };

  return (
    <div>
    <div
      className={styles.productgrid}
      style={{
        gridTemplateRows: `repeat(${maxRows}, 1fr)`,
        gridTemplateColumns: `repeat(${maxColumns}, 1fr)`,
      }}
    >
      {products.slice(0, totalItems).map((product) => (
        <div key={product.id} className={styles.productitem}>
        {clickedItemId === product.id && <div className="alert">Product added to cart</div>}
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <div className={styles.ratings}>
            <span>Rating: {product.rating} stars</span>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ))}
    </div>
    <div className={styles.productcounter}>
        <p>Currently displayed: {ProductsCount} products</p>
    </div>
    </div>
  );
};











