import {createStore , combineReducers , applyMiddleware} from 'redux';
import {PoliticianReducer} from "./reducers/politicianReducer";
import {Comments} from "./reducers/comments";
import {Leaders} from "./reducers/leaders";
import {Promotions} from "./reducers/promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () =>{
    return createStore(
        combineReducers({
            politicians:PoliticianReducer,
            pagination:PoliticianReducer,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        }),
        applyMiddleware(logger, thunk)
);
};

