import { takeEvery } from 'redux-saga/effects';
import getDataSaga from './sagas/getDataSaga';
import actionTypes from './actions/actionTypes';

function* rootSaga() {
    yield takeEvery(actionTypes.getPokemonData, getDataSaga);
};

export default rootSaga;