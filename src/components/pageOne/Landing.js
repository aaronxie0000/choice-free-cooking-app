import React, { useRef, useEffect } from 'react';
import SignIn from '../SignIn.js'
import { Link } from 'react-router-dom';
import './landing_styles/landing.css'

import figure from '../../assets/undrawFigure.svg';
import arrow from '../../assets/arrow.svg';
import example1 from '../../assets/exampleOne.svg';
import example2 from '../../assets/exampleTwo.svg';


function Landing() {

    const downArrow = useRef();

    useEffect(() => {
        window.addEventListener('scroll', checkOnTop);
    }, [])

    function checkOnTop() {
        if (downArrow.current === null) {
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

            
            <div className='landing__exampleOnePic'>
                <img src={example1} alt="example"></img>
            </div>

            <div className='landing__exampleOneText'>
                <h2>Your SparkNotes for Cooking</h2>
                <p>We went the mile, read the recipes, tested and tasted many dishes and put it all together for you. We help you navigate to the perfect dishes, like GoodReads for online recipes, but we also give summary and insights we have gathered like spark notes for cooking. We always credit and link to our sources. </p>
            </div>

            <div className='landing__exampleTwoPic'>
                <img src={example2} alt="example"></img>
            </div>

            <div className='landing__exampleTwoText'>
                <h2>Choice-free. So you have more time to cook</h2>
                <p>Our easy to use interface, accessible through the web on your computer or phone, helps you navigate to our carefully choosen recipe in no time at all. Each day we focus on core concepts and takeaway which we found most useful in our cooking today. By the end, you will sure be a competent home cook!</p>
            </div>

            <div className='landing__footer'>
                <h3>Website by Aaron Xie</h3>
                <p>Built with React.js and Firestore</p>
            </div>


        </div>

    )
}

export default Landing;
