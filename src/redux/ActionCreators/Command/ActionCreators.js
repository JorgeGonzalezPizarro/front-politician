import * as ActionTypesCreate from '../../ActionTypes/Comments/Actions'
import * as ActionTypes from '../../ActionTypes/Comments/ActionUpdate'
import {loading, fetch, fetchPoliticians} from "../Fetch/ActionCreators";
import axios from 'axios';
import {Routes} from "../../../shared/Politician/Routes";

export const create = (data) => (dispatch) => {
    const route = Routes.filter((route) => route.name==='update')[0];
    dispatch( async () =>{
        return  axios.post(route.route ,Object.assign({},data), {
            headers: {
                'Content-Type': 'application/json'
            }})
                .then((response) => {
                    alert(response);
                    return dispatch(fetch())
                }).catch(
                        function (error) {
                            dispatch(failedUpdate(error));
                        }
                );
    });
};
export const update = (data) => (dispatch) => {
    const route = Routes.filter((route) => route.name==='update')[0];
    dispatch(updating());
    console.log(data);
    dispatch( async () =>{
        return  axios.put(route.route ,Object.assign({},data), {
            headers: {
                'Content-Type': 'application/json'
            }})
                .then((response) => {
                            alert(response);
                             dispatch(successUpdated())
                            return dispatch(fetchPoliticians())
                }).catch(
                        function (error) {
                            dispatch(failedUpdate(error));

                        }
                );
    });
};


export const addPolitician = (...politician) => ({
   type : ActionTypesCreate.ADD_POLITICIAN,
   payload : {
     ...politician
   }
});




export const updating = () => ({
    type: ActionTypes.UPDATE_POLITICIAN,
    payload:
            {
                updated: false,
                isLoading: true,
                error: undefined
            }
});

export const noAction = () => ({
    type: ActionTypes.FAILED,
    payload:
            {
                updated: false,
                isLoading: false,
                error: undefined
            }
});

export const failedUpdate = (error) => ({
    type: ActionTypes.FAILED,
    payload:
            {
                updated: false,
                isLoading: false,
                error: error
            }
});

export const successUpdated = () => ({
    type: ActionTypes.SUCCESS,
    payload:
            {
                updated: true,
                isLoading: false,
                error: undefined
            }
});
