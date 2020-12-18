import React, { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext'


function RecipeCardOne({ recipeData: { recipeOneID, recipeOneTitle, recipeOneDesc } }) {
    const [recipeID, updateRecipeID] = useContext(RecipeContext);

    function passRecipeID() {
        updateRecipeID(recipeOneID)
    }


    return (

        // move onClick={passRecipeID} up to the Link comp (which becomes an a comp); as that is the entire card, this div is just for styling

        <div>
            <h3 className={'chooseRecipe__cardOne__title'}>{recipeOneTitle}</h3>
            <h5 className={'chooseRecipe__cardOne__header'}>You'll Need:</h5>
            {recipeOneDesc.map((desc, index) => {
                return <p className={'chooseRecipe__cardOne__desc'} key={index}>{desc}</p>
            })}
            <p className={'chooseRecipe__cardTwo__desc'} >.....</p>

        </div>
    )
}

export default RecipeCardOne;



