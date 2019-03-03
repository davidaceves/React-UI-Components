import React from 'react';
import './Button.css';

const ButtonCreator = props => {
    return (
        <button className={`btn-styles ${props.buttonStyles}`}>{props.text}</button>
    )
}

function NumberButton () {
    return (
        <div className="numbersButtons">

            <div className="symbolBtns">
                <ButtonCreator text="÷" buttonStyles="symbols"/>
                <ButtonCreator text="x" buttonStyles="symbols"/>
                <ButtonCreator text="-" buttonStyles="symbols"/>
                <ButtonCreator text="+" buttonStyles="symbols"/>
                <ButtonCreator text="=" buttonStyles="symbols"/>
            </div>

            <div className="numGrid">
                <ButtonCreator text="7" buttonStyles="numbers"/>
                <ButtonCreator text="8" buttonStyles="numbers"/>
                <ButtonCreator text="9" buttonStyles="numbers"/>
                <ButtonCreator text="4" buttonStyles="numbers"/>
                <ButtonCreator text="5" buttonStyles="numbers"/>
                <ButtonCreator text="6" buttonStyles="numbers"/>
                <ButtonCreator text="1" buttonStyles="numbers"/>
                <ButtonCreator text="2" buttonStyles="numbers"/>
                <ButtonCreator text="3" buttonStyles="numbers"/> 
            </div>

            <div className="zero">
                <ButtonCreator text="0" buttonStyles="numbers"/>
            </div>

        </div>
    )
}

export default NumberButton;
