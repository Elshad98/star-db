import React from 'react';

import './person-details.css';

class PersonDetails extends React.Component {
    render() {
        return (
            <div className="person-details card">
                <img className="person-image" src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="" />
                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>mail</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye color</span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PersonDetails;