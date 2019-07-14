import React from 'react';
import icon from './death-star.png';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM!</span>
            <span className="description">
                something has gone terrible wrong
            </span>
            <span className="description">
                (but we already sent droids to fix it)
            </span>
        </div>
    );
}

export default ErrorIndicator;