import React from 'react';
import Spiner from '../spinner';

import './item-list.css';

class ItemList extends React.Component {
    constructor() {
        super();

        this.state = {
            itelList: null
        };
    }

    componentDidMount() {
        const { getData } = this.props;
        console.log(getData);
        getData()
            .then((itelList) => {
                this.setState({
                    itelList: itelList
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
        const { itelList } = this.state;

        if (!itelList) {
            return <Spiner />
        }

        const items = this.renderItems(itelList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

export default ItemList;