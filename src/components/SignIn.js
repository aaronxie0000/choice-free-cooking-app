import React, { useState} from 'react';
import SignInModal from './SignInModal.js'
import './signInStyles/signIn.css'


function SignIn(props){
    const [isOpen, setIsOpen] = useState(false);


   
    return(
        <>
            <button onClick={()=>setIsOpen(true)} className={props.specificClassName}>Sign In</button> 
        
            <SignInModal open={isOpen} onClose={()=>setIsOpen(false)}></SignInModal>
        </>
        
    )

}

export default SignIn;
