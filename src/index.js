import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function App(){
    const getResource = async (url) => {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Could not found ${url} received ${response.status}`);
        }
        const body = await response.json();
        return body;
    }
    getResource('https://swapi.co/api/people/1/')
        .then((body) => {
            console.log(body);
        })
        .catch((error) => {
            console.error('Could not fetch', error);
        });
    return(
        <h1>Hello World</h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
