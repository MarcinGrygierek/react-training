import { combineReducers } from "redux";
import likesReducer, { LikesState } from "./likes-reducer";
import postsReducer, { PostsState } from "./posts-reducer";

export interface RootState {
    likes: LikesState,
    posts: PostsState
}

const rootReducer = combineReducers({
    likes: likesReducer,
    posts: postsReducer
})

export default rootReducer;

// {
//     likes: {
//         count: 0
//     },
//     posts: {
//         items:  [
//                 { id: 1, text: 'Lorem' },
//                 { id: 2, text: 'Ipsum' },
//                 { id: 3, text: 'Dolor' },
//                 { id: 4, text: 'Sit' },
//              ]
            
//     }
// }