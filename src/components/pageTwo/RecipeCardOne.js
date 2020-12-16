import React, { useContext } from 'react';
import {RecipeContext} from '../../context/RecipeContext'


function RecipeCardOne({recipeData:{recipeOneID, recipeOneTitle, recipeOneDesc}}){
    const [recipeID, updateRecipeID] = useContext(RecipeContext);

    function passRecipeID(){
        updateRecipeID(recipeOneID)
    }


    return(
        <div onClick={passRecipeID}>
            <p>{recipeOneTitle}</p>
            {recipeOneDesc.map((desc, index)=>{
                return <p key={index}>{desc}</p>
            })}
        </div>
    )
}

export default RecipeCardOne;



