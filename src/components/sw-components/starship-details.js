import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiServices } from '../hoc-helpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapiServices) => {
    return {
        getData: swapiServices.getStarship,
        getImageUrl: swapiServices.getStarshipImage
    };
}

export default withSwapiServices(StarshipDetails, mapMethodsToProps);