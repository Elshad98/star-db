import React from 'react';
import Spinner from '../spinner';

import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{item[field]}</span>
        </li>
    );
}

export { Record };

class ItemDetails extends React.Component {
    constructor() {
        super();

        this.state = {
            item: null,
            loading: true,
            image: null
        };
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            console.log(this.updatePerson);
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    loading: false,
                    image: getImageUrl(item)
                });
            });
    }

    render() {
        const { item, loading, image } = this.state;

        if (loading) {
            return <Spinner />
        }

        const { name } = item;
        return (
            <div className="item-details card" >
                <img className="item-image" src={image} alt="" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item: item });
                            })
                        }
                    </ul>
                </div>
            </div >
        );
    }
}

export default ItemDetails;