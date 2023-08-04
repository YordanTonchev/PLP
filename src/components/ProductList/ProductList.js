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
  const [sortCriteria, setSortCriteria] = useState('name'); 
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [showAddToCartAlert, setShowAddToCartAlert] = useState(false);
  const [cartAlertProduct, setCartAlertProduct] = useState('');

  

  const handleLoadMore = () => {
    setShowMore(true);
  };

  const filteredProducts = showMore
    ? productsData[selectedCategory]
    : productsData[selectedCategory].slice(0, 10);
     
  const handleSort = (criteria) => {
      if (sortCriteria === criteria) {
        // If clicked on the same criteria, toggle the sorting order
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      } else {
        // If clicked on a different criteria, set the new sorting criteria and default to ascending order
        setSortCriteria(criteria);
        setSortOrder('asc');
      }
    };
  

  // Apply the name and price filters
  const filteredByName = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const parsedPriceFilter = parseFloat(priceFilter);

  const filteredByPrice = filteredByName.filter((product) => {
    if (priceFilter === null || isNaN(parsedPriceFilter)) {
      return true; 
    }
    return product.price === parsedPriceFilter; 
  });
  const sortedProducts = filteredByPrice.sort((a, b) => {
    // Compare based on the selected sorting criteria
    if (sortCriteria === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortCriteria === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortCriteria === 'rating') {
      return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
    }
    return 0;
  });
  

  const totalProducts = productsData[selectedCategory].length;
  const displayedProducts = sortedProducts.length;

  const buttonText = showMore ? 'Show Less' : 'Load More';

  const handleAddToCart = (productName) => {
    setCartAlertProduct(productName);
    setShowAddToCartAlert(true);
    setTimeout(() => {
      setShowAddToCartAlert(false);
    }, 3000); 
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
      <div className={styles.productCounter}>
        {displayedProducts} out of {totalProducts}
      </div>
      <div className={styles.sorting}>
        <button
          className={sortCriteria === 'name' ? styles.activeButton : styles.sortButton}
          onClick={() => handleSort('name')}
        >
          Sort by Name
        </button>
        <button
          className={sortCriteria === 'price' ? styles.activeButton : styles.sortButton}
          onClick={() => handleSort('price')}
        >
          Sort by Price
        </button>
        <button
          className={sortCriteria === 'rating' ? styles.activeButton : styles.sortButton}
          onClick={() => handleSort('rating')}
        >
          Sort by Rating
        </button>
      </div>
      <div className={styles.productgrid}>
        {sortedProducts.map((product) => (
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
        <button className={styles.loadMoreButton}
        onClick={handleLoadMore} >{buttonText}</button>
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







































































