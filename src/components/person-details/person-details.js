import React from 'react';
import SwapiService from '../../services/swapi-service';

import './person-details.css';

class PersonDetails extends React.Component {
    constructor() {
        super();

        this.swapiService = new SwapiService();
        this.state = {
            person: null
        };
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        this.swapiService.getPerson(personId)
            .then((person) => {
                this.setState({
                    person: person
                });
            });
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from list</span>;
        }
        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div className="person-details card">
                <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PersonDetails;