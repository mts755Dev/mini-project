import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import IngredientsSet from '../IngredientsSet/IngredientsSet';

class BurgerBase extends Component{

      constructor(){
          super();

          this.state={
              ingredients:[
                  {name:'lettuce', label:'Lettuce', qty:0, price:0.50, disable:true},
                  {name:'bacon', label:'Bacon', qty:0, price:0.30, disable:true},
                  {name:'cheese', label:'Cheese', qty:0, price:0.40, disable:true},
                  {name:'meat', label:'Meat', qty:0, price:1.30, disable:true},
              ],
              totalPrice:3.00
          }

          this.addItems= (type)=> {
              const updatedIngredients= this.state.ingredients.map(ingredient =>{
              if(ingredient.name === type)
              {
                  ingredient.qty++;
                  ingredient.disable= false;
                  this.state.totalPrice= this.state.totalPrice + ingredient.price;
              }
                return ingredient;
            });

           this.setState({
              ingredients: [].concat(updatedIngredients),
          })}

          this.removeItems= (type)=> {
              const updatedIngredients= this.state.ingredients.map(ingredient =>{
            if(ingredient.name === type)
             {
                   if(ingredient.qty > 0)
                   {
                       ingredient.qty--;
                       ingredient.disable= false;
                       this.state.totalPrice= this.state.totalPrice - ingredient.price;
                   }
                   if(ingredient.qty === 0)
                   {
                       ingredient.disable= true;
                   }
             }
               return ingredient;
            });

           this.setState({
              ingredients: [].concat(updatedIngredients),
          })}


      }

  render() {
    return (
       <div>
          <Burger ingredients={this.state.ingredients} />
          <IngredientsSet removeItems={this.removeItems} addItems={this.addItems} totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} />
       </div>
    );
  }
}

export default BurgerBase;
