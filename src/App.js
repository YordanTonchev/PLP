import { useState } from 'react';
import { products } from "./components/Data/Data";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProductGrid } from "./components/ProductTile/ProductGrid";
import {Filter} from "./components/Filter/Filter";
import styles from './App.module.css'


function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const applyFilters = (priceFilter, nameFilter) => {
    let filtered = products;

    if (priceFilter) {
      filtered = filtered.filter((product) => product.price === priceFilter);
    }

    if (nameFilter) {
      filtered = filtered.filter((product) => product.name === nameFilter);
    }

    setFilteredProducts(filtered);
  };
  return (
    <div className={styles.App}>
      <div className={styles.maincontainer}>
      <Header/>
      <Filter products={products} applyFilters={applyFilters} />
      <ProductGrid products={filteredProducts} maxColumns={2} maxRows={5}/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
