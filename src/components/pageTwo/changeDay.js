import React, { useContext, useState } from 'react';

import { DayContext } from '../../context/DayContext.js';

import ChangeDayModal from './ChangeDayModal.js'

function ChangeDay({ myClassName }) {
    const [dayID, updateDay] = useContext(DayContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={()=>setIsOpen(true)} className={myClassName}>
                <h3>{dayID}</h3>
            </div>


            <ChangeDayModal isOpen={isOpen} close={() => setIsOpen(false)} updateDay={updateDay}></ChangeDayModal>
        </>
    )
}

export default ChangeDay;
