import Ingredient from './Ingredient/Ingredient';
import './IngredientsSet.css'
const IngredientsSet = (props) => {
  return (
    <div className='BuildControls'>
      <p className='price'><strong>Current Price: {'$' + props.totalPrice.toFixed(2)}</strong></p>
      {props.ingredients.map(ingredient =>
        <Ingredient
          key={ingredient.name}
          label={ingredient.label}
          addItems={() =>props.addItems(ingredient.name)}
          removeItems={() =>props.removeItems(ingredient.name)}
          disable={ingredient.disable}
        />
        )}
    </div>
  );
}

export default IngredientsSet;
