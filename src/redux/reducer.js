import {combineReducers} from 'redux';
import getDataReducer from './reducers/getDataReducer';

const rootReducer = combineReducers({
    getData: getDataReducer
});

export default rootReducer;
