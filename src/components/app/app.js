import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './app.css';

class App extends React.Component {
    constructor() {
        super();

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
        console.log('componentDidCatch');
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) { return <ErrorIndicator /> }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-5 items">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-7">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;