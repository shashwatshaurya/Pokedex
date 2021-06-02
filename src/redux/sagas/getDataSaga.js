import { call, put } from 'redux-saga/effects';
import actions from '../actions/actionCreators';
//import store from '../store';

function* getDataSaga(action) {
    try {
        let pokeName = action.payload;
        //console.log(pokeName);
        let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        const response = yield call(fetch, url);
        const data = yield call([response, response.json]);
        const specUrl = data.species.url;
        const picUrl = data.sprites.front_default;
        const type = data.types[0].type.name;
        const specRes = yield call(fetch, specUrl);
        const specData = yield call([specRes, specRes.json]);
        //console.log(specData);
        const desc = specData.flavor_text_entries[1].flavor_text;
        //console.log(desc);
        /* const picRes = yield call(fetch, figUrl);
        console.log(picRes);
        const pic = yield call([picRes, picRes.base64]);
        console.log(pic+'hi'); */
        const payload = {pokeName, type, desc, picUrl};
        //console.log(payload);
        yield put(actions.success(payload));
    } catch (e) {
        yield put(actions.failed(e));
    }
}

export default getDataSaga;