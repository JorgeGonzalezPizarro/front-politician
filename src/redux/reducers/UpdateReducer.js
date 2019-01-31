import * as ActionTypes from '../ActionTypes/Command/Actions'

export  const initialState = {
    isLoading: false,
    updated: false,
    error: undefined,
};
export const UpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SUCCESS:
            return {...state, ...action.payload};
        case ActionTypes.FAILED:
            return {...state,...action.payload}

        case ActionTypes.UPDATE_POLITICIAN:
            return {...state,...action.payload};

        default:
            return state;
    }
};