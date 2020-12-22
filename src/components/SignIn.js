import React, { useState, useContext} from 'react';
import SignInModal from './SignInModal.js'
import {UserContext} from '../context/UserContext'


function SignIn(props){
    const [isOpen, setIsOpen] = useState(false);
    const [localUser, updateUser] = useContext(UserContext);
   
    return(
        <>
            <button onClick={()=>localUser ? alert('You are already Signed In') : setIsOpen(true)} className={props.specificClassName}>{localUser ?  localUser.email.match(/^.*?(?=@)/) : 'Sign In'}</button> 
        
            <SignInModal open={isOpen} onClose={()=>setIsOpen(false)}></SignInModal>
        </>
        
    )

}

export default SignIn;
