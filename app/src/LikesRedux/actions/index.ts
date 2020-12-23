import { Dispatch } from "react";
import { LikesActions } from "../action-types";

export const addLike = () => {
    return (dispatch: Dispatch<{type: LikesActions}>) => {
        // symulacja asynchroniczności - docelowo znajdują się tutaj async/await i/lub promisy
        setTimeout(() => {
            dispatch({ type: LikesActions.ADD_LIKE });
        }, 2000);
    }
}

export const removeLike = () => ({ type: LikesActions.REMOVE_LIKE });

// export const fetchData = () => async (dispatch: Dispatch<{ type: Posts}>) => {
//     const posts = await ApiService.get('/posts');
//     dispatch({ type: Posts.FETCH_ALL, payload: posts})
// }