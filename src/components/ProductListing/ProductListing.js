import React from 'react';
import Product from '../Product'

const products = [
  {
    id: 1,
    name: 'T-Shirt Blue',
    thumbnail: 'tshirt-blue.jpg',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Dress Floral',
    thumbnail: 'dress-floral.jpg',
    price: 49.99,
  },
  // Add more product objects here...
];

export const ProductListing = () => {
  return (
    <div className="product-listing">
      <h1>Product Listing</h1>
      <div className="products-container">
        {products.map((Product) => (
          <Product
            key={Product.id}
            name={Product.name}
            thumbnail={Product.thumbnail}
            price={Product.price}
          />
        ))}
      </div>
    </div>
  );
};


