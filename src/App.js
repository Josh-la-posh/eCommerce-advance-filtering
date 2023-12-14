import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from './Recommended/Recommended';
import Category from "./Sidebar/Category/Category";
import Color from "./Sidebar/Color/Color";
import Price from "./Sidebar/Price/Price";

function App() {
  return (
    <>
      <Navigation />
      <Recommended />
      <Products />
      <Category />
      <Color />
      <Price />
    </>
  );
}

export default App;
