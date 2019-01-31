import * as ActionTypes from '../ActionTypes/Fetch/Actions'

export  const initialState = {
    isLoading: true,
    politicians: [],
    error: undefined,
    pagination: null
};
export const PoliticianReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH:
            return {...state, ...action.payload};

        case ActionTypes.LOADING:
            return {...state,...action.payload}

        case ActionTypes.FAILED:
            return {...state,...action.payload};

        default:
            return state;
    }
};