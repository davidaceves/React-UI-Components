import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';


function CalculatorDisplay () {
    return (
        <div className="calcDisplay">
            <ActionButton />
            <NumberButton />
        </div>    
    );
}

export default CalculatorDisplay;