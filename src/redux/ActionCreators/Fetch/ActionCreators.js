import * as ActionTypes from '../../ActionTypes/Dishes/Actions'
import {Politicians} from '../../../shared/politicians'
import {initialState} from "../../reducers/politicianReducer";
import axios from 'axios';
import {Routes} from "../../../shared/Politician/Routes";

export const fetchPoliticians = () => (dispatch) => {

    dispatch(loading());
    dispatch( async () =>{
        const route = Routes.filter((route) => route.name==='fetch')[0];

      return  axios.get(route.route)
            .then((response) => {
               return dispatch(fetch(response.data))}
            );
    });
};

export const loading = () => ({

    type: ActionTypes.LOADING,
    payload: {
        politicians: [],
        error: null,
        isLoading: initialState.isLoading,
        pagination: null,

    }
});


export const fetch = (politicians) => (
    {
        type: ActionTypes.FETCH,
        payload: {
            isLoading: false,
            error: null,
            politicians: politicians.politicians,
            pagination: politicians.meta,
        }
    }
);

export const failed = (error) => ({

    type: ActionTypes.FAILED,
    payload:
        {
            politicians: initialState.politicians,
            isLoading: false,
            error: error,
            pagination: null
        }

});

