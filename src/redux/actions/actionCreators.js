import actionTypes from './actionTypes';
//import store from '../store';
//import { bindActionCreators } from 'redux';

const getPokemonData = name => ({type:actionTypes.getPokemonData, payload: name});
const fetchSucceeded = (payload) => ({type: actionTypes.fetchSucceeded, payload});
const fetchFailed = (e) => ({type: actionTypes.fetchFailed, payload: e});

const allActions = {
    get: getPokemonData,
    success: fetchSucceeded,
    failed: fetchFailed
};

//const actions = bindActionCreators(allActions, store.dispatch);

export default allActions;