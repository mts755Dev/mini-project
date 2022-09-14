import './Ingredient.css'
const Ingredient = (props) => {
  return (
    <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button disabled={props.disable} className='Less' onClick={props.removeItems}>Less</button>
    <button className='More' onClick={props.addItems}>More</button>
    </div>
   )
}

export default Ingredient;
