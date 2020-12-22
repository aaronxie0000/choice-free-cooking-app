import React, { useRef, useEffect } from 'react';
import SignIn from '../SignIn.js'
import { Link } from 'react-router-dom';
import './landing_styles/landing.css'
import figure from '../../assets/undrawFigure.svg';
import arrow from '../../assets/arrow.svg'


function Landing() {
    
    const downArrow = useRef();
  
    useEffect(() => {
        window.addEventListener('scroll', checkOnTop);
    },[])

    function checkOnTop() {
        if (downArrow.current === null){
            return; 
            // there is a werid bug where the .current becomes null then back to not null again and again
        }

        if (window.scrollY !== 0) {
            downArrow.current.className = 'landing__hiddenArrow';
        }
        else {
            downArrow.current.className = '';
        }
    }



    return (
        <div className='landing'>

            <SignIn specificClassName={'landing__signIn'}></SignIn>

            <div className="landing__mainText">
                <h1>Choice-free Cooking</h1>
                <Link to='/recipes'> <button className="landing__enter">Starts Here</button> </Link>
            </div>
            <img src={figure} alt='Cartoon Drawings form Undraw' className="landing__figure"></img>
            <div className="landing__infoText">
                <h3>Trying to learn how to cook but <span style={{ color: '#DB5461' }}>overwhelmed</span> by all the recipes across the web? Choice-free Cooking will help you go from zero by teaching you key cooking skills across carefully selected recipes! </h3>
                <img ref={downArrow} src={arrow} alt='downwards arrow'></img>
            </div>
        </div>

    )
}

export default Landing;
