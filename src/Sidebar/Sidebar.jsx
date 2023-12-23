import Category from './Category/Category';
import Color from './Color/Color';
import Price from './Price/Price';
import './Sidebar.css';
import { BsCart } from 'react-icons/bs';

function Sidebar({handleChange}) {
  return (
    <section className="sidebar">
        <div className="logo-container">
            <h1>Cart Icon</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
    </section>
  )
}

export default Sidebar