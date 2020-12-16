import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';


import SignIn from '../SignIn.js';
import ChooseDay from './changeDay.js';
import RecipeCardOne from './RecipeCardOne.js';
import RecipeCardTwo from './RecipeCardTwo.js';


import firebase from '../../firebase.js'
import { DayContext } from '../../context/DayContext.js';



function ChooseRecipe(){
    const [loading, updateLoad] = useState(true)
    const [dayID, updateDay] = useContext(DayContext);
    
    const [dayData, updateDayData] = useState({});
    const [recipeDataOne, updateRecipeOne] = useState({});
    const [recipeDataTwo, updateRecipeTwo] = useState({});


    useEffect(()=>{
        updateLoad(true);
        console.log(dayID);

        const tempRecipeData = []

        firebase.firestore().collection('recipeSelect').where('day','==',dayID)
        .onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc) =>{
                console.log('queryed')
                const rawData = doc.data();
                const firstRecipe = {
                    recipeOneID: rawData.recipeOneID,
                    recipeOneTitle: rawData.recipeOneTitle,
                    recipeOneDesc: rawData.recipeOneDesc,
                }
                const secondRecipe = {
                    recipeTwoID: rawData.recipeTwoID,
                    recipeTwoTitle: rawData.recipeTwoTitle,
                    recipeTwoDesc: rawData.recipeTwoDesc,
                }
                const rawDayData = {
                    day: rawData.day,
                    dayTech: rawData.dayTech
                }

                tempRecipeData.push(...[firstRecipe,secondRecipe]);
                updateDayData(rawDayData);
            })
            updateRecipeOne(tempRecipeData[0]);
            updateRecipeTwo(tempRecipeData[1]);
            updateLoad(false)
        })
       
        
    },[]);

    if (loading){
        return(
            <h3>Loading....</h3>
        )
    }
    else{
        //this if else statement is super important, or else is loading these components before their prop is ready
        return(
            <div>
                <Link to='/'><button>Back</button></Link>
                <ChooseDay changeDay={updateDay}></ChooseDay>
                {/* these will all become components */}
                <Link to='/recipes/one'> <RecipeCardOne recipeData={recipeDataOne}></RecipeCardOne> </Link>
                <Link to='/recipes/two'> <RecipeCardTwo recipeData={recipeDataTwo}></RecipeCardTwo> </Link>
                <SignIn></SignIn>
            </div>
         
        )
    }
}

export default ChooseRecipe;
