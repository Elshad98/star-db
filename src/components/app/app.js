import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import swapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails, { Record } from '../item-details';
import ErrorBoundary from '../error-boundary';

import { SwapiServiceProvider } from '../swapi-service-context';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import './app.css';

class App extends React.Component {
    constructor() {
        super();

        this.swapiService = new swapiService();
        this.state = {
            selectedPerson: Math.floor(Math.random() * 10) + 1,
            hasError: false
        };
        this.onPersonSelected = this.onPersonSelected.bind(this);
    }

    onPersonSelected(id) {
        this.setState({
            selectedPerson: id
        });
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) { return <ErrorIndicator /> }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div>
                        <Header />
                        <PersonDetails itemId={11} />

                        <PlanetDetails itemId={5} />

                        <StarshipDetails itemId={9} />

                        <PersonList />

                        <StarshipList />

                        <PlanetList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}

export default App;