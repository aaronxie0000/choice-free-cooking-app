import React, { useContext } from 'react';
import {RecipeContext} from '../../context/RecipeContext'

function RecipeCardTwo( {recipeData: {recipeTwoID, recipeTwoTitle, recipeTwoDesc} }){
    const [recipeID, updateRecipeID] = useContext(RecipeContext);
    

    function passRecipeID(){
        updateRecipeID(recipeTwoID)
    }



    return(

        <div onClick={passRecipeID}>
            <p>{recipeTwoTitle}</p>
            {recipeTwoDesc.map((desc, index)=>{
                return <p key={index}>{desc}</p>
            })}
        </div>
    )
}

export default RecipeCardTwo;
