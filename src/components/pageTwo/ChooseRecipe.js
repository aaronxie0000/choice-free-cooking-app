import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './chooseRecipe_styles/chooseRecipe.css'

import SignIn from '../SignIn.js';
import ChangeDay from './ChangeDay.js';
import RecipeCardOne from './RecipeCardOne.js';
import RecipeCardTwo from './RecipeCardTwo.js';
import DayTech from './DayTech.js'


import firebase from '../../firebase.js'
import { DayContext } from '../../context/DayContext.js';



function ChooseRecipe() {
    const [loading, updateLoad] = useState(true)
    const [dayID, updateDay] = useContext(DayContext);

    const [dayData, updateDayData] = useState([]);
    const [recipeDataOne, updateRecipeOne] = useState({});
    const [recipeDataTwo, updateRecipeTwo] = useState({});


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


    }, []);



    if (loading) {
        return (
            <h3>Loading....</h3>
        )
    }
    else {
        //this if else statement is super important, or else is loading these components before their prop is ready
        return (
            <div className='chooseRecipe'>
                <div className='chooseRecipe__nav'>
                    <div> <SignIn specificClassName={'chooseRecipe__nav__signIn'}></SignIn> </div>
                    <Link to='/' tyle={{ textDecoration: 'none' }}><button className={'chooseRecipe__nav__home'}>Home</button></Link>
                </div>

                <ChangeDay myClassName={'chooseRecipe__day'} changeDay={updateDay} curDay={dayID}></ChangeDay>
                <div className='chooseRecipe__mainContent'>
                    <h1 className='chooseRecipe__title'>Today's Focus</h1>
                    <div className='chooseRecipe__tech'>
                        <DayTech givenClassName='chooseRecipe__tech__one' techNo='1' techDesc={dayData.dayTech[0]}></DayTech>
                        <DayTech givenClassName='chooseRecipe__tech__two' techNo='2' techDesc={dayData.dayTech[1]}></DayTech>
                    </div>
                </div>
                <Link to='/recipes/one' className={'chooseRecipe__cardOne'} style={{ textDecoration: 'none' }}> <RecipeCardOne recipeData={recipeDataOne}></RecipeCardOne> </Link>
                <Link to='/recipes/two' className={'chooseRecipe__cardTwo'} style={{ textDecoration: 'none' }}> <RecipeCardTwo recipeData={recipeDataTwo}></RecipeCardTwo> </Link>
            </div>

        )
    }
}

export default ChooseRecipe;
