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
                return state;
            }
        case actionTypes.fetchSucceeded:
            {
                let st = state;
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
                let st = state;
                st.error = true;
                st.emsg = action.payload;
                //console.log(st);
                return st;
            }   
        default:
            return state;      
    }
};

export default getDataReducer;