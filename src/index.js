import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function App(){
    return(
        <h1>Hello World</h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
