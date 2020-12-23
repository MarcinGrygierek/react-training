import {LikesCount} from "./LikesCount";
import {Posts} from "./Posts";
import {useState} from "react";

export const Likes = () => {
   const [counter, setCounter] = useState<number>(0);

   const changeLikeCounter = (liked : boolean) => {
       console.log('changeLikeCounter: ', liked);
       setCounter(prev => liked ? prev+1 : prev-1);
   }

   return (
       <>
           <LikesCount counter={counter}/>
           <Posts callback={changeLikeCounter}/>
       </>
   );
}
