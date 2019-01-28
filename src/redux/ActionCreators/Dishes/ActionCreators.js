import * as ActionTypes from '../../ActionTypes/Dishes/Actions'
import {Politicians} from '../../../shared/politicians'
import {initialState} from "../../reducers/dishes";
import axios from 'axios';

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading());
    dispatch( async () =>{
      return  axios.get("http://localhost:3001/Politicians")
            .then((response) => {
               return dispatch(fetch(response.data))}
            );

    });

};

export const dishesLoading = () => ({

    type: ActionTypes.LOADING,
    payload: {
        dishes: [],
        error: null,
        isLoading: initialState.isLoading,
    }
});


export const fetch = (dishes) => (
    {
        type: ActionTypes.FETCH,
        payload: {
            isLoading: false,
            error: null,
            dishes: dishes,

        }
    }
);

export const failed = (error) => ({

    type: ActionTypes.FAILED,
    payload:
        {
            dishes: initialState.dishes,
            isLoading: false,
            error: error
        }

});

