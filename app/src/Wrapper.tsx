interface Props {
    children: React.ReactNode;
}

const Wrapper = ({children}: Props) => {
    return <div style={{
        padding: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    }}>
        {children}
    </div>
}

export default Wrapper;