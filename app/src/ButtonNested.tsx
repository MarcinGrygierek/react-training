interface Props {
    handleClick: () => void;
}

const ButtonNested = ({handleClick}: Props) => {
    return <button onClick={handleClick}>click me</button>
}

export default ButtonNested;