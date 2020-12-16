import React, { useEffect } from 'react';
import firebase from '../../firebase.js'


function RecipeCardOne(){

    const ref =firebase.firestore().collection('recipeDetail');

    useEffect(()=>{
        ref.onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc) =>{
                console.log(doc.data())
            })
        })
    },[]);

    return(
        <h3>Recipe Card One</h3>
    )
}

export default RecipeCardOne;
