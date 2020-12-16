import {createContext, useState} from 'react'

export const DayContext = createContext();

export const DayProvider = (props) => {
    const [dayID, updateDay] = useState('Day One');

    return(
        <DayContext.Provider value={[dayID,updateDay]}>
            {props.children}
        </DayContext.Provider>
    )

}

