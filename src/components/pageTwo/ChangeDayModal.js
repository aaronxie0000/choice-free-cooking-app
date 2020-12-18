import React from 'react';
import ReactDom from 'react-dom';

import arrow2 from '../../assets/arrow2.svg';


function ChangeDayModal({ isOpen, close, updateDay }) {


    if (!isOpen) {
        return null;
    }

    function choosenDay(day){
        updateDay(day);
        close();
    }

    return ReactDom.createPortal(
        <>
            <div className={'changeDayPop__overlay'}></div>
            <div className={'changeDayPop'}>
                <img className={'changeDayPop__backBtn'} onClick={() => close()} src={arrow2} alt='Back Button'></img>
                <div className={'changeDayPop__backCircle'}></div>

                <div onClick={() => choosenDay('Day One')} className={'changeDayPop__dayOne'}>
                    <h3>Day One</h3>
                </div>
                <div onClick={()=>choosenDay('Day Two')} className={'changeDayPop__dayTwo'}>
                    <h3>Day Two</h3>
                </div>

                <p className={'changeDayPop__note'}>...im working on more. Let me know if you wanna lend a hand!</p>
            </div>
        </>
        , document.getElementById('portal'))
}

export default ChangeDayModal;

