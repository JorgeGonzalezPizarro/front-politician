import * as ActionTypes from '../../ActionTypes/Fetch/Actions'
import {initialState} from "../../reducers/politicianReducer";
import {Routes} from "../../../shared/Politician/Routes";
import axios  from 'axios'

export const fetchPoliticians = (page = 1) => (dispatch) => {
    dispatch(loading());
    dispatch( async () =>{
        const route = Routes.filter((route) => route.name==='fetch')[0];

      return  axios.get(route.route.concat(`?page=${page}`))
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
        form: null,

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
            form: politicians.form,
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

