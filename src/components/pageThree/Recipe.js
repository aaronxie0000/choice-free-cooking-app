
import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase.js'

import { RecipeContext } from '../../context/RecipeContext.js'

import './recipe_styles/recipe.css'
import backArrow from '../../assets/arrow3.svg'



//to recipe components because the left and right options are styled differently
function Recipe() {


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

                <Switch>
                    <Route exact path='/recipes/selected'><ChooseContent></ChooseContent></Route>
                    <Route path='/recipes/selected/detail'> <Details recipeData={recipeData}></Details> </Route>
                    <Route path='/recipes/selected/notes'> <Notes recipeData={recipeData}></Notes></Route>
                    <Route path='/recipes/selected/tech' > <Tech recipeData={recipeData}></Tech></Route>
                    <Route path='/recipes/selected/concept'><Concept recipeData={recipeData}></Concept></Route>

                </Switch>

            </div>
        )
    }

}



function ChooseContent() {

    return (
        <div className="recipePanel__content">
            <Link to='/recipes/selected/detail' className="recipeContent__instruct">
                <h3>The Recipe</h3>
            </Link>
            <Link to='/recipes/selected/notes' className="recipeContent__notes">
                <h3>Quick Notes</h3>
            </Link>
            <Link to='/recipes/selected/tech' className="recipeContent__technique">
                <h3>Technique Notes</h3>
            </Link>
            <Link to='/recipes/selected/concept' className="recipeContent__concept">
                <h3>Concept Notes</h3>
            </Link>
        </div>
    )
}

function Details(props) {

    console.log(props.recipeData)

    return (
        <div className='recipeDetail'>
            <Link to='/recipes/selected' className="recipeDetail__back">X</Link>
            <h1 className='recipeDetail__header'>The Recipe</h1>
            <iframe className="recipeDetail__video" title="recipe video" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
            <div className="recipeDetail__notes">
                <h1>Notes</h1>
                <ul>
                    <li>Please be careful</li>
                </ul>
            </div>
        </div>
    )
}

function Notes(props) {
    return (
        <div className="recipeNotes">
            <Link to='/recipes/selected' className="recipeDetail__back">X</Link>
            <h1 className='recipeNotes__header'>Summary</h1>
        </div>
    )
}

function Tech(props) {
    return (
        <div className="recipeTech">
            <Link to='/recipes/selected' className="recipeDetail__back">X</Link>
            <h1 className='recipeTech__header'>Techniques</h1>
        </div>
    )
}

function Concept(props) {
    return (
        <div className="recipeConcept">
            <Link to='/recipes/selected' className="recipeDetail__back">X</Link>
            <h1 className='recipeConcept__header'>Concept</h1>
        </div>
    )
}

export default Recipe;
