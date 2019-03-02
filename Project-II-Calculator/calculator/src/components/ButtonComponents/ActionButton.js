import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const actions = [0, 'clear'];

const actionsMap = actions.map((actions) =>
    <button class="Single-Button">{actions}</button>
);

function ActionButton () {
    return (
        <div class="Action-Buttons">
        { actionsMap }
        <NumberButton />
        </div>
    )
}

export default ActionButton;