import React from 'react';
import './Button.css';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const numbersMap = numbers.map((number) =>
    <button class="Single-Button">{number}</button>
);

function NumberButton (props) {
    return (
        <div class="Numbers-Buttons">
        {
         numbersMap
        }
        </div>
    )
}

export default NumberButton;
