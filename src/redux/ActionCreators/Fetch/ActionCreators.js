import * as ActionTypes from '../../ActionTypes/Dishes/Actions'
import {Politicians} from '../../../shared/politicians'
import {initialState} from "../../reducers/politicianReducer";
import axios from 'axios';

export const fetchPoliticians = (page = 1) => (dispatch) => {
    dispatch(dishesLoading());
    dispatch( async () =>{
      return  axios.get(`http://localhost/api-politicians/public/index.php?XDEBUG_SESSION_START=11556&page=${ page }`)
            .then((response) => {
               return dispatch(fetch(response.data))}
            );
    });
};

export const dishesLoading = () => ({

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

