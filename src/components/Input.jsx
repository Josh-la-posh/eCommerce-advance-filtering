
function Input({ handleChange, value, title, name, color, bdCol }) {
  return (
    
    <label className="sidebar-label-container">
      <input onChange={handleChange} value={value} type="radio" name={name} />
      <span className="checkmark" style={{background: color, border: `2px solid ${bdCol}`}}></span>{title}
    </label>
  )
}

export default Input