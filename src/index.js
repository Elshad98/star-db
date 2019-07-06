import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function App(){
    const getResource = async (url) => {
        const response = await fetch(url);
        const body = await response.json();
        return body;
    }
    getResource('https://swapi.co/api/people/1/')
        .then((body) => {
            console.log(body);
        });
    return(
        <h1>Hello World</h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
