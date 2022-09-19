import React, {useState } from 'react';
import Burger from '../Burger/Burger';
import IngredientsSet from '../IngredientsSet/IngredientsSet';
const BurgerBase = () => {
    const [totalPrice, setTotalPrice] = useState(3.00);
    const[ingredients, setIngredient] = useState([
        {name:'lettuce', label:'Lettuce', qty:0, price:0.50, disable:true},
        {name:'bacon', label:'Bacon', qty:0, price:0.30, disable:true},
        {name:'cheese', label:'Cheese', qty:0, price:0.40, disable:true},
        {name:'meat', label:'Meat', qty:0, price:1.30, disable:true},
    ]);

    const addItems= (type)=> {
        const updatedIngredients = ingredients.map(ingredient =>{
            if(ingredient.name === type)
                {ingredient.qty++;
                ingredient.disable= false;
                setTotalPrice(totalPrice + ingredient.price)}
            return ingredient;
        });
        setIngredient([].concat(updatedIngredients))
    }

    const removeItems= (type)=> {
        const updatedIngredients = ingredients.map(ingredient =>{
            if(ingredient.name === type)
                {if(ingredient.qty > 0)
                    {ingredient.qty--;
                    ingredient.disable= false;
                    setTotalPrice(totalPrice - ingredient.price)}
                if(ingredient.qty === 0)
                    {ingredient.disable = true;}}
            return ingredient;
        });
        setIngredient([].concat(updatedIngredients))
    }

    return (
       <div>
          <Burger ingredients = {ingredients} />
          <IngredientsSet removeItems = {removeItems} addItems = {addItems} totalPrice = {totalPrice} ingredients = {ingredients} />
       </div>
    );
}

export default BurgerBase;
