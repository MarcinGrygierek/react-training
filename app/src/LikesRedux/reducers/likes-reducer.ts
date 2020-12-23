import { LikesActions } from "../action-types";

export interface LikesState {
    count: number
}

interface AddLike {
    type: LikesActions.ADD_LIKE
}

interface RemoveLike {
    type: LikesActions.REMOVE_LIKE
}

type Action = AddLike | RemoveLike;

const initialState: LikesState = {
    count: 0
}

export default (state = initialState, action: Action) => {
    switch(action.type) {
        case LikesActions.ADD_LIKE: {
           return {
               ...state,
               count: state.count + 1
           }
        }
        case LikesActions.REMOVE_LIKE:  {
            return {
                ...state,
                count: state.count - 1
            }; 
        }
        default: return initialState;
    }
}