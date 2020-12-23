interface Props {
    counter : number
 }
 
 export const LikesCount = ({counter} : Props) => {
    return (
        <div>You like {counter} item/s.</div>
    );
 }
 