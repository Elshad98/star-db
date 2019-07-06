import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class SwapiService{
    constructor(){
        this._apiBase = 'https://swapi.co/api';
    }

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if(!response.ok){
            throw new Error(`Could not found ${url} received ${response.status}`);
        }
        return await response.json();
    }

    async getAllPeople(){
        const res = await this.getResource('/people/');
        return res.results;
    }

    getPerson(id){
        return this.getResource(`/people/${id}/`);
    }
    
    async getAllPlanet(){
        const res = await this.getResource('/planets/');
        return res.results;
    }

    getPlanet(id){
        return this.getResource(`/planets/${id}`);
    }

    async getAllStarships(){
        const res = await this.getResource(`/starships/`); 
        return res.results;
    }

    getStarship(id){
        return this.getResource(`/starships/${id}`);
    }
}

function App(){
    const swapi = new SwapiService();
    swapi.getAllStarships()
        .then((starships) => {
            starships.forEach((starship) => {
                console.log(starship.name);
            });
        });
    swapi.getStarship(3)
        .then((starship) => {
            console.log(starship);
        });
    return(
        <h1>Hello World</h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
