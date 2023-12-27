import Button from '../components/Button';
import './Recommended.css';

function Recommended({handleClick}) {
  return (
    <div className="">
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value='Nike' title='Nike'/>
        <Button onClickHandler={handleClick} value='adidas' title='Adidas'/>
        <Button onClickHandler={handleClick} value='puma' title='Puma'/>
        <Button onClickHandler={handleClick} value='vans' title='Vans'/>
      </div>
    </div>
  )
}

export default Recommended