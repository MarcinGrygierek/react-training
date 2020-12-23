import { useSelector } from "react-redux";
import {Post} from "./Post";
import { RootState } from "./reducers";


interface Row {
   id: number,
   text: string
}



export const Posts = () => {
   const posts = useSelector((state: RootState) => state.posts.items);
   return (
       <>
           {posts.map((post: Row) => <Post key={post.id} id={post.id} text={post.text} />)}
       </>
   );
}
