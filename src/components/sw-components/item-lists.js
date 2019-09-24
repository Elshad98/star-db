import React from 'react';

import ItemList from '../item-list';
import { withData, withSwapiServices } from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
}

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
}

const PersonList = withSwapiServices(
    withData(
        withChildFunction(ItemList, renderName)),
        mapPersonMethodsToProps);

const PlanetList = withSwapiServices(
    withData(
        withChildFunction(ItemList, renderName)),
        mapPlanetMethodsToProps);

const StarshipList = withSwapiServices( 
    withData(
        withChildFunction(ItemList, renderModelAndName)),
        mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}