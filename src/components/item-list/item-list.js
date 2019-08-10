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
        
        getData()
            .then((itelList) => {
                this.setState({
                    itelList: itelList
                });
            });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.children(item);

            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => { this.props.onItemSelected(id) }}>
                    {label}
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