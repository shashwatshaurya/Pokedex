import actionTypes from '../actions/actionTypes';

const initialState = {
    pkList: [],
    pkName: '',
    desc: '',
    type: [],
    stats: {},
    height: '',
    weight: '',
    dexNum: '',
    abilities: [],
    catchRate: '',
    femaleRate: '',
    hatchSteps: '',
    eggGroups: [],
    habitat: '',
    //color: '',
    pLink:'',
    error: false,
    emsg: ''
}

const getDataReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.getPokemonData:
            {
                let st = {...state};
                return st;
            }
        case actionTypes.fetchSucceeded:
            {
                let st = {...state};
                st.pkList = [...state.pkList, action.payload.pokeName];
                st.pkName = action.payload.pokeName;
                st.desc = action.payload.desc;
                st.type = action.payload.type;
                st.pLink = action.payload.picUrl;
                st.stats = action.payload.stats;
                st.height = action.payload.height;
                st.weight = action.payload.weight;
                st.dexNum = action.payload.dexNum;
                st.abilities = action.payload.abilities;
                st.catchRate = action.payload.catchRate;
                st.femaleRate = action.payload.femaleRate;
                st.hatchSteps = action.payload.hatchSteps;
                st.eggGroups = action.payload.eggGroups;
                st.habitat = action.payload.habitat;
                //st.color = action.payload.color;
                st.error = false;
                st.emsg = '';
                //console.log(st);
                return st;
            }   
        case actionTypes.fetchFailed:
            {
                const st = {...state, error: true, emsg: action.payload};
                //st.error = true;
                //st.emsg = action.payload;
                //console.log(st);
                return st;
            }   
        default:
            return state;      
    }
};

export default getDataReducer;