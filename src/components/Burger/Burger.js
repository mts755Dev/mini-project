import React from 'react';
import './Burger.css';
import Body from '../Body/Body';

const burger = (props) => {
    let updatedIngredients = [];
    let ifEmpty = 'No Ingredients Added';

     props.ingredients.map(ingredient => {
        for(let i=1; i<=ingredient.qty ; i++)
            {updatedIngredients.push( <Body type= {ingredient.name} />)}
        })

    return(
       <div className='Burger'>
        <Body type='bread-top' />
        {updatedIngredients.length ? updatedIngredients : ifEmpty}
        <Body type='bread-bottom' />
        </div>
    );
}

export default burger;
