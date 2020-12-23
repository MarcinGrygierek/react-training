import {Post} from "./Post";

interface Props {
   callback: (liked : boolean) => void
}

interface Row {
   id: number,
   text: string
}

const posts = [
   { id: 1, text: 'Lorem' },
   { id: 2, text: 'Ipsum' },
   { id: 3, text: 'Dolor' },
   { id: 4, text: 'Sit' },
]

export const Posts = ({callback} : Props) => {
   return (
       <>
           {posts.map((post: Row) => <Post key={post.id} id={post.id} text={post.text} callback={callback}/>)}
       </>
   );
}
