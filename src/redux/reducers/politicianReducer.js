import * as ActionTypes from '../ActionTypes/Dishes/Actions'
import {Politicians} from "../../shared/politicians";

export  const initialState = {
    isLoading: true,
    politicians: [],
    error: undefined
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