import React from 'react';
import SignIn from '../SignIn.js'
import { Link } from 'react-router-dom';
import './landing_styles/landing.css'
import figure from '../../assets/undrawFigure.svg';
import arrow from '../../assets/arrow.svg'


function Landing(){

    return(
        <div className='landing'>
            <SignIn></SignIn>
            <div className="landing__mainText">
                <h1>Choice-free Cooking</h1>
                <Link to='/recipes'> <button className="landing__enter">Starts Here</button> </Link>
            </div>
            <img src={figure} alt='Cartoon Drawings form Undraw' className="landing__figure"></img>
            <div className="landing__infoText">
                <h3>Trying to learn how to cook but <span style={{color:'#DB5461'}}>overwhelmed</span> by all the recipes across the web? Choice-free Cooking will help you go from zero by teaching you key cooking skills across carefully selected recipes! </h3>
                <img src={arrow} alt='downwards arrow'></img>
            </div>
        </div>
       
    )
}

export default Landing;
