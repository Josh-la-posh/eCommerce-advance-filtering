import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from './Recommended/Recommended';
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  //---------Input Filter ---------

  const handleInputChange = e => {
    setQuery(e.target.value);
  }

  const filteredItems = products.filter(product =>
   product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

  //---------Radio Filter ---------
  const handleChange = e => {
    setSelectedCategory(e.target.value)
  }

  //---------Button Filter ---------
  const handleClick = e => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    
    //Filtering Input Items

    if (query) {
      filteredProducts = filteredItems
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        (product) => 
        product.category === selected || 
        product.color === selected || 
        product.company || selected || 
        product.newPrice === selected || 
        product.title === selected
        );
    }
    return filteredProducts.map(
      ({img, title, star, reviews, prevPrice, newPrice, category}) =>
       (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
        category={category}
      />
    ));
  }
  const result = filteredData(products, selectedCategory, query);
  
  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick} />
      <Products result={result}/>
    </>
  );
}

export default App;
