import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import SignIn from '../SignIn.js';
import ChangeDay from './ChangeDay.js';
import RecipeCardOne from './RecipeCardOne.js';
import RecipeCardTwo from './RecipeCardTwo.js';
import DayTech from './DayTech.js'


import { DayContext } from '../../context/DayContext.js';
import { RecipeContext } from '../../context/RecipeContext'

import './chooseRecipe_styles/chooseRecipe.css'

import firebase from '../../firebase.js'



function ChooseRecipe() {
    const [loading, updateLoad] = useState(true);

    const [dayID, updateDay] = useContext(DayContext);
    const [recipeID, updateRecipeID] = useContext(RecipeContext);


    const [dayData, updateDayData] = useState([]);
    const [recipeDataOne, updateRecipeOne] = useState({});
    const [recipeDataTwo, updateRecipeTwo] = useState({});


    //fetching firestore data and assinging them to the states for storage
    useEffect(() => {
        updateLoad(true);

        const tempRecipeData = []

        firebase.firestore().collection('recipeSelect').where('day', '==', dayID)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
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

                    tempRecipeData.push(...[firstRecipe, secondRecipe]);
                    updateDayData(rawDayData);
                })
                updateRecipeOne(tempRecipeData[0]);
                updateRecipeTwo(tempRecipeData[1]);
                updateLoad(false)
            })


    }, [dayID]);



    if (loading) {
        return (
            <div style={{width:'100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <h1>Loading...</h1>
            </div>
        )
    }
    else {
        //this if else statement is super important, or else is loading these components before their prop is ready
        return (
            <div className='chooseRecipe'>
                <div className='chooseRecipe__nav'>
                    <SignIn specificClassName={'chooseRecipe__nav__signIn'}></SignIn>
                    <Link to='/' tyle={{ textDecoration: 'none' }}><button className={'chooseRecipe__nav__home'}>Home</button></Link>
                </div>

                <ChangeDay myClassName={'chooseRecipe__day'} curDay={dayID}></ChangeDay>

                <div className='chooseRecipe__mainContent'>
                    <h1 className='chooseRecipe__title'>Today's Focus</h1>
                    <div className='chooseRecipe__tech'>
                        <DayTech givenClassName='chooseRecipe__tech__one' techNo='1' techDesc={dayData.dayTech[0]}></DayTech>
                        <DayTech givenClassName='chooseRecipe__tech__two' techNo='2' techDesc={dayData.dayTech[1]}></DayTech>
                    </div>
                </div>
                <Link to='/recipes/selected' className={'chooseRecipe__cardOne'} style={{ textDecoration: 'none' }} onClick={() => updateRecipeID(recipeDataOne.recipeOneID)}> <RecipeCardOne recipeData={recipeDataOne}></RecipeCardOne> </Link>
                <Link to='/recipes/selected' className={'chooseRecipe__cardTwo'} style={{ textDecoration: 'none' }} onClick={() => updateRecipeID(recipeDataTwo.recipeTwoID)}> <RecipeCardTwo recipeData={recipeDataTwo}></RecipeCardTwo> </Link>
            </div>

        )
    }
}

export default ChooseRecipe;
