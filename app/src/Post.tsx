import {useState, useEffect} from 'react';

interface Row {
   id: number,
   text: string,
   callback: (liked : boolean) => void
}

export const Post = ({id, text, callback}: Row) => {
   const [liked, setLiked] = useState<boolean | null>();
   const [style, setStyle] = useState<object>({});

   const likeHandler = () => {
       const current = liked;
       setLiked(!current);
       changeBackground(!current);
       callback(!current);
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
