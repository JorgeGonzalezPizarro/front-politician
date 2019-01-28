import * as ActionTypes from '../ActionTypes/Dishes/Actions'
import {Politicians} from "../../shared/politicians";

export  const initialState = {
    isLoading: true,
    dishes: [],
    error: undefined
};
export const Dishes = (state = initialState, action) => {
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