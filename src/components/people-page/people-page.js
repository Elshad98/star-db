import React from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import swapiService from '../../services/swapi-service';

import './people-page.js';

class PeoplePage extends React.Component {
    constructor() {
        super();

        this.swapiService = new swapiService();
        this.state = {
            selectedPerson: Math.floor(Math.random() * 10) + 1,
            hasError: false
        }
        this.onPersonSelected = this.onPersonSelected.bind(this);
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    onPersonSelected(selectedPerson) {
        this.setState({
            selectedPerson: selectedPerson
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row mb2">
                <div className="col-md-5 items">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                    />
                </div>
                <div className="col-md-7">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
}

export default PeoplePage;