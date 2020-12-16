import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {UserDataContext} from '../../context/UserContext.js'


function RecipeOne(){
    const {day, recipe } = useContext(UserDataContext);
    const [dayID, updateDay] = day;
    const [recipeID, updateRecipeID] = recipe;
    
    useEffect(()=>{
        console.log(dayID);
        console.log(recipeID);
    },[])


    return(
        <div>
            <Link to='/recipes'> <button>Back</button> </Link>
            <h3>This is recipe One</h3>
        </div>
    )
}

export default RecipeOne;
