import React from 'react';

function RecipeCardTwo( {recipeData: {recipeTwoID, recipeTwoTitle, recipeTwoDesc }}){

   
    return(

        // move onClick={passRecipeID} up to the Link comp (which becomes an a comp); as that is the entire card, this div is just for styling

        <div>
            <h3 className={'chooseRecipe__cardTwo__title'}>{recipeTwoTitle}</h3>
            <h5 className={'chooseRecipe__cardTwo__header'}>You'll Need:</h5>
            {recipeTwoDesc.map((desc, index)=>{
                return <p className={'chooseRecipe__cardTwo__desc'} key={index}>{desc}</p>
            })}
            <p className={'chooseRecipe__cardTwo__desc'} >.....</p>

        </div>
    )
}

export default RecipeCardTwo;
