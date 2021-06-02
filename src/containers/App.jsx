import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Form from '../components/Form';
import Card from '../components/Card';

class Pokedex extends Component{
    render(){
        return (
            <Provider store={store}>
                    <h1>Pokedex</h1>
                    <Form />
                    <Card />
            </Provider>
        );
    }
}

export default Pokedex;