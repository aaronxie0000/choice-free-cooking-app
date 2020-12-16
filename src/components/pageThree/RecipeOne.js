import React from 'react';
import { Link } from 'react-router-dom';


function RecipeOne(){
  

    return(
        <div>
            <Link to='/recipes'> <button>Back</button> </Link>
            <h3>This is recipe One</h3>
        </div>
    )
}

export default RecipeOne;
