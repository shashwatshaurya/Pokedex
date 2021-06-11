import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Form from '../components/Form';
import Card from '../components/Card';
import Nav from '../components/Nav';
import './App.css';

class Pokedex extends Component{
    render(){
        return (
            <Provider store={store}>
                <Nav />
                <div className="container search">
                    <Form />
                </div>
                <div className="container card">    
                    <Card />
                </div>
            </Provider>
        );
    }
}

export default Pokedex;