import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-5">
                        <ItemList />
                    </div>
                    <div className="col-md-7">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;