import * as ActionTypes from '../../ActionTypes/Comments/Actions'
import {dishesLoading, fetch} from "../Fetch/ActionCreators";
import axios from 'axios';
import {initialState} from "../../reducers/politicianReducer";

export const create = () => (dispatch) => {

    dispatch( async () =>{
        return  axios.post("http://localhost:3001/politicians")
                .then((response) => {
                    return dispatch(fetch(response.data))}
                ).catch(
                        function (error) {
                            dispatch(failed(error));
                        }
                );
    });
};
export const update = () => (dispatch) => {

    dispatch( async () =>{
        return  axios.post("http://localhost:3001/politicians")
                .then((response) => {
                    return dispatch(fetch(response.data))}
                ).catch(
                        function (error) {
                            dispatch(failedUpdate(error));
                        }
                );
    });
};


export const addPolitician = (...politician) => ({
   type : ActionTypes.ADD_POLITICIAN,
   payload : {
     ...politician
   }
});





export const failed = (error) => ({

    type: ActionTypes.FAILED,
    payload:
            {
                politicians: initialState.politicians,
                isLoading: false,
                error: error
            }

});
export const failedUpdate = (error) => ({

    type: ActionTypes.FAILED,
    payload:
            {
                politicians: [],
                isLoading: false,
                error: error
            }

});
