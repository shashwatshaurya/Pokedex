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
        const type = data.types.map(arrElement => { return arrElement.type.name });
        const stats = {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defence: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefence: data.stats[4].base_stat,
            speed: data.stats[5].base_stat
        };
        const height = data.height;
        const weight = data.weight;
        const dexNum = data.id;
        const abilities = data.abilities.map(arrElement => { return arrElement.ability.name });
        const specRes = yield call(fetch, specUrl);
        const specData = yield call([specRes, specRes.json]);
        const catchRate = specData.capture_rate;
        const femaleRate = specData.gender_rate;
        //const color = specData.color.name;
        const hatchSteps = specData.hatch_counter;
        const eggGroups = specData.egg_groups.map(e => { return e.name });
        const habitat = specData.habitat.name;
        const desc = yield call(filterDesc,specData.flavor_text_entries);
        const payload = {pokeName, type, desc, picUrl, stats, height, weight, dexNum, abilities, catchRate, femaleRate, hatchSteps, eggGroups, habitat};
        //console.log(payload);
        yield put(actions.success(payload));
    } catch (e) {
        yield put(actions.failed(e));
    }
}

export default getDataSaga;