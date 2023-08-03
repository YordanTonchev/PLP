import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
// import productsData from './productsData';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Rifle');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="App">
      <Header
      selectedCategory={selectedCategory}
      onCategoryChange={handleCategoryChange} 
      />
      
      <ProductList
      selectedCategory={selectedCategory}
      />
      <Footer/>
    </div>
  );
}

export default App;
