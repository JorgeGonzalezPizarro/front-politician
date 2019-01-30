import {createStore , combineReducers , applyMiddleware} from 'redux';
import {PoliticianReducer} from "./reducers/politicianReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {UpdateReducer} from "./reducers/UpdateReducer";

export const ConfigureStore = () =>{
    return createStore(
        combineReducers({
            politicians:PoliticianReducer,
            updating:UpdateReducer,
            pagination:PoliticianReducer,
        }),
        applyMiddleware(logger, thunk)
);
};

