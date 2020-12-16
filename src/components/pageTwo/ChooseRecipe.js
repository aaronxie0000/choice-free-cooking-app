import React, { useEffect } from 'react';
import SignIn from '../SignIn.js';
import ChooseDay from './ChooseDay.js';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import RecipeCardOne from './RecipeCardOne.js'
import RecipeCardTwo from './RecipeCardTwo.js'


function ChooseRecipe(){

    useEffect(()=>{
        console.log('Choose Recipe Day')
    },[])

    return(
        <div>
            <ChooseDay></ChooseDay>
            {/* these will all become components */}
            <Switch>
                <Route Link='/recipes/choiceone' exact component={RecipeCardOne} ></Route>
                <Route Link='/recipes/choicetwo' exact component={RecipeCardTwo} ></Route>
            </Switch>
            <SignIn></SignIn>
        </div>
     
    )
}

export default ChooseRecipe;
