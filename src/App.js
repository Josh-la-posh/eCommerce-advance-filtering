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

  const handleInputChabge = e => {
    setQuery(e.target.value);
  }

  const filteredItems = products.filter(product =>
   product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));

  //---------Radio Filter ---------
  const hangdleChange = e => {
    setSelectedCategory(e.target.value)
  }

  //---------Button Filter ---------
  const handleClick = e => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products
    //Filtering Input Items
    if (query) {
      filteredProducts = filteredItems
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.fitler(
        ({category, color, company, newPrice, title}) => 
        category === selected || 
        color === selected || 
        company || selected || 
        newPrice === selected || 
        title === selected
        );
    }
    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => {
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    })
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar hangdleChange={hangdleChange}/>
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
