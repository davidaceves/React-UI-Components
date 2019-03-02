import React from 'react';
import './Button.css';

const ButtonCreator = props => {
    return (
        <button className={'btn-styles ${props.symbolStyles}'}>{props.text}</button>
    )
}

function NumberButton () {
    return (
        <div className="numbersButtons">
        
         <ButtonCreator text="÷" symbolStyles="symbols"/>
         <ButtonCreator text="x" symbolStyles="symbols"/>
         <ButtonCreator text="-" symbolStyles="symbols"/>
         <ButtonCreator text="+" symbolStyles="symbols"/>
         <ButtonCreator text="=" symbolStyles="symbols"/>

        </div>
    )
}

export default NumberButton;
