import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addLike, removeLike } from './actions';

interface Row {
   id: number,
   text: string,
}

export const Post = ({id, text}: Row) => {
   const [liked, setLiked] = useState<boolean | null>();
   const [style, setStyle] = useState<object>({});
   const dispatch = useDispatch();

   const likeHandler = () => {
       const current = liked;
       setLiked(!current);
       changeBackground(!current);
       if(!current) {
        dispatch(addLike());
       }
       else {
        dispatch(removeLike());
       }
   }

   const changeBackground = (isLiked: boolean) => {
    isLiked ? setStyle({backgroundColor: '#0f0'}) : setStyle({backgroundColor: '#f00'});
   }

   return (
       <div>
           <div>{text}</div>
           <button onClick={likeHandler} style={style}>likeable/unlikeable</button>
       </div>
   );
}
