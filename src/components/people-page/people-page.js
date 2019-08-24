import React from 'react';

import ErrorBoundary from '../error-boundary';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';

import swapiService from '../../services/swapi-service';

import './people-page.js';

class PeoplePage extends React.Component {
    constructor() {
        super();

        this.swapiService = new swapiService();
        this.state = {
            selectedPerson: Math.floor(Math.random() * 10) + 1
        }
        this.onPersonSelected = this.onPersonSelected.bind(this);
    }

    onPersonSelected(selectedPerson) {
        this.setState({
            selectedPerson: selectedPerson
        });
    }

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(i) => `${i.name} (${i.birthYear})`}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundary>
                <ItemDetails itemId={this.state.selectedPerson} />
            </ErrorBoundary>
        );

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}

export default PeoplePage;