import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spinner';

import './item-list.css';

class ItemList extends React.Component {
    constructor() {
        super();

        this.swapiServices = new SwapiService();
        this.state = {
            peopleList: null
        };
    }

    componentDidMount() {
        this.swapiServices.getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList: peopleList
                });
            });
    }

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => { this.props.onItemSelected(id) }}>
                    {name}
                </li>
            );
        });
    }

    render() {
        const { peopleList } = this.state;

        if (!peopleList) {
            return <Spiner />
        }
        const items = this.renderItems(peopleList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

export default ItemList;