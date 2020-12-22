import {createContext, useState} from 'react';
import firebase from '../firebase.js';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [localUser, updateUser] = useState(firebase.auth().currentUser);

    console.log(localUser);

    return(
        <UserContext.Provider value={[localUser,updateUser]}>
            {props.children}
        </UserContext.Provider>
    )

}

