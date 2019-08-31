import React from 'react';

import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService;

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

console.log(getAllPeople);
console.log(getAllPlanets)
console.log(getAllStarships)

const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarShipList = withData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarShipList
}