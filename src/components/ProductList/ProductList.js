import { useState } from 'react';
import productsData from '../ProductsData/ProductsData';
import styles from './ProductList.module.css'

const getStarRating = (rating) => {
  const filledStars = '★'.repeat(Math.floor(rating));
  const halfStar = rating % 1 >= 0.5 ? '½' : '';
  const emptyStars = '☆'.repeat(5 - Math.ceil(rating));
  return filledStars + halfStar + emptyStars;
};

const ProductList = ({ selectedCategory }) => {
  const [showMore, setShowMore] = useState(false);
  const [nameFilter, setNameFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState(null);
  const [showAddToCartAlert, setShowAddToCartAlert] = useState(false);
  const [cartAlertProduct, setCartAlertProduct] = useState('');

  

  const handleLoadMore = () => {
    setShowMore(true);
  };

  const filteredProducts = showMore
    ? productsData[selectedCategory]
    : productsData[selectedCategory].slice(0, 10); // Limit to 10 products initially

  // Apply the name and price filters
  const filteredByName = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  // const filteredByPrice = filteredByName.filter((product) => {
  //   if (priceFilter === null || isNaN(priceFilter)) {
  //     return true; // If the price filter is empty or not a number, don't apply the filter
  //   }
  //   return product.price <= priceFilter;
  // });
  const parsedPriceFilter = parseFloat(priceFilter);

  const filteredByPrice = filteredByName.filter((product) => {
    if (priceFilter === null || isNaN(parsedPriceFilter)) {
      return true; // If the price filter is empty or not a valid number, don't apply the filter
    }
    return product.price === parsedPriceFilter; // Use >= to include products with prices greater than or equal to the filter
  });
  

  const totalProducts = productsData[selectedCategory].length;
  const displayedProducts = filteredByPrice.length;

  const buttonText = showMore ? 'Show Less' : 'Load More';

  const handleAddToCart = (productName) => {
    setCartAlertProduct(productName);
    setShowAddToCartAlert(true);
    setTimeout(() => {
      setShowAddToCartAlert(false);
    }, 3000); // Hide the alert after 3 seconds (3000 milliseconds)
  };

  return (
    <div>
      <h2>Products in {selectedCategory}</h2>
      <div className={styles.filter}>
        <input
          type="text"
          placeholder="Filter by name..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by price..."
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
      </div>
      <p>
        {displayedProducts} out of {totalProducts}
      </p>
      <div className={styles.productgrid}>
        {filteredByPrice.map((product) => (
          <div key={product.id} className={styles.producttile}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              {product.discountedPrice
              ? `Price: $${product.discountedPrice} (Discounted)`
              : `Price: $${product.price}`}
            </p>
            <div className={styles.ratings}>{getStarRating(product.rating)}</div>
            <button onClick={() => handleAddToCart(product.name)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {!showMore && productsData[selectedCategory].length > 10 && (
        <button onClick={handleLoadMore}>{buttonText}</button>
      )}
      {showAddToCartAlert && (
        <div className={styles.addToCartAlert}>
          {`${cartAlertProduct} added to cart!`}
        </div>
      )}
    </div>
  );
};

export default ProductList;







































































