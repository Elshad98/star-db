import React from 'react';

import './header.css';

const Header = ({ onServiceChange }) => {
    return (
        <div className="header d-flex">
            <h3>
                <button>
                    Star DB
                </button>
            </h3>
            <ul className="d-flex">
                <li>
                    <button href="#">People</button>
                </li>
                <li>
                    <button href="#">Planets</button>
                </li>
                <li>
                    <button href="#">Starships</button>
                </li>
            </ul>

            <button
                className="btn btn-primary btn-sm btn-m-top"
                onClick={onServiceChange}>
                Change Service</button>
        </div>
    );
};

export default Header;