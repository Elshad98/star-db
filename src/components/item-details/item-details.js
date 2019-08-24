import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-details.css';

class ItemDetails extends React.Component {
    constructor() {
        super();

        this.swapiService = new SwapiService();
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
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
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

        return (
            <div className="item-details card">
                {loading ? <Spinner /> : <ItemView item={item} iamge={image} />}
            </div >
        );
    }
}

const ItemView = (props) => {
    const { id, name, gender, birthYear, eyeColor } = props.item;

    return (
        <React.Fragment>
            <img className="item-image" src={props.iamge} alt="" />
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender:</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year:</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye color:</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default ItemDetails;