import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './random-planet.css';

class RandomPlanet extends React.Component {
    constructor() {
        super();

        this.swapiService = new SwapiService();
        this.state = {
            planet: {}
        };
        this.updatePlanet();
        this.onPlanetLoaded = this.onPlanetLoaded.bind(this);
    }

    onPlanetLoaded(planet) {
        this.setState({
            planet: planet
        });
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService.getPlanet(id)
            .then((planet) => this.onPlanetLoaded(planet));
    }

    render() {
        const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;

        return (
            <div className="random-planet  jumbotron rounded">
                <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Deameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RandomPlanet;