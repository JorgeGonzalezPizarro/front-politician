import * as ActionTypesCreate from '../../ActionTypes/Command/Actions'
import * as ActionTypes from '../../ActionTypes/Command/Actions'
import {fetch, fetchPoliticians} from "../Fetch/ActionCreators";
import {Routes} from "../../../shared/Politician/Routes";
import axios  from 'axios'
export const create = (data) => (dispatch) => {
    const route = Routes.filter((route) => route.name==='create')[0];
    dispatch( async () =>{
        return  axios.post(route.route ,Object.assign({},data), {
            headers: {
                'Content-Type': 'application/json'
            }})
                .then((response) => {
                    return dispatch(fetch())
                }).catch( function (error) {
                            dispatch(failedUpdate(error));
                        }
                );
    });
};
export const update = (data) => (dispatch) => {
    const route = Routes.filter((route) => route.name==='update')[0];
    dispatch(updating());
    dispatch(  () =>{
        return  axios.put(route.route ,Object.assign({},data), {
            headers: {
                'Content-Type': 'application/json'
            }})
                .then( (response) => {
                    dispatch(successUpdated());

                    return dispatch(fetchPoliticians());
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
