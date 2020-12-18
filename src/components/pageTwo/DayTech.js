import React from 'react';

function DayTech({givenClassName, techNo, techDesc}){

    return(
        <div className={givenClassName + ' dayTech'} >
            <h3 className='dayTech__no'>{techNo}</h3>
            <h3 className='dayTech__desc'>{techDesc}</h3>
        </div>
    )
}

export default DayTech;

