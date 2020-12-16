import {createContext, useState} from 'react'

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
    const [recipeID, updateRecipeID] = useState();

    return(
        <RecipeContext.Provider value={[recipeID,updateRecipeID]}>
            {props.children}
        </RecipeContext.Provider>
    )

}

