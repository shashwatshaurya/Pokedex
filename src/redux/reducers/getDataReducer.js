import actionTypes from '../actions/actionTypes';

const initialState = {
    pkList: [],
    pkName: '',
    desc: '',
    type: '',
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
                st.error = false;
                console.log(st);
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