import React, {useRef} from 'react';

function ChangeDay({curDay, changeDay, myClassName}){

    const chooseDay = useRef();

    function showChooseDay(){
        console.log(chooseDay.current.className);
        chooseDay.current.className = 'showChooseDay';
        console.log(chooseDay.current.className);
    }

    return(
        <div className={myClassName}>
            <h3 onClick={showChooseDay}>{curDay}</h3>
            {/* These will use absoulte positioning, similar method as the sign in page */}
            <div ref={chooseDay} className="hiddenChooseDay">
                {/* here will have a back button that will again hide the choose day */}
            </div>
        </div>
        
    )
}

export default ChangeDay;
