import './Color.css';

function Color() {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <div>

      <label className="sidebar-label-container">
          <input type="radio" name='test3' />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test3' />
          <span className="checkmark"></span>Black
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test3' />
          <span className="checkmark"></span>Blue
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test3' />
          <span className="checkmark"></span>Red
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test3' />
          <span className="checkmark"></span>Green
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test3' />
          <span className="checkmark"></span>White
        </label>
      </div>
    </div>
  )
}

export default Color