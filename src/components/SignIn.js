import React, {useRef} from 'react';


function SignIn(){
    const logInPage = useRef();

    function showSignIn(){
        console.log(logInPage.current.className )
        logInPage.current.className = 'shownSignIn';
        console.log(logInPage.current.className)
    }

    function newUser(){
        console.log('form works')
    }

    return(
        <div>
            {/* instead of using react router, this component can be imported into multiple page, sign in button can be absoulte positioned, and when click, the other hidden elements of the sign in page are show  */}
            <button onClick={showSignIn}>Sign In</button>  
            <div ref={logInPage} className="hiddenSignIn">
                {/* here will do an translucent overlay of elements below and show the login card */}
                <form onSubmit={newUser}>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Password'></input>
                    <button type="submit"></button>
                </form>
            </div>   
        </div>
        
    )

}

export default SignIn;
