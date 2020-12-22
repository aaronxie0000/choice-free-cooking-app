import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './signInStyles/signIn.css'
// import {AiOutlineCheckCircle} from 'react-icons/ai'
import undrawFigure2 from '../assets/undrawFigure2.svg'



function SignInModal({ open, children, onClose }) {
    const [oldUser, updateUserType] = useState(false)

    if (!open) {
        return null;
    }

    function userSignIn(e){
        e.preventDefault();
        alert('Proper user sign in and profile features are still in development and will be deployed when ready!')
        onClose();
    }


    return ReactDom.createPortal(
        <>
            <div className='signInModal__overlay'></div>
            <div className='signInModal'>
                <div className='signInModal__exit' onClick={onClose}>x</div>
                <img className="signInModal__figure" src={undrawFigure2} alt='Just a drawing'></img>
                <div className='signInModal__mainText'>
                    <h1 className='signInModal__title'>{oldUser ? 'Sign In' : 'Welcome'}</h1>
                    <form className="signInModal__form" onSubmit={userSignIn}>
                        <input className="signInModal__form__email" type="email" placeholder="Email"></input>
                        <input className="signInModal__form__pass" type="password" placeholder="Password"></input>
                        <button className="signInModal__form__submit" type="submit">Submit</button>
                    </form>
                    <p className="signInModal__oldUser" onClick={() => updateUserType(prev => !prev)}>{oldUser ? 'New?' : 'Returning?'}</p>
                </div>
            </div>
        </>
        , document.getElementById('portal'))
}

export default SignInModal;