import {createContext, useState} from 'react'

export const UserDataContext = createContext();

export function UserDataProvider (props){
    const [dayID, updateDay] = useState('Day One');
    const [recipeID, updateRecipeID] = useState();

    return(
        <UserDataProvider.Provider value={{day: [dayID,updateDay], recipe:[recipeID,updateRecipeID]}}>
            {props.children}
        </UserDataProvider.Provider>
    )

}

