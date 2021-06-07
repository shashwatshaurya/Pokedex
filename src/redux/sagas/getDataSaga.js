import { call, put } from 'redux-saga/effects';
import actions from '../actions/actionCreators';
//import store from '../store';

function filterDesc(descs) {
    let i = 0;
    while(descs[i].language.name!=='en')
         i++;
    
    //desc1- the first occuring english description
    const desc1 = descs[i].flavor_text.replace('\n', ' ');
    //console.log('desc1-', desc1);

    const flavorX = descs.slice((descs.length)/4).filter(desc => desc.version.name === 'x' && desc.language.name === 'en');

    //desc2 - english description for pokemon version x&y
    const desc2 = flavorX.length!==0?flavorX[0].flavor_text:false;
    //console.log('desc2-', desc2);

    return desc2 || desc1 || 'Text not available in english.';
}

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
        //let descr = yield filterDesc();
        //const desc = specData.flavor_text_entries[1].flavor_text;
        const desc = yield call(filterDesc,specData.flavor_text_entries);
        //console.log(desc);
        /* const picRes = yield call(fetch, figUrl);
        console.log(picRes);
        const pic = yield call([picRes, picRes.base64]);
        console.log(pic+'hi'); */
        const payload = {pokeName, type, desc, picUrl};
        console.log(payload);
        yield put(actions.success(payload));
    } catch (e) {
        yield put(actions.failed(e));
    }
}

export default getDataSaga;