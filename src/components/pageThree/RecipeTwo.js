import React from 'react';
import { Link } from 'react-router-dom';


function RecipeTwo(){
    return(
        <div>
            <Link to='/recipes'> <button>Back</button> </Link>
            <h3>This is recipe Two</h3>
        </div>
    )
}

export default RecipeTwo;
