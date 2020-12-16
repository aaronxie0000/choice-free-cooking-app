import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {RecipeContext} from '../../context/RecipeContext.js'
import { useHistory } from "react-router-dom";


import firebase from '../../firebase.js'



//to recipe components because the left and right options are styled differently
function RecipeTwo(){
    const [loading, updateLoad] = useState(true)
    const [recipeID, updateRecipeID] = useContext(RecipeContext)
    const [recipeData, updateRecipeData] = useState({
        recipeTitle: '',
        steps: [],
    })

     //if reload page, have to go back and reselect recipe (unlike day, recipe does not have default)
     let routerHis = useHistory();
     if(recipeID==null){
         routerHis.push('/recipes')
     }

     

    useEffect(()=>{
        updateLoad(true);

        var unsubscribe = firebase.firestore().collection('recipeDetail').where('recipeID','==',recipeID || 0)
          .onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc) =>{
                const rawData = doc.data();

                updateRecipeData({
                    recipeTitle: rawData.recipeTitle,
                    steps: rawData.steps
                })

            })
            updateLoad(false)
         }, error=>{
             console.log(error);
         })
         
         return () => unsubscribe()

    },[]);


    if (loading){
        return(
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
    else{
        return(
            <div>
                <Link to='/recipes'> <button>Back</button> </Link>
                <p>Hi: {recipeData.recipeTitle}</p>
                {recipeData.steps.map((step, index)=>{
                    return <p key={index}>{step}</p>
                })}
            </div>
        )
    }
    
}

export default RecipeTwo;


