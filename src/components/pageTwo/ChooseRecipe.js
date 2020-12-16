import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


import SignIn from '../SignIn.js';
import ChooseDay from './changeDay.js';
import RecipeCardOne from './RecipeCardOne.js';
import RecipeCardTwo from './RecipeCardTwo.js';


import firebase from '../../firebase.js'



function ChooseRecipe(){
    
    const ref =firebase.firestore().collection('recipeDetail');

    useEffect(()=>{
        ref.onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc) =>{
                console.log(doc.data())
            })
        })
    });


    return(
        <div>
            <Link to='/'><button>Back</button></Link>
            <ChooseDay></ChooseDay>
            {/* these will all become components */}
            <Link to='/recipes/one'> <RecipeCardOne></RecipeCardOne> </Link>
            <Link to='/recipes/two'> <RecipeCardTwo></RecipeCardTwo> </Link>
            <SignIn></SignIn>
        </div>
     
    )
}

export default ChooseRecipe;
