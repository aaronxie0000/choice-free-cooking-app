import React, {useRef} from 'react';

function ChooseDay(props){

    const chooseDay = useRef();

    function showChooseDay(){
        console.log(chooseDay.current.className);
        chooseDay.current.className = 'showChooseDay';
        console.log(chooseDay.current.className);
    }

    return(
        <div>
            <button onClick={showChooseDay}>Choose Day</button>
            {/* These will use absoulte positioning, similar method as the sign in page */}
            <div ref={chooseDay} className="hiddenChooseDay">
                {/* here will have a back button that will again hide the choose day */}
            </div>
        </div>
        
    )
}

export default ChooseDay;
