import React, {useRef} from 'react';
import './SignIn.css'


function SignIn(){
    const logInPage = useRef();

    function showSignIn(){
        console.log(logInPage.current.className )
        logInPage.current.className = 'shownSignIn';
        console.log(logInPage.current.className)
    }

    function newUser(e){
        console.log('form works')
    }

    return(
        <>
         <button onClick={showSignIn} className="landing__signIn">Sign In</button>  
            

            {/* instead of using react router, this component can be imported into multiple page, sign in button can be absoulte positioned, and when click, the other hidden elements of the sign in page are show  */}
            <div ref={logInPage} className="hiddenSignIn">
                {/* here will do an translucent overlay of elements below and show the login card */}
                <form onSubmit={newUser}>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Password'></input>
                    <button type="submit">Sign me In! </button>
                </form>
            </div>   

        </>
        
    )

}

export default SignIn;
