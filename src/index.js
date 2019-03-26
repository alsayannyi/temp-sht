import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import FirstComponent from './FirstComponent';
import * as serviceWorker from './serviceWorker';

function Combine() {
    return (
        <div>
            <App />
            <FirstComponent />
        </div>  
    )
}
ReactDOM.render(<Combine />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
