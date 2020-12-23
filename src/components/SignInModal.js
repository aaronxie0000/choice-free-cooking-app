import React, { useState, useRef, useContext, useEffect, useMemo } from 'react';
import { DayContext } from '../context/DayContext.js'
import ReactDom from 'react-dom';
import firebase from '../firebase.js';

import './signInStyles/signIn.css';

import undrawFigure2 from '../assets/undrawFigure2.svg';

import {UserContext} from '../context/UserContext'


function SignInModal({ open, children, onClose }) {
    const [oldUser, updateUserType] = useState(true);
    const [loading, updateLoad] = useState(false);
    const [localUser, updateUser] = useContext(UserContext);

    const [dayID, updateDay] = useContext(DayContext);
    const [tempDayID, updateTempDay] = useState(dayID);

    // firebase.auth().currentUser
    const email = useRef();
    const pass = useRef();


    useMemo(updateUserData, [dayID]);
    useMemo(manageUserData, [localUser]); //useMemo does not fix the bug

    
    //this does not work to fix the issue
    useEffect(()=>{
        console.log(tempDayID + ' right hereeeeeeee');
        updateDay(tempDayID);
    },[tempDayID]);


    if (!open) {
        return null;
    }

    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //        console.log(user);
    //     } else {
    //       console.log('fail');
    //     }
    //   });

    function manageUserData() {

        if (localUser === null) return;
        if(loading) return;

        console.log('expensive call');

        if (oldUser) {
            updateLoad(true);
            
            firebase.firestore().collection('usersDay').where('uid', '==', localUser.uid)
                .onSnapshot((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const rawData = doc.data();
                        // updateDay(rawData.day); //!!! comment; bug is gone
                        updateTempDay(rawData.day);
                    })

                })
            updateLoad(false);
        }
        else if (localUser != null) {
            updateLoad(true);
            
            firebase.firestore().collection('usersDay').add({
                uid: localUser.uid,
                day: dayID,
            })
            .then()
            .catch((err) => { console.log(err) })
            updateLoad(false);
        }
    }


    function updateUserData() {

        if (localUser == null) return;
        if(loading) return;
        
        console.log('expensive call');

        updateLoad(true);
        firebase.firestore().collection('usersDay').where('uid', '==', localUser.uid).limit(1).get().then((query) => {
            if (query.docs[0] == null) return;
            const myDoc = query.docs[0];
            myDoc.ref.update({ day: dayID });

            // myDoc.data().value.day = 'blahhhh';
            // console.log(thing.ref);
            // var currVal = thing.data().value;                                               
            // const newVal = currVal - minus;
            // thing.ref.update({value:newVal});
        })
        updateLoad(false);


    }

    function userSignIn(e) {
        e.preventDefault();

        if (oldUser) {
            firebase.auth().signInWithEmailAndPassword(email.current.value, pass.current.value)
                .then((thisUser) => {
                    updateUser(thisUser.user)
                })
                .catch((error) => {
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage);
                });
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email.current.value, pass.current.value)
                .then((thisUser) => {
                    updateUser(thisUser.user);
                })
                .catch((error) => {
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage);
                });
        }

        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //       // User is signed in.
        //     } else {
        //       // No user is signed in.
        //     }
        //   });
        // or
        // var user = firebase.auth().currentUser;


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
                        <input ref={email} className="signInModal__form__email" type="email" placeholder="Email"></input>
                        <input ref={pass} className="signInModal__form__pass" type="password" placeholder="Password"></input>
                        <button className="signInModal__form__submit" type="submit">Submit</button>
                    </form>
                    <p className="signInModal__oldUser" onClick={() => updateUserType(prev => !prev)}>{oldUser ? 'New?' : 'Returning?'}</p>
                </div>
            </div>
        </>
        , document.getElementById('portal'))
}

export default SignInModal;