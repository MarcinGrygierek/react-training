import { LikesActions } from "../action-types";

export const addLike = () => {
    return (dispatch: any) => {
        // symulacja asynchroniczności - docelowo znajdują się tutaj async/await i/lub promisy
        setTimeout(() => {
            dispatch({ type: LikesActions.ADD_LIKE });
        }, 2000);
    }
}

export const removeLike = () => ({ type: LikesActions.REMOVE_LIKE });