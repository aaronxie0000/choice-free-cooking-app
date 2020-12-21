import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../../context/RecipeContext.js'
import { useHistory } from "react-router-dom";
import './recipe_styles/recipe.css'
import backArrow from '../../assets/arrow3.svg'

import { AnimateSharedLayout } from "framer-motion"


import firebase from '../../firebase.js'


//to recipe components because the left and right options are styled differently
function RecipeOne() {


    const [loading, updateLoad] = useState(true)
    const [recipeID, updateRecipeID] = useContext(RecipeContext)
    const [recipeData, updateRecipeData] = useState({
        recipeTitle: '',
        steps: [],
    })


    //if reload page, have to go back and reselect recipe (unlike day, recipe does not have default)
    let routerHis = useHistory();
    if (recipeID == null) {
        routerHis.push('/recipes');
    };


    useEffect(() => {
        updateLoad(true);

        var unsubscribe = firebase.firestore().collection('recipeDetail').where('recipeID', '==', recipeID || 0)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const rawData = doc.data();

                    updateRecipeData({
                        recipeTitle: rawData.recipeTitle,
                        steps: rawData.steps
                    })
                })
                updateLoad(false)
            })

        //there is error with clean up issue; this is because even though didn't write any, the firestore implements one; NOTE!! The function is defined from the return of the query
        return () => unsubscribe()

    }, []);



    if (loading) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
    else {
        return (
            <div className="recipePanel">


                <div className="recipePanel__title">
                    <Link className="recipePanel__title__back" to='/recipes'><img src={backArrow} alt="back arrow"></img></Link>
                    <h1>{recipeData.recipeTitle}</h1>
                </div>
                <div className="recipePanel__list">
                    <h3 className="recipePanel__list__title">Ingredients</h3>
                    <ul>
                        {recipeData.steps.map((step, index) => {
                            return <li key={index}>{step}</li>
                        })}
                    </ul>

                    <h3 className="recipePanel__list__title">Equipment</h3>
                    <ul>
                        {recipeData.steps.map((step, index) => {
                            return <li key={index}>{step}</li>
                        })}
                    </ul>

                </div>


                <div className="recipePanel__content">
                    <div className="recipeContent__instruct">
                        <h3>The Recipe</h3>
                    </div>
                    <div className="recipeContent__notes">
                        <h3>Quick Notes</h3>
                    </div>
                    <div className="recipeContent__technique">
                        <h3>Technique Notes</h3>
                    </div>
                    <div className="recipeContent__concept">
                       <h3>Concept Notes</h3>
                    </div>

                </div>
            </div>
        )
    }

}

export default RecipeOne;
