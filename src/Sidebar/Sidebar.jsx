import Category from './Category/Category';
import Color from './Color/Color';
import Price from './Price/Price';
import './Sidebar.css';
import { BsCart } from 'react-icons/bs';

function Sidebar() {
  return (
    <section className="sidebar">
        <div className="logo-container">
            <h1>Cart Icon</h1>
        </div>


        <Category />
        <Price />
        <Color />
    </section>
  )
}

export default Sidebar