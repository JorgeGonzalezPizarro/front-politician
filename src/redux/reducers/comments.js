import {COMMENTS} from '../../shared/Comments';
import * as ActionTypes from '../ActionTypes/Comments/Actions'

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POLITICIAN:
            return state.concat(
                {
                    ...action.payload
                }
            );
        case ActionTypes.UPDATE_POLITICIAN:
            return state.filter((comment) => comment.id !== action.payload.commentId);
        default :
            return state;
    }
};