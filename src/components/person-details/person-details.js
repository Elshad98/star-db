import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

class PersonDetails extends React.Component {
    constructor() {
        super();

        this.swapiService = new SwapiService();
        this.state = {
            person: null,
            loading: true
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
                    person: person,
                    loading: false
                });
            });
    }

    render() {
        const { person, loading } = this.state;
        return (
            <div className="person-details card">
                {loading ? <Spinner /> : <PersonView person={person} />}
            </div >
        );
    }
}

const PersonView = (props) => {
    const { id, name, gender, birthYear, eyeColor } = props.person;

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default PersonDetails;