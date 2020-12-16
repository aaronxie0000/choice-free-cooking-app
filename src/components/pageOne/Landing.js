import React from 'react';
import SignIn from '../SignIn.js'
import { Link } from 'react-router-dom';
import './landing_styles/landing.css'
import figure from '../../assets/undrawFigure.svg';


function Landing(){

    return(
        <div className='landing'>
            <div className="landing__mainText">
                <p>Choice-free Cooking</p>
                <Link to='/recipes'> <button className="landing__enter">Starts Here</button> </Link>
            </div>
            <img src={figure} alt='Cartoon Drawings form Undraw' className="landing__figure"></img>
            <SignIn></SignIn>
        </div>
       
    )
}

export default Landing;
