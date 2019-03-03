import React from 'react';
import './Button.css';

function ActionButton () {
    return (
        <div className="actionButton">
            <p className='display'>0</p>
            <button className='clear'>clear</button>
        </div>
    )
}

export default ActionButton;