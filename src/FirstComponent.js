import React, { Component } from 'react';
import donald from './img/trump.jpg';
import './FirstComponent.css';

class FirstComponent extends Component {
    render() {
        return (
            <div className="FirstComponent">
                <aside>
                    <img src={donald} className='pretty-face' alt="happy-face"/>
                    <p>Your face </p> 
                    <p>when you've done your <span>first component</span></p>
                </aside>
            </div>
        )
    }
}

export default FirstComponent;