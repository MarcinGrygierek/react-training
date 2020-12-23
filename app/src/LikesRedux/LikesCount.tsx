import { useSelector } from "react-redux";
import { RootState } from "./reducers";

  export const LikesCount = () => {
    const counter = useSelector((state: RootState) => state.likes.count);
    return (
        <div>You like {counter} item/s.</div>
    );
 }
 